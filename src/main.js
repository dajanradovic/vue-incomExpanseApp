import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import form from './components/form';
import income from './components/income';
import list from './components/list';
import counter from './components/counter';
import {store} from './store/store';
import VueRouter from 'vue-router';
import nav from './components/nav';
import babelPolyfill from 'babel-polyfill';
import createUser from './components/createUser';
import home from './views/home';
import dataPage from './views/dataPage';
import radioInput from './components/radioInput';
import menuNav from './components/menuNav';









Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',

    routes:[
      {

        path: '/',
        component: home
      },

      {

        path: '/data',
        component: dataPage,
        children:[{

          path: 'expanse',
          component: form
                  },
                  {

                    path: 'income',
                    component: income
           //     },
                  }

        ]
      },

     







    ],

    linkActiveClass: "btn btn-sm btn-block btn-secondary nav-link",
    linkExactActiveClass: "btn btn-sm btn-block  btn-secondary nav-link-active",

});

Vue.component('income', income);
Vue.component('form-dajan', form);
Vue.component('lista', list);
Vue.component('counter', counter);
Vue.component('nav-dajan', nav);
Vue.component('create-user', createUser);
Vue.component('home-view', home);
Vue.component('datapage', dataPage);
Vue.component('radio-input', radioInput);
Vue.component('menu-nav', menuNav);










new Vue({
  store:store,
  router: router,
  el: '#app',
  render: h => h(App)
})
