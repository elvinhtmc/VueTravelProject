<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li v-for="item of list">
        <div class="item-img-wrapper">
          <img
            :src="item.imgURL"
            class="item-img"
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      list: [{
        id: '0001',
        imgURL: 'https://imgs.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海东方明珠',
        desc: '中西合璧，现代和传统各有各的精彩'
      },
      {
        id: '0002',
        imgURL: 'https://imgs.qunarzz.com/sight/source/1603/cf/762cb38938a093.jpg_r_640x214_e02c18ef.jpg',
        title: '上海看花',
        desc: '这个好天气，一起去看花吧'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.weekend-title {
  margin-top:.2rem;
  background: #eee;
  line-height: .8rem;
  text-indent: .2rem;
}
    .item-img-wrapper {
       overflow: hidden;
       height: 0;
       width: 100%;
       padding-bottom: 34%;
      }
      .item-img {
        width: 100%;
      }
    .item-info {
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
</style>
