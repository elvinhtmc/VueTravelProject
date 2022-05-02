<template>
<div>
  <div class="banner">
    <img :src="bannerImg" class="banner-img"/>
    <div class="banner-info">
      <div class="banner-title">
        {{sightName}}
      </div>
      <div class="banner-number" @click="handleBannerClick">
        <span class="iconfont banner-icon">&#xeac4;</span>
        {{this.galleryImgs.length}}
      </div>
    </div>
  </div>
  <common-gallery
  :swiperList = "galleryImgs"
  v-show="showGallery"
  @close="handleGalleryClose"><!-- 控制gallery是否可见,子组件事件触发父组件事件 -->
  </common-gallery>
</div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false
    }
  },
  props: {
    sightName: String,
    galleryImgs: Array,
    bannerImg: String
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      display: flex
      bottom: 0
      left: 0
      right: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex: 1
        padding-left: .2rem
        font-size: .32rem
      .banner-number
        line-height: .6rem
        padding: 0 0.2rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .6)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
