import { Component, Vue } from 'vue-property-decorator';
import axios, { AxiosResponse } from 'axios';

import './list.scss';

interface ClientAccount {
    AccountId: number;
    AccountName: string;
    Properties: ClientProperty[];
}

interface ClientProperty {
    PropertyId: number;
    Name: string;
    Account: ClientAccount;
}

@Component({
    template: require('./list.html')
})
export class ListComponent extends Vue {

    private _accounts: ClientAccount[] = [];
    private accounts: ClientAccount[] = [];
    private selectedAccount: ClientAccount = null;
    private properties: ClientProperty[] = [];
    private alert: string = '';
    private loading: boolean = true;
    private term: string = '';
    private url: string = '/assets/data.json';
    protected axios;

    constructor() {
      super();
      this.axios = axios;
    }

    mounted() {
        this.$nextTick(() => {
            this.loadItems();
        });
    }

    search() {
        const term = this.term.toLowerCase();
        this.selectedAccount = null;
        this.properties = [];
        // Search all properties
        this.accounts = this._accounts.filter(account => {
            const properties = account.Properties.filter(property => property.Name.toLowerCase().includes(term));
            this.properties = this.properties.concat(properties);
            return properties.length > 0;
        });
        // If no property matches, search accounts
        if (this.accounts.length === 0) {
            this.accounts = this._accounts.filter(account => account.AccountName.toLowerCase().includes(term));
            if (this.accounts.length > 0) {
                // Select first account
                this.selectAccount(this.accounts[0]);
            }
        }
    }

    clearTerm() {
        this.term = '';
        this.properties = [];
        this.search();
    }

    selectAccount(account: ClientAccount) {
        this.selectedAccount = account;
        this.properties = account.Properties;
    }

    selectProperty(property: ClientProperty) {
        this.alert = `Clicked ${property.Account.AccountName} - ${property.Name}`;
        this.$emit('ClientPropertySelected', property.Account, property);
    }

    clearAlert() {
        this.alert = '';
    }

    private loadItems() {
        if (!this.accounts.length) {
            this.axios.get(this.url).then((response: AxiosResponse) => {
                this.loading = false;
                // Map Properties back to parent Accounts for later
                response.data.forEach(account => {
                    account.Properties.forEach(property => {
                        property.Account = account;
                    });
                });
                this._accounts = response.data;
                this.search();
            }, (error) => {
                this.loading = false;
                console.error(error);
            });
        }
    }
}
