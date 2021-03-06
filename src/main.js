import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'

import { NavBar, Form, Field, Button } from 'vant'

Vue.use(Button)
Vue.use(Form)
Vue.use(Field)
Vue.use(NavBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
