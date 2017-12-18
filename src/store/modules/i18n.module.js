import i18n from '../../i18n';

const getters = {
  locale: state => state.locale,
};

const actions = {
  setLang: ({ commit }, locale) => {
    commit('SET_LANG', locale);
  },
};

const mutations = {
  SET_LANG(state, locale) {
    state.locale = locale;
    i18n.locale = locale;
  },
};

const state = {
  locale: i18n.locale,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
