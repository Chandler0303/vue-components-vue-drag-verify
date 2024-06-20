import Vue from 'vue'
import App from './App.vue'
import test from './common/loader'
console.log(test)
new Vue({
  render: h => h(App),
}).$mount('#app')
