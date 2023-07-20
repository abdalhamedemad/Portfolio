<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="content"><TheHome /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import TheHome from '@/components/HomePage/TheHome.vue';
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TheHome,
  },
};
</script>
