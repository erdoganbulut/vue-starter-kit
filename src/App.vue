<template lang="pug">
  .app
    header-bar
    router-view
</template>

<script>
import HeaderBar from './components/shareds/HeaderBar';

export default {
  name: 'app',
  components: {
    HeaderBar,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
