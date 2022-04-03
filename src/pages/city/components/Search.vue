<template>
  <div>
      <div class="search">
        <input type="text" name="search" v-model="keyword"
        class="search-input" placeholder="输入城市名或拼音"/>
      </div>
      <div class="search-content" ref="search" v-show="keyword">
          <ul>
            <li class = "search-item border-bottom"
            v-for="item of list"
            :key = "item.id" @click = "handleCityClick(item.name)">
            {{item.name}}
            </li>
          </ul>
          <ul>
            <li class = "search-item border-bottom"
                v-show = "hasNoData">
              无匹配项</li>
          </ul>
      </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    allCities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length // 判定是否有匹配数组,有则不显示，反之显示
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.search)
  },
  updated () {
    this.scroll = new BetterScroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return // 空字符串无值
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.allCities) {
          this.allCities[i].forEach((value) => {
            if (value.name.indexOf(this.keyword) > -1 ||
            value.spell.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        console.log(result)
      }, 100)
    }
  }
}
</script>

<style lang = "stylus" scoped>
@import "~styles/variables.styl"
  .search
    box-sizing: border-box
    height: 0.72rem
    padding:0 .1rem .1rem .1rem
    background: $bgColor
    .search-input
      width: 100%
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    overflow: hidden
    z-index: 1
    position: absolute
    top: $headerHeight + .72rem
    left: 0
    bottom: 0
    right: 0
    background-color: #eee
    .search-item {
      width:100%
      line-height: 0.7rem
      padding-left: .2rem
      color: #666
    }
    .border-bottom
      background-color: #fff
      &:before
        border-color: #ccc
</style>
