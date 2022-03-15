<template>
  <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper><!-- 一定要把注册好的组件写入template，否则不显示 -->
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/icons.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>
</style>
