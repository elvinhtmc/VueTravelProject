/* eslint-disable */
<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper-wrapper"
  v-if="showSwiper"><!-- 模板里最好不用list.length之类的计算，放在computed计算属性 -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="img-width"
        :src="item.imgUrl"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'// Some Swiper option/callback...
        },
        loop: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    showSwiper () {
      return this.swiperList.length
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="stylus" scoped>//无法改.swiper-pagination-bullet-active，因为scoped，改本样式
.swiper-wrapper>>>.swiper-pagination-bullet-active {//穿透，在wrapper中的swiper都按照这里的走
  background: #fff;
}
.swiper-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 30%;
    background:#eee;

}
 .img-width {
     width:100%;
 }
</style>
