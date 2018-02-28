import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArticlesIndex from '@/components/ArticlesIndex'
import ArticlesCreate from '@/components/ArticlesCreate.vue';
import ArticlesEdit from '@/components/ArticlesEdit.vue';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'ArticlesIndex',
      component: ArticlesIndex
    },
    {
      path: '/ArticlesEdit',
      name: 'ArticlesEdit',
      component: ArticlesEdit
    },
    {
      path: '/ArticlesCreate',
      name: 'ArticlesCreate',
      component: ArticlesCreate
    }
  ]
})
