<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
    >
        {{item}}
    </li>
  </ul>
</template>

<script>
import Vue from 'vue/types/umd'
export default{
  name: 'CityAlphabet',
  props: {
    allCities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.allCities) {
        letters.push(i)
      }
      return letters
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
        const startY = e.touches.offsetTop
        console.log(startY)
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