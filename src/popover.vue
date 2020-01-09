<template>
  <div class="popover"
       @click="onClick"
       style="border:1px solid red"
       ref="popover">
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
    //定位popover
    positonContent () {
      document.body.appendChild(this.$refs.contentWrapper)
      let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY - 10 + 'px'

    },
    onClickDocument (e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.contentWrapper.contains(e.target))) {
        return      }
      this.close()
    },
    open () {
      this.visible = true
      setTimeout(() => {
        this.positonContent()
        document.addEventListener('click', this.onClickDocument)
      }, 100)
    },
    close () {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    },

  },
  mounted () {
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