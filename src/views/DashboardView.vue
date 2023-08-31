<template>
    <div class="home">
       dashboard
    </div>

    <div>-- EL {{ el }}</div>
    <button id="count" @click="count++">{{ count }}</button>
  </template>

<script setup>
import {
  onBeforeMount,
  onMounted, onUnmounted, ref, onBeforeUpdate, onUpdated, onBeforeUnmount,
} from 'vue';

const el = ref();
const count = ref(0);

// lifeCycle

onBeforeMount(() => {
  console.log('onBeforeMount');
});
onMounted(() => {
  el.value; // <div>
  console.log('el.value', el.value);
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});
onUnmounted(() => {
  console.log('onUnmounted');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});
onUpdated(() => {
  console.log(document.getElementById('count').textContent);
});

</script>
