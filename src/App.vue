<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

  export default {
    mounted() {;
      $.initialize();
    },
    components: {
    }
  }
</script>