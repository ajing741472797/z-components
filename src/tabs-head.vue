<template>
  <div class="tabs-header">
    <slot></slot>
    <slot name="actions"></slot>  
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead'
}
</script>

<style>
  .tabs-header{
    
  }
</style>