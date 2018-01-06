import Component from 'vue-class-component';
import { expect } from 'chai';
import { ComponentTest } from '../../util/component-test';
import { ListComponent } from './list';
const data = require('../../assets/data.json');

@Component({
  template: require('./list.html')
})
class MockListComponent extends ListComponent {
  constructor() {
    super();
    this.axios = {
      get: () => {
        return Promise.resolve({ data });
      }
    };
  }
}

describe('List component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><list></list></div>', { 'list': MockListComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();

    await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
        expect(vm.$el.querySelectorAll('.account-list-item').length).to.equal(3);
        expect(vm.$el.querySelectorAll('.property-list-item').length).to.equal(16);
    });
  });
});
