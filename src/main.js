import Vue from 'vue'
import App from './App.vue'
import GlobalFilter from './shared/filters';
import * as _ from 'lodash';
import * as voca from 'voca';
import router from './router';

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

Vue.config.productionTip = false;

Vue.use(Ionic);
Vue.use(_);
Vue.use(voca);
Vue.use(GlobalFilter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

