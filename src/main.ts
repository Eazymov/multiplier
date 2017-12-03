import Vue, { CreateElement } from 'vue'
import App from 'components/App'

import 'normalize.css'
import './default.scss'

Vue.config.productionTip = false

const app: Vue = new Vue({
  el: '#root',
  render: (h: CreateElement) => h(App),
})

export default app
