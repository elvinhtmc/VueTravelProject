<template>
  <div class="header">
    城市选择
    <router-link to = "/"><!-- /是vue路由里的根路径 -->
     <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default{
  name: 'CityHeader'
}
</script>

<style lang = "stylus" scoped>
  @import "~styles/variables.styl"
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    background: $bgColor
    color:#fff
    font-size: .32rem
    .header-back
      position:absolute
      top:0
      left:0
      width:.64rem
      text-align: center
      font-size:.4rem
      font-weight:700
      color: #fff

</style>
