<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.header {
  display: flex;
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgcolor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    text-align: center;
  }

  .back-icon {
    font-size: 0.4rem;
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin: 0.11rem 0 0.11rem 0;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding-left: 0.1rem;
    text-align: center;
  }

  .arrow-icon {
    font-size: 0.1rem;
  }
}
</style>
