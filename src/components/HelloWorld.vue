<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "tr": {
    "hello": "merhaba dünya!"
  }
}
</i18n>

<template lang="pug">
  main.page
    h1 {{ $t('hello') }}
    h4 Using lodash: {{ isLodash }}
    p.social--icons
      a(href="https://github.com/erdoganbulut/vue-starter-kit" target="_blank")
        font-awesome-icon(:icon="['fab', 'github']")
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isLodash: false,
    };
  },
  mounted() {
    this.isLodash = window._.isEmpty();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../scss/shareds';

main {
  text-align: center;
  h1 {
    font-weight: 300;
  }
  .social--icons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    a {
      display: block;
      font-size: 24px;
      color: inherit;
      text-decoration: none;
      opacity: 0.8;
      transition: 0.25s;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
