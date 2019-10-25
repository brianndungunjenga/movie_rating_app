import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  // vuetify: new Vuetify(),
  vuetify,
  render: h => h(App),
}).$mount('#app');
