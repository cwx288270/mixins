<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->

    <button @click="open">Open Toast</button>
    <NumberDisplay /> 
    <NumberSubmit />
  </div>
</template>

<script>
import NumberDisplay from './components/NumberDisplay'; 
import NumberSubmit from './components/NumberSubmit';
export default {
  name: 'App',
  methods:{
    open(){
      this.$toast('网络请求失败')
    }
  },
  components:{
    NumberDisplay,
    NumberSubmit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
