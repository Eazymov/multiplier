import Vue, { CreateElement } from 'vue'
import App from 'components/App'

import 'normalize.css'
import './default.sass'

Vue.config.productionTip = false

new Vue({
  el: '#root',
  render: (h: CreateElement) => h(App),
})
