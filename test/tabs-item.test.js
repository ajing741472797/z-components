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

 describe('TabsItem', () => {
     //BDD  行为驱动测试  Mocha
     it('存在.', () => {
         expect(TabsItem).to.exist
     })
     it('接受 name 属性', () => {
       const Constructor = Vue.extend(TabsItem)
       const vm = new Constructor({
         propsData:{
           name:'xxx',
         }
       }).$mount()
      expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('接受 disabled 属性', () => {
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
        propsData:{
          disabled: true,
        }
      }).$mount()
      expect(vm.$el.classList.contains('disabled')).to.be.true

      const callback = sinon.fake()
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.not.been.called
    })
 
 })