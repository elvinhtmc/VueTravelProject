<template>
  <div>
    <transition>
      <slot></slot><!-- 插槽，代替组件所包裹的元素 -->
    </transition>
  </div>
</template>

<script>
export default{
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to {
    opacity:0
  } //开始和结尾
  .v-enter-active, .v-leave-active {
    transition: opacity 1s
  } // active中间态 变化的属性和时间
</style>
