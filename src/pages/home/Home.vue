/* eslint-disable */
<template>
  <div>
    <home-header></home-header>
    <HomeSwiper :swiperList = "swiperList"></HomeSwiper><!-- 一定要把注册好的组件写入template，否则不显示 -->
    <home-icons :iconList = "iconList"></home-icons>
    <home-recommend :recommendList = "recommendList"></home-recommend>
    <home-weekend :weekendList = "weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState({
      city: 'city'
    })
  },
  methods: {
    getHomeInfo () {
      axios.get('./api/index.json?city=' + this.city) //'json?city='获取city=''的json数据
        .then(this.getHomeInfoSucc) // 成功执行
    },
    getHomeInfoSucc (res) {
      res = res.data // 参数=res.data，返回的data对象下又包含data对象，可以在之后少写一层
      if (res.ret && res.data) { // ret:true正确返回
        this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
    console.log(this.lastCity)
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }

}
</script>

<style>
</style>
