import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import App from './App.vue'
import router from './router'

extend("min", {
  validate(val, args) {
  return val.length >= args.minlength;
  },
  params: ["minlength"],
  message: "{_field_} is too short. Enter {minlength} or more characters."
  });
  Vue.component("ValidationProvider", ValidationProvider);
  Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false

new Vue({
  router,               // Add this line
  render: h => h(App)
}).$mount('#app')
