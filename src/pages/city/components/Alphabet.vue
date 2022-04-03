<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    allCities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.allCities) {
        letters.push(i) // for in 的语法，循环出的内容就是key值
      }
      return letters // [A,B,C...]
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }, // 如果放在touchmove每次变动都会重算，在updated只在重新渲染时计算
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      setTimeout(() => {
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - 43 - 36 - this.startY
          const index = Math.floor(touchY / 14)
          console.log(this.startY)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      }, 16) 
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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