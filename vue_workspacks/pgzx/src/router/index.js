import Vue from 'vue'
import Router from 'vue-router'
import Head from "../pages/home/Home";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Head',
      component: Head
    }
  ]
})
