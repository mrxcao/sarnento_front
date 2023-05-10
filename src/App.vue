<template>

  <router-link :to="{name:'home'}" >Home</router-link>
  <router-link :to="{name:'login'}">Login</router-link>
  <router-link :to="{name:'dashboard'}">Dashboard</router-link>
  <router-view/>

</template>


<!--
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <img class="logo" src="../public/vite.svg">
  </div>
  <HelloWorld msg="Aqui terá uma página do bot" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
-->