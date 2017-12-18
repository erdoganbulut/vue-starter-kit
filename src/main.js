// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Vue Resource
import VueResource from 'vue-resource';

// Vuex + Store
import store from './store';

// Bootstrap -> bootstrap-reboot
import 'bootstrap/scss/bootstrap-reboot.scss';

import App from './App';
import router from './router';

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
