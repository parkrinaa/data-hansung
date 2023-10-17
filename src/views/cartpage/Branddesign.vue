<template>
  <div class="inner course branddesign">
    <FeaturedProductList />
    <div class="area pr0">
      <div class="a_top">
        <h2 class="tit">강의 수강자의<br/><b class="txt_point_line">브랜드디자인 결과물</b> 보기</h2>
        <button class="btn btn_arrow mr15">더보기</button>
      </div>
      <swiper
        class="swiper"
        :options="swiperOption"
        >
        <swiper-slide>
          <router-link :to="{name: 'DetailView'}">
            <dl class="bx_list cap">
              <dt>BEST1</dt>
              <dd>3학년</dd>
              <dd>박리나</dd>
            </dl>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link :to="{name: 'DetailView'}">
            <dl class="bx_list file">
              <dt>BEST2</dt>
              <dd>3학년</dd>
              <dd>이채원</dd>
            </dl>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link :to="{name: 'DetailView'}">
            <dl class="bx_list trophy">
              <dt>BEST3</dt>
              <dd>2학년</dd>
              <dd>김정아</dd>
            </dl>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <div class="area">
      <div class="a_top">
        <h2 class="tit"><b class="txt_point_line">강의 후기</b></h2>
      </div>
      <div class="area_bx_review">
        <div class="bx_review">
          <div class="scope five">별 다섯개</div>
          <p>“이번 수업을 통해 많은 지식을 얻을 수 있었어요.<br />최고 최고!! 짱짱!! 또 듣고싶습니다!”</p>
          <span>- 3학년 박ㅇㅇ -</span>
        </div>
        <div class="bx_review">
          <div class="scope five">별 다섯개</div>
          <p>“무대를 찢어 놓으셨다. 교수님 정말 사랑합니다.”</p>
          <span>- 3학년 최ㅇㅇ -</span>
        </div>
        <div class="bx_review">
          <div class="scope five">별 다섯개</div>
          <p>“UX방법론 수업듣고 UX디자이너로 취업 성공!<br />한성대학교 들어오길 잘했다!!”</p>
          <span>- 3학년 박ㅇㅇ -</span>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="a_top">
        <h2 class="tit">브랜드디자인 강의와<br /><b class="txt_point_line">비슷한 강의</b>둘러보기</h2>
      </div>
      <div class="area_bx_subject">
        <div class="bx_subject_item">
          <router-link :to="{name: 'brandstrategy'}">
            <div class="subject_top">
              <h3>브랜드전략</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공필수</li>
                <li class="grades">3학점</li>
                <li>2학년</li>
              </ul>
              <span>교수진 : 장다윤</span>
            </div>
          </router-link>
        </div>
        <div class="bx_subject_item">
          <router-link :to="{name: 'menegedesign'}">
            <div class="subject_top">
              <h3>디자인매니지먼트</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공선택</li>
                <li class="grades">3학점</li>
                <li>3학년</li>
              </ul>
              <span>교수진 : 이호찬</span>
            </div>
          </router-link>
        </div>
        <div class="bx_subject_item">
          <router-link :to="{name: 'twodesign'}">
            <div class="subject_top">
              <h3>2D컴퓨터그래픽</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공기초</li>
                <li class="grades">3학점</li>
                <li>2학년</li>
              </ul>
              <span>교수진 : 강필준, 권도원</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedProductList from '@/components/home/FeaturedProductList.vue';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: 'hci',
  components: {
    FeaturedProductList,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      ref: null,
      search: '',
      swiperOption: {
        effect: "coverflow",
        slidesPerView: 1.3,
        spaceBetween : 10,
        centeredSlides: true,
        initialSlide: 1,
        coverflowEffect: {
          rotate: 50, 
          stretch: 0, 
          depth: 300, 
          modifier: 1,
          slideShadows: false, 
        },
        autoplay : {
          delay : 3000,
          disableOnInteraction : false,
        },
        loop: 1,
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
