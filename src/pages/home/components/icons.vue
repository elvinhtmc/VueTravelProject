<template>
  <swiper>
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon-area">
        <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgURL" />
          </div>
          <p class="icon-desc">{{ item.description }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconList:[{
        id: 'icon1',
        imgURL: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        description: '热门景点'
      },{
        id: 'icon2',
        imgURL: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        description: '热门景点'
      },{
        id: 'icon3',
        imgURL: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        description: '热门景点'
      },{
        id: 'icon4',
        imgURL: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        description: '热门景点'
      },{
        id: 'icon5',
        imgURL: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        description: '热门景点'
      },{
        id: 'icon6',
        imgURL: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        description: '热门景点'
      },{
        id: 'icon7',
        imgURL: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        description: '热门景点'
      },{
        id: 'icon8',
        imgURL: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        description: '热门景点'
      },{
        id: 'icon9',
        imgURL: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        description: '热门景点'
      }]
    }
  },
  computed: {
    pages () {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index/8);
        if(!pages[page]) 
          pages[page] = [];
        pages[page].push(item);
      })
      return pages;
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
