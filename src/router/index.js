import Vue from 'vue'
import Router from 'vue-router'
import NewDeclareAtCustom from '@/components/NewDeclareAtCustom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewDeclareAtCustom',
      component: NewDeclareAtCustom
    }
  ]
})
