<template>
  <div class="inner course videography">
    <FeaturedProductList />
    <div class="area">
      <div class="a_top">
        <h2 class="tit"><b class="txt_point_line">강의 후기</b></h2>
      </div>
      <div class="area_bx_review">
        <div class="bx_review">
          <div class="scope five">별 다섯개</div>
          <p>“이번 수업을 통해 많은 지식을 얻을 수 있었어요.<br />최고 최고!! 짱짱!! 또 듣고싶습니다!”</p>
          <span>- 박ㅇㅇ -</span>
        </div>
        <div class="bx_review">
          <div class="scope five">별 다섯개</div>
          <p>“무대를 찢어 놓으셨다. 교수님 정말 사랑합니다.”</p>
          <span>- 최ㅇㅇ -</span>
        </div>
        <div class="bx_review">
          <div class="scope five">별 다섯개</div>
          <p>“영상촬영 스튜디오 취업 성공!<br />한성대학교 들어오길 잘했다!!”</p>
          <span>- 박ㅇㅇ -</span>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="a_top">
        <h2 class="tit">영상촬영 스튜디오 강의와<br /><b class="txt_point_line">비슷한 강의</b>둘러보기</h2>
      </div>
      <div class="area_bx_subject">
        <div class="bx_subject_item">
          <router-link :to="{name: 'photography'}">
            <div class="subject_top">
              <h3>사진촬영 스튜디오</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공선택</li>
                <li class="grades">3학점</li>
                <li>전학년</li>
              </ul>
              <span>교수진 : 이지인</span>
            </div>
          </router-link>
        </div>
        <div class="bx_subject_item">
          <router-link :to="{name: 'videobesic'}">
            <div class="subject_top">
              <h3>영상디자인기초</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공필수</li>
                <li class="grades">3학점</li>
                <li>2학년</li>
              </ul>
              <span>교수진 : 박원철</span>
            </div>
          </router-link>
        </div>
        <div class="bx_subject_item">
          <router-link :to="{name: 'mediastory'}">
            <div class="subject_top">
              <h3>미디어스토리텔링 디자인</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공선택</li>
                <li class="grades">3학점</li>
                <li>2학년</li>
              </ul>
              <span>교수진 : 박원철</span>
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
