import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
=======
import store from './store'
<<<<<<< HEAD
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
=======
>>>>>>> 8d32a143334501f521d509eb93d5c909fac7ea44
>>>>>>> 34b0da27b872e369d9152d7293df30a107ddd90d

Vue.config.productionTip = false

new Vue({
  router,
<<<<<<< HEAD
=======
  store,
>>>>>>> 34b0da27b872e369d9152d7293df30a107ddd90d
  render: h => h(App)
}).$mount('#app')
