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
  console.log('1 onBeforeMount');
});
onMounted(() => {
  // el.value; // <div>
  console.log('2 onMounted el.value', el.value);
});

onBeforeUnmount(() => {
  console.log('3 onBeforeUnmount');
});
onUnmounted(() => {
  console.log('4 onUnmounted');
});

onBeforeUpdate(() => {
  console.log('5 onBeforeUpdate');
});
onUpdated(() => {
  console.log('6 onUpdated', document.getElementById('count').textContent);
});

</script>
