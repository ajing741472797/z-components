<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
 
<script>
export default {
  name:'GuluRow',
  props:{
    gutter:{
      type: [Number, String]
    }
  },
  computed :{
    rowStyle(){
      let {gutter} = this
      return {marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}
    }
  },
  created(){
  },
  mounted(){
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  }

}
</script>

<style>

</style>
<style lang="scss" scoped>
  .row{
    display: flex;
  }
</style>