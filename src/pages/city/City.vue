<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CityAlphabet from './components/Alphabet.vue'
import CityList from './components/List.vue'
import CitySearch from './components/Search.vue'
export default{
  name: 'City',
  components: {
    CityHeader,
    CityAlphabet,
    CityList,
    CitySearch
  }
}
</script>

<style lang = "stylus" scoped>

</style>
