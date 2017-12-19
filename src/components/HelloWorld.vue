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
    | {{ $t('hello') }}
    p
      a
        font-awesome-icon(:icon="['fab', 'github']")
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../scss/shareds';
</style>
