/* eslint-disable */
<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon-area">
        <div class="icon" v-for="item of page" :key="item.id"><!--item of page而非iconlist  -->
          <div class="icon-img">
            <img :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc}}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  mounted () {
    console.log(this.pages[1])
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.icon-area {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  float: left;
  height: 0;
  width: 25%;
  padding-bottom: 25%;
}

.icon-img {
  position: absolute;
  top: 0;
  bottom: 0.5rem;
  left: 0;
  right: 0;
}

  img {
  display: block;
  margin: 0.15rem auto;
  height: 80%;
}

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  ellipsis();
}

</style>
