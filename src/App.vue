<template>
  <div id="app">
    <router-view/>
    <footer-guide v-if="$route.meta.showFooterGuide"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default{
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    position relative
</style>>
