import appInstance from './main'

describe('App component', () => {
  
  it('should mount', () => {
    const app: any = appInstance.$mount()

    expect(app._isMounted).toBeTruthy()
  })
})
