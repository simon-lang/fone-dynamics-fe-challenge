import { Component, Vue } from 'vue-property-decorator';
import axios, { AxiosResponse } from 'axios';

interface UserResponse {
    id: string;
    name: string;
}

@Component({
    template: require('./list.html')
})
export class ListComponent extends Vue {

    // items: UserResponse[] = [];
    items: Object[];
    private url = '/assets/data.json';
    protected axios;

    constructor() {
      super();
      this.axios = axios;
      this.items = [];
    }

    mounted() {
        this.$nextTick(() => {
            this.loadItems();
        });
    }

    private loadItems() {
        if (!this.items.length) {
            this.axios.get(this.url).then((response: AxiosResponse) => {
                this.items = response.data;
            }, (error) => {
                console.error(error);
            });
        }
    }
}
