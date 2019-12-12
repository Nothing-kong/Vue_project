<template>
  <div id="app">
    <h1>尚硅谷</h1>
    <button class='btn btn1'>按钮1</button>
    <button class='btn btn2'>按钮2</button>
    <ul>
      <li v-for="(item, index) in 20" :key="index"
      @click='choose(index)' :class='{active:navIndex === index}'
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      navIndex:0
    }
  },
  methods: {
    choose(index){
      this.navIndex = index
    }
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import './common/stylus/mixins.styl'
$color = green
  btnStyle(w, h, bg)
    width w
    height h
    border none 
    background bg
#app
  h1
    color orange 
    background-color #aaaaaa
    font-size 30px
    display inline-block
    position absolute
    margin-left 50%
    transform translateX(-50%)
  .btn1
    btnStyle(100px, 100px, red)
  .btn2
    btnStyle(100px, 100px, blue)
    float right
  ul
    li
      line-height 50px
      // padding-left 50%
      text-align center
      bottom-border-1px($color)
      &.active
        color red
</style>
