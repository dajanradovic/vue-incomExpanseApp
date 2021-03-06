import Vue from 'vue'
import App from './App.vue'
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
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
import details from './components/details';
import detailsFamilyUser from './components/detailsFamilyUser';
import familyResumee from './components/familyResumee';










Vue.use(Chartkick.use(Chart));
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',

    routes:[
      {

        path: '/',
        name: 'home',
        component: home
      },

      {

        path: '/familyResumee',
        component: familyResumee
      },

      


      {

        path: '/data',
        component: dataPage,
        children:[{

          path: 'expanse',
          component: form,
          beforeEnter: ((to, from, next) =>{

            if (store.getters.getActiveUser == ''){
              alert('you have to pick a user first');
               next(false);
            }

            else{

              next();
            }
          })
                  },
                  {

                    path: 'income',
                    component: income,
                    beforeEnter: ((to, from, next) =>{

                      if (store.getters.getActiveUser == ''){
                        alert('you have to pick a user first');
                         next(false);
                      }
          
                      else{
          
                        next();
                      }
                    })
           //     },
                  },

                  {
                    path: 'activeUser',
                    component: details


                  },

                  {
                    path: 'activeFamily',
                    component: detailsFamilyUser


                  }

                  


        ]
      },

     

     







    ],
    beforeEach(to, from, next) {
      /*
      something...
      */
    
      next() // DO IT!
    },

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
Vue.component('details', details);
Vue.component('details-family', detailsFamilyUser);
Vue.component('family-resumee', familyResumee);













new Vue({
  store:store,
  router: router,
  el: '#app',
  render: h => h(App)
})
