<template>
  <div class="home">
    <h1>Bem-vindo ao Sarnento Bot</h1>
    <p>Mais que um bot, um amigo que interage no seu chat !</p>
    <button @click="inviteBot">Convidar o Bot</button>
  </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'HomeView',
    components: {
     
    },
    methods: {
      inviteBot() {
        console.log('invitado')        
        const inviteUrl = 'https://discord.com/oauth2/authorize?client_id=722913076344782858&scope=bot&permissions=549755289087';
        window.open(inviteUrl, '_blank');
      },
    },
  }
  </script>
  