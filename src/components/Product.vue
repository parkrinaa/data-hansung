<template>
  <div class="inner course">
    <div class="area">
      <div class="visual">
        <div class="right">
          <h2>{{ product.title }}</h2>
          <p>{{ product.subtitle }}</p>
        </div>
        <ul class="subject_cont">
          <li>전공필수</li>
          <li class="grades">{{ product.price }}학점</li>
          <li>{{ product.grade }}학년</li>
        </ul>
      </div>
      <button class="btn" @click="addToCart(product)">장바구니 담기</button>
    </div>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  props: ['product'],
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addItem', product);
    }
  }
}
</script>