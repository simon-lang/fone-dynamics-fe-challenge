import { Component, Vue } from 'vue-property-decorator';

import './home.scss';

@Component({
    template: require('./home.html')
})
export class HomeComponent extends Vue {

    package: string = 'Client Accounts';
    repo: string = 'https://github.com/simon-lang/client-accounts';
    mode: string = process.env.ENV;

}
