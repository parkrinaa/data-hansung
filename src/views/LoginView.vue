<template>
  <div class="login">
    <swiper
        class="swiper"
        :options="swiperOption"
        >
        <swiper-slide>
          <div class="col2">
            <div class="col top one">
              <div class="img"></div>
            </div>
            <div class="col">
              <h2>희망진로와 맞춤강의 추천!</h2>
              <span>나의 진로에 도움이 되는 강의 한가득!<br />학점 관리앱으로 확인하세요.</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="col2">
            <div class="col top two">
              <div class="img"></div>
            </div>
            <div class="col">
              <h2>교수진 소개와 담당과목 소개!</h2>
              <span>강의별 교수진 정보도 함께<br />학점 관리앱으로 확인하세요.</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="col2">
            <div class="col top three">
              <div class="img"></div>
            </div>
            <div class="col">
              <h2>강의 수강자의 과제물 보기!</h2>
              <span>강의별 지난 수강자의 과제물과<br />강의 후기까지 확인해보세요.</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="bottom">
        <div class="swiper-pagination pagination_bullet"></div>
        <button type="button" class="btn animate__animated animate__pulse animate__infinite	infinite" @click="$router.push({ name: 'main' })">시작하기</button>
      </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      ref: null,
      search: '',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween : 0,
        centeredSlides: true,
        autoplay : {
          delay : 3000,
          disableOnInteraction : false,
        },
        pagination: {   //페이징 사용자 설정
          el: ".pagination_bullet",   //페이징 태그 클래스 설정 
          clickable: true,    //버튼 클릭 여부
          type : 'bullets',   //페이징 타입 설정(종류: bullets, fraction, progressbar)   
          // Bullet Numbering 설정
          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '">' + (index + 1) + "</span>";
          // },
        },
        loop: true,
      },
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addItem', product);
    }
  }
}

</script>
