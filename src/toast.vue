<template>
    <div class="toast">

    </div>
</template>

<script>
import Vue from 'vue'
if(Vue.prototype.$toast === undefined){
  Vue.prototype.$toast = function(){
    console.log('我是 toast')
}
}

export default {
  name:'GuluToast'
}
</script>

<style lang="scss" scoped>
  .toast{

  }

</style>
