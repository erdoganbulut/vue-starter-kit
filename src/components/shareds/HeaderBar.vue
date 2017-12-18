<template lang="pug">
  header
    h1
      | Vue Starter Kit
</template>

<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  height: 50px;
  background: rgba(25, 75, 95, 1);
  padding: 0 10px;
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
