import Vue from 'vue'
import componentOptions from './index.vue'

describe('App component', () => {
  
  it('should mount', () => {
    const component: any = new Vue(componentOptions).$mount()

    expect(component._isMounted).toBeTruthy()
  })
})
