import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'



Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)
Vue.component('z-input', Input)
Vue.component('z-row', Row)
Vue.component('z-col', Col)
Vue.component('z-layout', Layout)
Vue.component('z-header', Header)
Vue.component('z-content', Content)
Vue.component('z-footer', Footer)
Vue.component('z-sider', Sider)
Vue.component('z-toast', Toast)
Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)
Vue.component('z-popover', Popover)


Vue.use(plugin)

new Vue({
    el:'#app',
    data:{
      selectedTab: 'car'
        // loading1:false,
        // loading2:true,
        // loading3:false,
        // message:'hi'
    },
    created(){
    },
    methods:{
      yyy(){
        console.log('yyy')
      },
        inputChange(e){
            console.log(e.target.value)
        },
        showToast1(){
          this.showToast('top')
        },
        showToast2(){
          this.showToast('middle')
        },
        showToast3(){
          this.showToast('bottom')
        },
        showToast(option){
          this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)},你的智商需要充值！`,{
            position: option,
            enableHtml: false,
            closeButton:{
              text:'已充值',
              callback () {
                console.log('lalala')
              }
            },
            autoClose: true,
            autoCloseDelay: 5
          })
        }
    }
})

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// const expect = chai.expect


// //单元测试(给一个输入，如果等于输出，对的)

// //测按钮含有icon
// {
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData:{
//             icon:'settings'
//         }
//     })
//     button.$mount()
//     let useElement = button.$el.querySelector('use')
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
// }

// //测按钮是否为loading
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings',
//             loading:true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    
// }

// //测参数order 为1

// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings',
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove() //测试完成删除生成的元素
//     vm.$destroy()
// }
// //测参数order 为1
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings',
//             iconPosition:'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }


// //Mock
// {
 
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings',
//         }
//     })
//     vm.$mount()
//     let spy = chai.spy(()=>{}) //使用chai.spy监听回调函数
//     vm.$on('click',spy)
//     //希望这个函数被执行
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
// }
