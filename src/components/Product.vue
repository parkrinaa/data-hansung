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
      <button class="btn" @click="addToCart(product)" :disabled="isDisabled" v-on:click="modal_3=!modal_3">장바구니 담기</button>
      <div>
          <div class="c-modal" v-show="modal_3">
            <span>징바구니에 추가 되었습니다.</span>
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