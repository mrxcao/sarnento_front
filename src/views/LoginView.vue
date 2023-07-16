<template>
    <div class="home">
       Login

      <form @submit.prevent="login">
         <input type="text" placeholder="EMail" v-model="user.login">
         <input type="password" placeholder="Senha" v-model="user.password">
         <button type="submit">Login</button>

      </form>

    </div>
  </template>
  
<script setup>
   import http from '../services/http.js'
   import { reactive } from 'vue';
   import { useAuth } from '../store/auth.js'

   const auth = useAuth();

   const user = reactive({
      login: '',
      password: ''
   })

   async function login(){       
      try {
        const data = await http.post('/token/login',user)        
        auth.setToken(data.data.token)               
        auth.setUser(data.data.user)
        
        
      } catch (error) {
        console.log( 'error ---', error?.response?.data)
      }

      
   }
</script>
  