<template>
  <div class="popover"
       @click.stop="xxx"
       style="border:1px solid red">
    <div ref="contentWrapper"
         class="content-wrapper"
         v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'GuluPopover',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    xxx () {
      this.visible = !this.visible
      if (this.visible === true) {
        setTimeout(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
          console.log(width, height, top, left)
          this.$refs.contentWrapper.style.left = left+ window.scrollX +'px'
          this.$refs.contentWrapper.style.top =  top+ window.scrollY +'px'

          let eventHandler = () => {
            this.visible = false
            console.log('document 隐藏 popover')

            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        }, 100)
      } else {
        console.log('vm 隐藏 popover')
      }
    },

  },
  mounted () {
    console.log('hi')
    console.log(this.$refs.triggerWrapper)
  }
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

}
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>