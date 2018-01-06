import Vue from 'vue';
import VueRouter from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { createRouter } from './router';

import './sass/main.scss';

new Vue({
  el: '#app-main',
  router: createRouter(),
});
