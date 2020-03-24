<template>
  <div class="popover"
       ref="popover">
    <div ref="contentWrapper"
         class="content-wrapper"
         v-if="visible"
         :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper"
          style="display:inline-block">
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
      visible: false,

    }
  },
    props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  mounted () {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed () {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  computed: {
    openEvent () {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent () {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }

    }
  },

  methods: {
    //定位popover
    //定位popover
    positonContent () {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      let { height: height2 } = contentWrapper.getBoundingClientRect()

      let positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY +
            (height - height2) / 2
        },
        right: {
          left: left + width + window.scrollX,
          top: top + window.scrollY +
            (height - height2) / 2
        },
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
    },
    onClickDocument (e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return      }
      if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
        return
      }
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

  },
}
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;

.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    position: absolute;
    width: 0px;
    height: 0px;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;

    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>