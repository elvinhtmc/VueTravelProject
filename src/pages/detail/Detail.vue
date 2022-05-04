<template>
  <div>
    <detail-banner :galleryImgs = "galleryImgs"
    :sightName="sightName" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div><!-- 设置高度，添加滚动条 -->
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('./api/detail.json')
        .then(this.getDetailInfoSuccess)
    },
    getDetailInfoSuccess (res) {
      res = res.data // 获取response的数据
      if (res.ret === true && res.data) {
        this.sightName = res.data.sightName
        this.bannerImg = res.data.bannerImg
        this.galleryImgs = res.data.galleryImgs
        this.list = res.data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 15rem
</style>
