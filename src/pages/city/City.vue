<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city=city :hotCities=hotCities :allCities=allCities></city-list>
    <city-alphabet :allCities=allCities></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CityAlphabet from './components/Alphabet.vue'
import CityList from './components/List.vue'
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
      allCities: {}
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
        console.log(res)
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang = "stylus" scoped>

</style>
