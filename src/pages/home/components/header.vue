<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">内容</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
    name:'HomeHeader'
}
</script>

<style lang='stylus' scoped>
.header
display:flex
height 0.86rem
background: #00bcd5
color:#fff
.header-left
width 0.64rem
background: #fff
line-height: 0.86rem
color: #808080
.header-input
flex:1
height: .64rem
line-height: .64rem
margin-left: .2rem
margin-top .11rem
.header-right
width: 1.24rem
text-align: center    
</style>
