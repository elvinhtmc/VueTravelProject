/* eslint-disable */
<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id">
        <div class="item-img-wrapper">
          <img
            :src="item.imgUrl"
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
  props: {
    recommendList: Array
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
