<template>
  <div id="app">
    <header-bar />
    <router-view/>
  </div>
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
