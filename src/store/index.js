import Vue from 'vue';
import Vuex from 'vuex';

import moduleI18n from './modules/i18n.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    i18n: moduleI18n,
  },
});
