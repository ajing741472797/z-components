import Toast from './toast'



let currentToast

export default{
  //vue动态构建组件
  install(Vue, options){
    Vue.prototype.$toast = function(message, toastOptions){
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue, 
        message, 
        propsData: toastOptions,
        onClose: ()=>{
          currentToast = null
        }
      })
    }
  }
}



//helpers
function createToast ({Vue, message, propsData, onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close')
  document.body.appendChild(toast.$el)
  return toast
}