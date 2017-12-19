<template lang="pug">
  header
    h1
      | Vue Starter Kit
    select(v-model="modelLocale" v-on:change="setLang(modelLocale)")
      option(value="tr") tr
      option(value="en") en
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HeaderBar',
  data() {
    return {
      modelLocale: '',
    };
  },
  computed: {
    ...mapGetters('i18n', [
      'locale',
    ]),
  },
  methods: {
    ...mapActions('i18n', [
      'setLang',
    ]),
  },
  mounted() {
    this.modelLocale = this.locale;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../scss/shareds';
header {
  height: 50px;
  background: rgba(25, 75, 95, 1);
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-weight: 100;
    font-size: 1.5rem;
    line-height: 50px;
  }
}
</style>
