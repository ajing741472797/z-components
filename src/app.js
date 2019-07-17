import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'


Vue.component('z-button',Button)
Vue.component('z-icon',Icon)
Vue.component('z-button-group',ButtonGroup)



new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
    }
})

import chai from 'chai'

const expect = chai.expect

//单元测试(给一个输入，如果等于输出，对的)

//测按钮icon-settings是否正确
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
}

//测按钮是否为loading
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    
}

//测参数order 为1

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove() //测试完成删除生成的元素
    vm.$destroy()
}
//测参数order 为1
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}


//Mock
{
 
    const Constructor = Vue.extend(Button)
    const gButton = new Constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'
        }
    })
    gButton.$mount()
    gButton.$on('click',()=>{
        console.log(1);
        
    })
    let button = gButton.$el
    button.click()
    // gButton.$el.remove()
    // gButton.$destroy()

}