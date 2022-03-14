<template>
  <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper><!-- 一定要把注册好的组件写入template，否则不显示 -->
    <h1>test</h1>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>
</style>
