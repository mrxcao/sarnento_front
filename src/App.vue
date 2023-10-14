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

<router-view class="router-content" />

<div class="footer" >
    <span :title = "status.apiInfo" >Status:</span>
    <template v-if="auth.authOk">
      <span  class="bolinha-verde"></span>
    </template>
    <template v-else>
      <span  class="bolinha-vermelha"></span>
    </template>

</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuth } from './store/auth';
import { useStatus } from './store/status';

const auth = useAuth();
const status = useStatus();

onMounted(() => {
//  console.log('2-1- onMounted el.value', status.statusApi);
  status.checkStatus();
});

function logout() {
  auth.clear();
}

</script>

<style lang="scss" scoped>
</style>
