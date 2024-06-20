import Vue from 'vue'
import App from './App.vue'
//import Web3 from "web3"
//import WalletConnectProvider from '@walletconnect/web3-provider'

// const provider = new WalletConnectProvider({
//     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
// })

// await provider.enable()
// const web3 = new Web3(provider);
console.log(WalletConnectProvider)
// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
