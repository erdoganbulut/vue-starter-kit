// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Vue Resource
import VueResource from 'vue-resource';

// Bootstrap -> bootstrap-reboot
import 'bootstrap/scss/bootstrap-reboot.scss';

// FontAwesome 5
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';

// Vuex + Store
import store from './store';

import App from './App';
import router from './router';

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);

fontawesome.library.add(solid, regular, brands);

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
