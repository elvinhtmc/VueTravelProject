<template>
  <ul class="list">
    <li class="item"
        v-for="(item,key) of allCities"
        :key="key">
        {{key}}
    </li>
  </ul>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    allCities: Object
  }
}
</script>

<style lang = "stylus" scoped>
@import "~styles/variables.styl"
  .list
    display: flex
    flex-direction: column
    justify-content:center
    position:absolute
    top:$headerHeight*2
    right:0
    bottom:0
    width: .4rem
    text-align: center
    color:$bgColor
  .item
    line-height: 100%
    
</style>
