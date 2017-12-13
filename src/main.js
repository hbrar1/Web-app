import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateUser from './components/CreateUser.vue';
import DisplayUser from './components/DisplayUser.vue';
import EditUser from './components/EditUser.vue';

const routes = [
  {
        name: 'CreateUser',
        path: '/',
        component: CreateUser
  },
  {
        name: 'DisplayUser',
        path: '/admin',
        component: DisplayUser
  },
  {
        name: 'EditUser',
        path: '/edit/:id',
        component: EditUser
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });
//new Vue(Vue.util.extend({ router }, App)).$mount('#app');

//instatinat the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the vue instance
  router  
}).$mount('#app')//mount the router on the app
