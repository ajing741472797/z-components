const expect = chai.expect;
 import Vue from 'vue'
 import Tabs from '../src/tabs'
 import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Tabs', () => {
     //BDD  行为驱动测试  Mocha
     it('存在.', () => {
         expect(Tabs).to.exist
     })
     it('接受 selected 属性', (done) => {
       const div = document.createElement('div')
       document.body.appendChild(div)
      div.innerHTML = `
      <z-tabs selected="car">
      <z-tabs-head>
        <z-tabs-item name="woman"> 美女 </z-tabs-item>
        <z-tabs-item name="man"> 帅哥 </z-tabs-item>
        <z-tabs-item name="car"> 跑车 </z-tabs-item>
      </z-tabs-head>
      <z-tabs-body>
        <z-tabs-pane name="woman"> 美女相关资讯 </z-tabs-pane>
        <z-tabs-pane name="man"> 帅哥相关资讯 </z-tabs-pane>
        <z-tabs-pane name="car"> 跑车相关资讯 </z-tabs-pane>
      </z-tabs-body>
    </z-tabs>
      `
      let vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        let x = vm.$el.querySelector(`.tabs-item[data-name="car"]`)
        expect(x.classList.contains('active')).to.be.true
        done()
      })
    })
    it('可以接受 direction prop', () => {

    }) 
 })