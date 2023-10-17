<template>
  <div class="inner faculty">
    <div class="area">
      <h2 class="tit"><b class="txt_point_line">교수진소개</b></h2>
      <div class="bx_profile">
        <div class="img">교수진 이미지</div>
        <div class="right">
          <h2>박원철</h2>
          <p>02.760.4429 <br /> wcpark@hansung.ac.kr</p>
        </div>
      </div>
      <div class="bx_subjects">
        <h2>담당과목</h2>
        <swiper
        class="swiper"
        :options="swiperOption"
        >
          <swiper-slide class="animate__animated animate__fadeInDown animate__faster">
            <router-link :to="{name: 'introduct'}">
              <div class="bx_subject_item">
                <router-link :to="{name: 'packegdesign'}">
                  <div class="subject_top">
                    <h3>패키지디자인</h3>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                  </div>
                </router-link>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="animate__animated animate__fadeInDown animate__faster animate__delay-1s">
            <router-link :to="{name: 'rpl'}">
              <div class="bx_subject_item">
                <router-link :to="{name: 'packegdesign'}">
                  <div class="subject_top">
                    <h3>패키지디자인</h3>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                  </div>
                </router-link>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="animate__animated animate__fadeInDown animate__faster animate__delay-2s">
            <router-link :to="{name: 'DetailView'}">
              <div class="bx_subject_item">
                <router-link :to="{name: 'packegdesign'}">
                  <div class="subject_top">
                    <h3>패키지디자인</h3>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                  </div>
                </router-link>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
      <div class="bx_list_sub">
        <div class="list">
          <h2>경력</h2>
          <ul>
            <li>한성대학교 산업디자인학과 학사</li>
            <li>한성대학교 미디어디자인학과 석사</li>
            <li>한성대학교 미디어디자인학과 박사</li>
            <li>전) (주)애니지니 대표</li>
            <li>전) 한성대학교 ICT디자인학부 영상・애니메이션디자인트랙 겸임교수</li>
            <li>현) (사)한국애니메이션학회 학술이사</li>
            <li>현) (사)한국기초조형학회 정보화기획분야 부회장</li>
            <li>현) 한성대학교 미래플러스대학 ICT융합디자인학과 조교수 / 학과장</li>
          </ul>
        </div>
        <div class="list">
          <h2>기획전</h2>
          <ul>
            <li>2019 ANBD SEOUL EXHIBITION(개인전)</li>
            <li>2019 ANBD TAIPEI EXHIBITION(개인전)</li>
            <li>2021 GIAF 초청 KSBDA 세종 특별전(개인전)</li>
            <li>2022 ANBD SAPPRO EXHIBITION(개인전)</li>
          </ul>
        </div>
        <div class="list">
          <h2>경력</h2>
          <ul>
            <li>Visual Pun효과가 애니메이션 영화에 미치는 영향 / 2005</li>
            <li>기호학적 분석을 통한 오브제 애니메이션광고의 상징적 의미작용에 관한 연구 / 2019</li>
            <li>직무역량을 기본으로 한 성인학습자 대상 디자인전공 교육과정 개발 / 2021</li>
            <li>선취업·후진학 성인학습자를 위한 4년제 대학의 시각디자인 교육 방안 연구 / 2022</li>
          </ul>
        </div>
        <div class="list">
          <h2>프로젝트</h2>
          <ul>
            <li>단편 애니메이션 영화 “꼬리없는 쥐(Mouse without a tail)”</li>
            <li>단편 애니메이션 영화 “자유를 그리다(Drawing the Freedom)”</li>
            <li>뮤직비디오(불면증/다이나믹듀오 외)</li>
            <li>기업 및 제품 홍보영상(한율 외)</li>
            <li>공연 프로모션 및 공연영상(최현우 매직쇼 외)</li>
            <li>TV시리즈 애니메이션(애니다큐 그림여행 외)</li>
            <li>모바일 게임 및 앱 UI디자인(모두의 빙고 외)</li>
          </ul>
        </div>
      </div>
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
    swiperOption: { 
      slidesPerView: 1, 
      spaceBetween: 30, 
      loop: true, 
      pagination: { 
          el: '.swiper-pagination', 
          clickable: true 
      }, 
      navigation: { 
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev' 
      } 
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
    data() {
      return {
      search: '',
      swiperOption: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
    }
    },
    computed: {
    filterProducts() {
      return this.products.filter(item => {
        return item.name.match(this.search)
      })
    },
  },
  };

</script>
