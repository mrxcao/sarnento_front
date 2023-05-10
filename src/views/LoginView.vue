<template>
    <div class="home">
       Login

      <form @submit.prevent="login">
         <input type="text" placeholder="EMail" v-model="user.email">
         <input type="password" placeholder="Senha" v-model="user.password">
         <button type="submit">Login</button>

      </form>

    </div>
  </template>
  
<script setup>
   import http from '../services/http.js'
   import { reactive } from 'vue';

   const user = reactive({
      email: '',
      password: ''
   })
   async function login(){ 
      try {
         const data = await http.post('/auth',user)
         console.log('data',data);
      } catch (error) {
         console.log(  error?.response?.data)
      }

      console.log('login',1);
   }
</script>
  