<template>
  <div>
    <div class="search">
      <input type="text" name="search" v-model="keyword"
      class="search-input" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-content"></div>
    <ul>
      <li class="search-item"></li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'CitySearch'
}
</script>
<style lang = "stylus" scoped>
@import "~styles/variables.styl"
  .search
    box-sizing: border-box
    height 0.72rem
    padding:0 .1rem .1rem .1rem
    background: $bgColor
    .search-input
      width: 100%
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>
