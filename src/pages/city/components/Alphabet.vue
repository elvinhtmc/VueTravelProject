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
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const touchY = e.touches[0].clientY - 43 - 36 - 35 * 4
        const index = Math.floor(touchY / 14)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
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