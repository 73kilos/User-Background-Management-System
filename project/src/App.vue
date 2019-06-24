<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
  
<style lang="scss" scoped>
html, body {
  margin: 0;
  padding: 0;
}
</style>

<script>
import Tabbar from './components/Tabbar'
export default {
  component: { Tabbar }
}
</script>