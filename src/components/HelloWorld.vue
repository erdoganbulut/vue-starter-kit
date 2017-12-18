<template lang="pug">
  main.page
    | Hello World
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
</style>
