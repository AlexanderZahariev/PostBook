import Vue from 'vue'
import App from './App.vue'
import Router from './router';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2';
import { store } from './store/store';

Vue.use(VueSweetalert2);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueResource);


new Vue({
  render: h => h(App),
  router: Router,
  store,
}).$mount('#app');
