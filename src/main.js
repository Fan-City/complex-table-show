// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui' // 完整引入 Element
import { Button, Message } from 'element-ui' // 按需引入 Element
import 'element-ui/lib/theme-chalk/index.css' //默认样式
import '../theme/index.css' //主题样式

import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false

// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 } //项目中所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000
Vue.use(ElementUI) // 完整引用 Element
Vue.use(Button,Message) // 按需引用 Element
//Vue.prototype.$message = Message // 绑定到 Vue 全局，可以使用这种方式调用：this.$message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
