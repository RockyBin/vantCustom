// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from "./i18n/index";
import VueI18n from "vue-i18n";
import LangENUS from './i18n/en'
import LangZHCN from './i18n/zh'
import '@/plugins/vant'

Vue.use(VueI18n, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})