import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';

const homeComponent = () => import('./components/home').then(({ HomeComponent }) => HomeComponent);
const listComponent = () => import('./components/list').then(({ ListComponent }) => ListComponent);
// const homeComponent = () => import(/* webpackChunkName: 'home' */'./components/home').then(({ HomeComponent }) => HomeComponent);
// const aboutComponent = () => import(/* webpackChunkName: 'about' */'./components/about').then(({ AboutComponent }) => AboutComponent);
// const listComponent = () => import(/* webpackChunkName: 'list' */'./components/list').then(({ ListComponent }) => ListComponent);

if (process.env.ENV === 'development' && module.hot) {
  const homeModuleId = './components/home';
  const listModuleId = './components/list';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(homeModuleId, homeComponent,
    module.hot.accept('./components/home', () => reload(homeModuleId, (<any>require('./components/home')).HomeComponent)));

  makeHot(listModuleId, listComponent,
    module.hot.accept('./components/list', () => reload(listModuleId, (<any>require('./components/list')).ListComponent)));
}

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: homeComponent,
  },
  {
    path: '/list',
    component: listComponent,
  }
];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });
