<template>
  <div class="list" ref="wrapper"> <!-- btScroll dom ref -->
    <div>
      <!-- wrapper1 -->
      <!-- area1 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.$store.state.city}}
            </div>
          </div>
        </div>
      </div>
      <!-- area2 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
              v-for="item of hotCities"
              :key="item.id">
            <div class="button"  @click = "handleCityClick(item.name)">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <!-- area3 -->
      <div class="area"
          v-for="(item,key) of allCities"
          :key="key" :ref="key"> <!-- object->key，array->index-->
         <div class="title border-topbottom">{{key}}</div>
         <div class="item-list"> <!-- innerItem of item -->
           <div class="item border-bottom"
                v-for="innerItem of item"
                :key="innerItem.id"
                @click = "handleCityClick(innerItem.name)">
                {{innerItem.name}}
           </div>
         </div>
      </div>
      <!-- wrapper1 -->
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default{
  name: 'CityList',
  props: {
    city: String,
    hotCities: Array,
    allCities: Object,
    letter: String
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true
      // BetterScroll 2.0,new BetterScroll(instead of the old BScroll)
    }
    )
  },
  updated () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true
      // BetterScroll 2.0,new BetterScroll(instead of the old BScroll)
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
