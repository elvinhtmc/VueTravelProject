<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper-wrapper">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="img-width"
        :src="item.imgURL"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'// Some Swiper option/callback...
        },
        loop: true
      },
      swiperList: [{
        id: 'swiper1',
        imgURL: 'https://imgs.qunarzz.com/vs_ceph_vcimg/280673be5655fc91ce24ba605c62fe07.jpeg'
      },
      {
        id: 'swiper2',
        imgURL: 'https://imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg'
      }]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
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
