<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'EmptyLayout',
  mounted() {;
    $.initialize();
  },
  components: {
    Header,
    Footer
  },
  mounted(){
  }
}
</script>