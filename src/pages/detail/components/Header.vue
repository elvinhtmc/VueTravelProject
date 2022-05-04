<template>
  <div>
    <router-link to="/"
      tag="div" class="header-abs">
      <div class="header-abs-back iconfont">&#xe624;
      </div>
    </router-link>
    <div class="header-fixed" v-show="showHeader"
    :style="styleOpacity"> <!-- style要动态绑定，才会变化 -->
      <router-link to="/" tag="div"
        class="header-fixed-back iconfont">&#xe624;
        <!-- iconfont已经在main.js引进过 -->
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: false,
      styleOpacity: {
        opacity: 0
      }
    }
  },
  methods: {
    headerScroll () {
      const top = document.documentElement.scrollTop ||
      document.body.scrollTop || window.pageYOffset // 页面距顶端的距离,后两个选择避免不兼容
      if (top > 50) {
        let opacity = top / 200
        opacity = opacity > 1 ? 1 : opacity
        this.styleOpacity = { opacity } // es6 opacity: opacity
        this.showHeader = true
      } else {
        this.showHeader = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.headerScroll)
    // 只要监听到scroll事件，就执行headerScroll
  },
  deactivated () {
    window.addEventListener('scroll', this.headerScroll)
    // 在退出该页面时，取消全局事件监听，否则在其他页面也会执行headerScroll
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    height: 0.8rem
    width: .8rem
    text-align: center
    line-height: .8rem
    background: rgba(0, 0, 0, .8)
    border-radius:50%
    .header-abs-back
      font-size:0.4rem
      color: #fff
  .header-fixed
    z-index: 2 /*覆盖下面的内容，>0小于gallery */
    position: fixed
    top: 0
    right: 0
    left: 0
    height: $headerHeight
    line-height: $headerHeight;
    font-size: .32rem
    color: #fff
    text-align: center
    background-color: $bgColor
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: 0.4rem
      color:#fff
</style>
