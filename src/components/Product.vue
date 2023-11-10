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
      <button class="btn type2" @click="addToCart(product)" :disabled="isDisabled" v-on:click="modal_3=!modal_3">장바구니 담기</button>
      <div>
          <div class="c-modal" v-show="modal_3">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            <span>장바구니에 추가 되었습니다.</span>
            <div class="btns">
              <button  v-on:click="modal_3=!modal_3" class="modal-exit-btn">닫기</button>
              <router-link :to="{name: 'features'}">확인하기</router-link>
            </div>
          </div>
        <div class="bg" v-show="modal_3" v-on:click="modal_3=!modal_3"></div>
      </div>
    </div>
  </div>
  
  
</template>


<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export default {
  created() {
      AOS.init();
  },
  props: ['product'],
  data() {
      return {
        isDisabled: false,
        modal_3: false,
        modalOpen: false,
      }
    },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addItem', product);
      this.isDisabled = true;
    }
  }
  
}

</script>