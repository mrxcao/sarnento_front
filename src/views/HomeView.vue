<template>
    <div class="home">
      <HelloWorld msg="Teste de componente"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '../components/HelloWorld2.vue'
  export default {
    name: 'HomeView',
    components: {
      HelloWorld
    }
  }
  </script>
  