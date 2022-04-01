<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">C</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
      </div>
       <div class="area">
        <div class="title border-topbottom">D</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default{
  name: 'CityList',
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true
    }
    )
  }
}
</script>
<style lang = "stylus" scoped>
@import '~styles/variables.styl'
.list
  position:absolute
  left:0
  right:0
  top:$headerHeight+.72rem
  bottom:0
  overflow: hidden
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.title
  line-height: .44rem
  padding-left: .2rem
  background-color: #eee
  color: #666
  font-size:.26rem
.button-list
  overflow:hidden
  padding: .1rem .6rem .1rem .1rem
.button-wrapper
  float:left
  width:33.3%
.button
  box-sizing: border-box
  margin: .1rem
  padding: .1rem
  border:solid 1px
  border-color: #ccc
  border-radius: .06rem
  text-align: center
.item
  width:100%
  line-height: 0.7rem
  padding-left: .2rem
  color: #666
</style>