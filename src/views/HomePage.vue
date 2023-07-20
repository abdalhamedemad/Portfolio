<template>
  <div>
    <TheHeader />
    <TheHome />
    <TheAbout />
    <ThePortfolio />
  </div>
</template>

<script>
import TheHeader from '@/components/HomePage/TheHeader.vue';
import TheHome from '@/components/HomePage/TheHome.vue';
import TheAbout from '@/components/HomePage/TheProfessional.vue';
import ThePortfolio from '@/components/HomePage/ThePortfolio.vue';
export default {
  name: 'HomePage',
  components: {
    TheHeader,
    TheHome,
    TheAbout,
    ThePortfolio,
  },
};
</script>
