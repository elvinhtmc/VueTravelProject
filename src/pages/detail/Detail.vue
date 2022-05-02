<template>
  <div>
    <detail-banner :galleryImgs = "galleryImgs"
    :sightName="sightName" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <detail-list></detail-list>
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
      catagoryList: []
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
        this.catagoryList = res.data.catagoryList
      }
        
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
