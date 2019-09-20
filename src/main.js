// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myPlugins from "./plugins/my-plugins";

import toast from "./plugins/toast";
Vue.config.productionTip = false
Vue.use(myPlugins);
Vue.use(toast,{
  times:250
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
