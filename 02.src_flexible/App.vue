<template>
  <div id="app">
   <div id="example1"></div>
   <div id="example2"></div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import './common/stylus/mixins.styl'

#app
  #example1 
    width 375px
    height 50px
    background #aaaaaa
  #example2
    width 50px
    height 50px
    background hotpink
</style>
