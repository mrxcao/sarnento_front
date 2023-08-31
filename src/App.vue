<template>

<div class="list-container">
  <ul class="horizontal-list">
    <li><router-link :to="{name:'home'}" >Home</router-link></li>
    <li><router-link :to="{name:'comofunciona'}">Como funciona?</router-link></li>
    <li><router-link :to="{name:'comandos'}">Comandos</router-link></li>
    <li><router-link :to="{name:'sourcecode'}">Github </router-link></li>
    <li><router-link :to="{name:'dashboard'}">Dashboard</router-link> </li>
<!--    <li><router-link :to="{name:'login'}" class="button-link">login </router-link></li>
-->
  </ul>

  <div class="right-div">
      <template v-if="auth.authOk">
            <img class="avatar"  :src="auth.avatar">
            Olá {{ auth.fullName }}
            <button @click="logout" class="button-link">
              Logout
            </button>
      </template>
          <template v-else>
            Olá visitante

            <router-link :to="{name:'login'}" class="button-link">login </router-link>
            <!--
            <button @click="login">
              Login
            </button>
          -->
      </template>

  </div>
</div>

  <router-view/>

</template>

<script setup>

// import { useRouter } from 'vue-router';
import { useAuth } from './store/auth';

const auth = useAuth();
// const router = useRouter();

function logout() {
  auth.clear();
}

</script>

<style scoped>
.avatar {
  width: 40px;
}
.container {
  display: flex;
  justify-content: space-between;
}
.right-div {
  align-self: flex-end;
  vertical-align: middle ;
}
.button-link {
  display: inline-block;
  padding: 1px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}
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
