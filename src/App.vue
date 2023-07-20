<template>


<div class="list-container">
  <ul class="horizontal-list">
  <li><router-link :to="{name:'home'}" >Home</router-link></li>
  <li><router-link :to="{name:'login'}">Login</router-link></li>
  <li><router-link :to="{name:'dashboard'}">Dashboard</router-link> </li>

  <li>
    
  <template v-if="auth.authOk">
        <img :src="auth.avatar">
         Olá {{ auth.fullName }} 
        <button @click="logout">
          Logout
        </button>
      </template>
      <template v-else>
        Olá visitante
      </template>
   </li>


</ul>
</div>
  
  <router-view/>

</template>


<script setup>

import {useAuth} from '/src/store/auth.js';
import {useRouter} from 'vue-router'
const auth = useAuth();
const router = useRouter()

function logout(){
  auth.clear();  
}
</script>


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
