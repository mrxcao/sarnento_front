<template >
<div class="templete">

<div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email: </label>
        <input type="text" placeholder="EMail" v-model="user.login" required>
      </div>
      <div class="form-group">
        <label for="password">Senha: </label>        
        <input type="password" placeholder="Senha" v-model="user.password" required>
      </div>
      
      <button type="submit">Login</button>
    </form>
  </div>

<!--
    <div class="home">
       Login
      <form @submit.prevent="login">
         <input type="text" placeholder="EMail" v-model="user.login">
         <input type="password" placeholder="Senha" v-model="user.password">
         <button type="submit">Login</button>
      </form>

    </div>
    -->

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
  

<style scoped>
.templete {
   background-color:#c2c2c2;
   width: 100%;
   height: 100%;
}
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  background-color: #fff;
}

.form-group {
  display: inline-flex;  
  align-items: center;
  margin-bottom: 10px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: left;
}

form div {
  margin-bottom: 10px;
}

label {
  display: block;
  min-width: 60px;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  width: 400px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>