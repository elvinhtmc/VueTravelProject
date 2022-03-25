<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list">
        <div class="item-img-wrapper">
          <img
            :src="item.imgURL"
            class="item-img"
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      list: [{
        id: '0001',
        imgURL: 'https://imgs.qunarzz.com/sight/p0/2008/e5/e5c01dfca72bc4dda3.water.jpg_200x200_711e8d77.jpg',
        title: '南昌公园',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      },
      {
        id: '0002',
        imgURL: 'https://imgs.qunarzz.com/sight/p0/2104/c6/c6d76981ae21f58ea3.water.jpg_200x200_7eeed74c.jpg',
        title: '迪士尼乐园',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      },
      {
        id: '0003',
        imgURL: 'https://imgs.qunarzz.com/sight/p0/2005/4f/4fa68e517ab1a4aba3.water.jpg_200x200_2fec6545.jpg',
        title: '辰山植物园',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      },
      {
        id: '0004',
        imgURL: 'https://imgs.qunarzz.com/sight/p0/2005/e8/e81d7d6cc13e6ec1a3.water.jpg_200x200_fb98a9af.jpg',
        title: '上海动物园',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.recommend-title {
  height: .8rem;
  background: #eee;
  line-height: .8rem;
  text-indent: .2rem;
}
.item {
  display:flex;
  overflow: hidden;
  height: 1.9rem;
  }
    .item-img-wrapper {
      line-height: 1.9rem;
      }
      .item-img {
        height: 1.7rem;
        }
    .item-info {
      overflow: hidden;
      flex:1;
      padding:.1rem; 
      }
      .item-title {
        line-height: 0.54rem;
        font-size:0.32rem;
        ellipsis();
        }
      .item-desc {
        height: 0.4rem;
        color: #ccc;
        ellipsis();
        }
      .item-button {
        line-height: .44rem;
        margin-top: .15rem;
        margin-left: .1rem;
        padding:0 0.1rem;
        background-color: orange;
        font-weight:700;
        border-radius: .05rem;
        color: white;
        }
</style>
