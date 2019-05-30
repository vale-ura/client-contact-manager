import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router';
import GlobalFilter from './shared/filters';

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

Vue.config.productionTip = false;

Vue.use(Ionic);
Vue.use(GlobalFilter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

