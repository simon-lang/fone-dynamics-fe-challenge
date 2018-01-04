import { Component, Vue } from 'vue-property-decorator';
import axios, { AxiosResponse } from 'axios';

interface ClientAccount {
    AccountId: number;
    AccountName: string;
    Properties: ClientProperty[];
}

interface ClientProperty {
    PropertyId: number;
    Name: string;
}

@Component({
    template: require('./list.html')
})
export class ListComponent extends Vue {

    accounts: ClientAccount[] = [];
    account: ClientAccount;
    properties: ClientProperty[] = [];
    term: string;
    private url = '/assets/data.json';
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
        // console.log(this.term);
    }

    selectAccount(account) {
        this.account = account;
        this.properties = account.Properties;
    }

    private loadItems() {
        if (!this.accounts.length) {
            this.axios.get(this.url).then((response: AxiosResponse) => {
                this.accounts = response.data;
            }, (error) => {
                console.error(error);
            });
        }
    }
}
