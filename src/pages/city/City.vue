<template>
  <div>
    <city-header></city-header>
    <city-search :allCities = "allCities"></city-search>
    <city-list :city = "city"
              :hotCities = "hotCities"
              :allCities = "allCities"
              :letter = "letter">
    </city-list>
    <city-alphabet :allCities=allCities
                  @change = "handleLetterChange">
    </city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CityAlphabet from './components/Alphabet.vue'
import CityList from './components/List'
import CitySearch from './components/Search.vue'
import axios from 'axios'
export default{
  name: 'City',
  components: {
    CityHeader,
    CityAlphabet,
    CityList,
    CitySearch
  },
  data () {
    return {
      city: '',
      hotCities: [],
      allCities: {},
      letter: ''// 传值给子组件list
    }
  },
  methods: {
    getCityInfo () {
      axios.get('./api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.city = res.data.city
        this.hotCities = res.data.hotCities
        this.allCities = res.data.cities
        // console.log(res)
      }
    },
    handleLetterChange (letter) { // 此处实际上接受一个参数，touch时letters，click时letter
      this.letter = letter // 因为touch或click事件触发时才会向外传参，这两个事件不会同时触发
      // 在更换事件时，参数letter不断变动，此处执行该函数后，子组件list的watch监听到letter的改变后，页面变化
    }

  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang = "stylus" scoped>

</style>
