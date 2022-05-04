<template>
  <div>
    <div
      v-for="(item,index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <div class="item-title-icon"></div>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
         <!-- 递归组件，出口是item.children===false，每一次都要更新list -->
      </div>
    </div>
  </div>
</template>

<script>
import Detail from '../Detail.vue'
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-children
    padding: 0 .2rem
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block /* 内联元素，不占单行 */
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0rem -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item
    padding:0 .2rem
</style>
