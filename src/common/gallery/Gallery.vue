<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) of swiperList"
          :key="index">
          <img :src="item" class="gallery-img">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination', // 分页器类名
          type: 'fraction',
          clickable: true // 可手动点击分页器播放
        },
        observeParents: true, // 监听到父级元素dom变化，swiper自我刷新
        observer: true // 解决轮播图显示后卡的问题
      }
    }
  },
  props: {
    swiperList: Array,
    showGallery: Boolean
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position:fixed
    z-index: 99
    top: 0
    bottom: 0
    right: 0
    left: 0
    color: #eee
    background-color: black
  .wrapper
    width:100%
    height: 0
    padding-bottom: 100%
    .gallery-img
      width: 100%
    .swiper-pagination
      text-align: center
      margin-bottom:2.2rem
</style>
