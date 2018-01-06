import { expect } from 'chai';
import { HomeComponent } from './home';
import { ComponentTest } from '../../util/component-test';

describe('Home component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><home></home></div>', { 'home': HomeComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      const mode = process.env.ENV;
      expect(vm.$el.querySelector('h1').textContent).to.equal('Client Accounts');
    });
  });
});
