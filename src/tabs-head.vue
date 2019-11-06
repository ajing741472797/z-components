<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="actions-wrapper">
    <slot name="actions" ></slot>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  created () {
    console.log(this.eventBus)
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
  .tabs-header{
    border: 1px solid red;
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>