<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import Web3 from "web3"
import WalletConnectProvider from '@walletconnect/web3-provider'

// const provider = new WalletConnectProvider({
//     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
// })

// await provider.enable()
// const web3 = new Web3(provider);
//console.log(WalletConnectProvider)
// Vue.config.productionTip = false
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
