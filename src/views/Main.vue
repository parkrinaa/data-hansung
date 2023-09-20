<template>
  <div id="app">
    <Header />
    <div class="inner main">
      <section class="area pt0 pr0">
        <h2 class="tit">ICT융합디자인학과의<br/><b class="txt_point_line">다양한 정보</b>를 확인해보세요</h2>
        <swiper
        class="swiper"
        :options="swiperOption"
        >
          <swiper-slide class="animate__animated animate__fadeInDown animate__faster">
            <router-link :to="{name: 'IntroductView'}">
              <dl class="bx_list cap">
                <dt>학과소개</dt>
                <dd>학과비전</dd>
                <dd>졸업요건</dd>
              </dl>
            </router-link>
          </swiper-slide>
          <swiper-slide class="animate__animated animate__fadeInDown animate__faster animate__delay-1s">
            <router-link :to="{name: 'RplView'}">
              <dl class="bx_list file">
                <dt>RPL</dt>
                <dd>신청가능 교과목</dd>
                <dd>신청절차</dd>
              </dl>
            </router-link>
          </swiper-slide>
          <swiper-slide class="animate__animated animate__fadeInDown animate__faster animate__delay-2s">
            <router-link :to="{name: 'DetailView'}">
              <dl class="bx_list trophy">
                <dt>교수진 소개</dt>
                <dd>교수진 소개</dd>
                <dd>프로필</dd>
              </dl>
            </router-link>
          </swiper-slide>
        </swiper>
      </section>
      <section class="area">
        <h2 class="tit">관심 진로 방향을 선택해<br/><b class="txt_point_line">관련도 높은 강의 교과목</b>을 확인해보세요</h2>
        <div class="search_bar">
          <input type="search" v-model="search" placeholder="검색어를 입력하세요." onfocus="this.placeholder = ''" class="ipt">
        </div>
        <ul>
          <li v-for="item in filterProducts" v-bind:key="item.id" class="bx_lecture_list">
            <router-link :to="{name: 'DetailView'}">
              <div class="tit">
                {{ item.name }} <span class="hot">{{ item.hot }}</span> <span class="best">{{ item.best }}</span>
              </div>
              <div class="tit_sub">
                {{ item.sub }} 
              </div>
            </router-link>
          </li>
        </ul>
        <div class="no_search">
          <p>검색결과가 없습니다.</p>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Header from '@/components/Header.vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Header,
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
      products: [
        {
          name: 'UI/UX 디자인',
          sub: 'UI(User Interface), UX(User Experience) 디자인은',
          hot: 'HOT',
          best: 'BEST',
          vegan: false,
        },
        {
          name: '2D그래픽 디자이너',
          sub: '영화, TV또는 비디오 게임 제작의 캐릭터, 풍경, 배경 및 기',
          hot: 'HOT',
          best: 'BEST',
          vegan: false
        },
        {
          name: '3D그래픽 디자이너',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          hot: 'HOT',
          best: 'BEST',
          vegan: false
        },
        {
          name: '애니메이터',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          hot: 'HOT',
          best: 'BEST',
          vegan: true
        },
        {
          name: '아이텐티티 디자이너',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          hot: 'HOT',
          best: 'BEST',
          vegan: true
        },
        {
          name: '일러스트레이터',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          hot: 'HOT',
          best: 'BEST',
          vegan: true
        },
        {
          name: '편집디자이너',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          hot: 'HOT',
          best: 'BEST',
          vegan: true
        },
        {
          name: '광고디자이너',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          hot: 'HOT',
          best: 'BEST',
          vegan: true
        },
      ],
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
