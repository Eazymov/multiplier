import Vue, { CreateElement } from 'vue'
import App from 'components/App'

import 'normalize.css'
import './default.sass'

Vue.config.productionTip = false

const app: Vue = new Vue({
  render: (h: CreateElement) => h(App),
})

app.$mount('#root')
