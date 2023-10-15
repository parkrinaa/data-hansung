<template>
  <section class="newproduct bgwhite">
    <template v-for="product in products">
      <Product :product="product" />
    </template>
  </section>
</template>
<script>
  import { mapState } from 'vuex';

  import Product from '@/components/Product.vue';

  export default {
    computed: {
      ...mapState('product', {
        products: state => state.featuredProducts
      })
    },
    methods: {

    },
    created() {
      this.$store.dispatch('product/setFeaturedProducts').then(() => {
        $(this.$refs.slick).slick2();
      });
    },
    components: {
      Product
    }
  }
</script>