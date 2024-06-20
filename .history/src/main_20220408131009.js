import Vue from 'vue'
import App from './App.vue'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from "web3";
const provider = new WalletConnectProvider({
    infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
})

await provider.enable()
const web3 = new Web3(provider);
console.log(web3)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
