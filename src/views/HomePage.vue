<template>
  <div>
    <TheHeader />
    <TheHome />
    <TheAbout />
    <ThePortfolio />
    <ContactMe />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/HomePage/TheHeader.vue';
import TheHome from '@/components/HomePage/TheHome.vue';
import TheAbout from '@/components/HomePage/TheProfessional.vue';
import ThePortfolio from '@/components/HomePage/ThePortfolio.vue';
import ContactMe from '@/components/HomePage/ContactMe.vue';
import TheFooter from '@/components/HomePage/TheFooter.vue';
export default {
  name: 'HomePage',
  components: {
    TheHeader,
    TheHome,
    TheAbout,
    ThePortfolio,
    ContactMe,
    TheFooter,
  },
};
</script>
