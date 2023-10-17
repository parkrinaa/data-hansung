<template>
  <div id="app">
    <Header />
    <Backbutton />
    <router-view :key="$route.fullPath"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Backbutton from '@/components/Backbutton.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'EmptyLayout',
  mounted() {;
    $.initialize();
  },
  components: {
    Header,
    Footer,
    Backbutton
  },
  mounted(){
  }
}
</script>