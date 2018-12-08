import Vue from 'vue';
import Router from 'vue-router';

import {
  HomeTreeBuilder,
  AboutTreeBuilder,
} from './routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    HomeTreeBuilder('/', 'home'),
    AboutTreeBuilder('/about', 'about'),
  ],
});
