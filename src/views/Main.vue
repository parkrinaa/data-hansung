<template>
  <div id="app">
    <div class="inner main">
      <section class="area a1">
      <div id="btn_group">
        <button @click="goBack" type="button">BACK</button>
        <div class="profile">
          <p>Hi. rina</p>
        </div>
      </div>
        <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000">Find your <br/> dream lecture!</h1>
        <!-- <div class="img animate__animated animate__fadeIn animate__faster">이미지</div> -->
        <!-- rubberBand -->
        <div class="img_group">
          <div class="img1 animated bounceIn"></div>
          <div class="img2 animated bounceIn"></div>
          <div class="img3 animated bounceIn"></div>
          <div class="img4 animated bounceIn"></div>
          <div class="img5 animated bounceIn"></div>
          <div class="img6 animated bounceIn"></div>
          <div class="img7"></div>
        </div>
      </section>
      <section class="a2">
        <div class="bx_step">
          <h2>학점관리앱을 <br/> 쉽게 이용하는 방법</h2>
          <div class="step s1">
            <div class="s_top">
              <div class="s_left">01</div>
              <div class="s_right">
                탐색하기
              </div>
            </div>
            <div class="s_cont">
              <p>여러 직업군을 확인하여 <br/> 관심 진로를 탐색해 보세요.</p>
              <!-- <div class="img">이미지</div> -->
              <div class="area_bx_thema">
                <div class="bx_thema">
                  <div class="t_cont one" data-aos="zoom-in-up">
                    <h3>UI/UX 디자이너</h3>
                    <p>User interface <br /> User experience Designer</p>
                  </div>
                  <div class="t_cont two" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="1000">
                    <h3>애니메이터</h3>
                    <p>Animator</p>
                  </div>
                </div>
                <div class="bx_thema">
                  <div class="t_cont three" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1000">
                    <h3>편집 디자이너</h3>
                    <p>Editorial designer</p>
                  </div>
                  <div class="t_cont four" data-aos="zoom-in-up" data-aos-delay="700" data-aos-duration="1000">
                    <h3>패키지 디자이너</h3>
                    <p>Package designer</p>
                  </div>
                </div>
              </div>
              <button @click="handleClick" class="animate__animated animate__pulse animate__infinite	infinite">확인하기</button>
            </div>
          </div>
          <div class="step s2" data-aos="fade-up" data-aos-duration="3000">
            <div class="s_top">
              <div class="s_left">02</div>
              <div class="s_right">
                추천강의
              </div>
            </div>
            <div class="s_cont">
              <p>관심 진로에 맞는<br/>추천 강의를 확인해보세요.</p>
              <div class="img">이미지</div>
            </div>
          </div>
          <div class="step s3" data-aos="fade-up" data-aos-duration="3000">
            <div class="s_top">
              <div class="s_left">03</div>
              <div class="s_right">
                장바구니에 담기
              </div>
            </div>
            <div class="s_cont">
              <p>수강을 원하는 강의를<br/> 장바구니에 담아보세요.</p>
              <div class="img">이미지</div>
            </div>
          </div>
          <div class="step s4" data-aos="fade-up" data-aos-duration="3000">
            <div class="s_top">
              <div class="s_left">04</div>
              <div class="s_right">
                장바구니 확인
              </div>
            </div>
            <div class="s_cont">
              <p>장바구니에서<br/> 졸업요건과 비교하세요!</p>
              <div class="img">이미지</div>
            </div>
          </div>
          <div class="bx_arrow">
            <div class="arrows arrow-first"></div>
            <div class="arrows arrow-second"></div>
          </div>
        </div>
        <div class="pt30 pl20 pr20 pb20 bx_step" ref="targetRef">
          <h2 class="pb10">여러 직업군을 확인하여<br/><b class="txt_point_line">관심 진로를</b> 탐색해 보세요.</h2>
          <div class="search_bar">
            <input type="search" v-model="search" placeholder="검색어를 입력하세요." onfocus="this.placeholder = '검색어를 입력하세요.'" onblur="검색어를 입력하세요.'" class="ipt">
          </div>
        </div>
        <swiper
          class="swiper"
          :options="swiperOption"
          >
            <swiper-slide class="bx_lecture_list" v-for="item in filterProducts" v-bind:key="item.id">
              <router-link :to="item.href" :class="{'one': item.subject === 'one', 'two': item.subject === 'two', 'three': item.subject === 'three', 'four': item.subject === 'four', 'five': item.subject === 'five' }">
                <div class="img">이미지</div>
                <div class="bx_tit">
                  <div class="tit">
                    {{ item.name }}
                  </div>
                  <div class="tit_sub">
                    {{ item.sub }} 
                  </div>
                </div>
              </router-link>
            </swiper-slide>
          </swiper>
      </section>
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
    components: {
      Swiper,
      SwiperSlide,
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
      ref: null,
      search: '',
      swiperOption: {
        effect: "coverflow",
        slidesPerView: 1.3,
        spaceBetween : -20,
        centeredSlides: true,
        initialSlide: 1,
        coverflowEffect: {
          rotate: 50, 
          stretch: 0, 
          depth: 400, 
          // modifier: 1,
        }
      },
      products: [
        {
          name: 'UI/UX 디자이너',
          sub: 'UI(User Interface), UX(User Experience) 디자이너는 모두 사용자 경험을 향상시키기 위해 제품과 서비스를 디자인하는 분야',
          href: '/detailUiux',
          subject: 'one',
          vegan: false,
        },
        {
          name: '패키지디자이너',
          sub: '패키지 디자이너는 제품에 디자인을 다루는 직업이라고 볼 수 있는데 이사람들은 중요한 정보를 전달하고 품목에 구매력을 부여해야 한다.',
          href: '/packagedesigner',
          subject: 'two',
          vegan: false
        },
        {
          name: '3D그래픽 디자이너',
          sub: '3차원(3D) 그래픽 아티스트는 영화, TV 또는 비디오 게임 제작의 캐릭터, 풍경, 배경 및 기타 요소에 사용되는 디지털 애니메이션 또는 푸티지를 디자인합니다. 고요하거나 움직이는 창조물은 높이와 너비 외에도 깊이의 모양을 가지고 있습니다.',
          href: '/detail3d',
          subject: 'three',
          vegan: false
        },
        {
          name: '애니메이터',
          sub: '애니메이터는 애니메이션을 만드는 사람으로, 보통 제작진 중에서도 직접적으로 무언가를 움직이는 작화나 3D 장면을 만드는 사람들을 지칭하며, 주로 애니메이션 제작사 등에서 애니메이션을 제작하거나 하청 보조업 등으로 종사하는 사람들을 가리키는 호칭이다.',
          href: '/animator',
          subject: 'four',
          vegan: false
        },
        {
          name: '편집 디자이너',
          sub: '어떤 메시지의 시각적 전달을 목적으로 한 시각 디자인 중에서 주로 인쇄물 등을 위한 평면적 표현의 인쇄기술을 적용하여 다양한 제품에 문양을 그리거나 광고, 패키지, 책표지, 카탈로그 등을 창작 및 제작하는 데 관련된 업무를 수행하는 사람',
          href: '/detailgraphic',
          subject: 'five',
          vegan: false
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
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addItem', product);
    },
    handleClick() {
      this.$refs.targetRef.scrollIntoView({ behavior: 'smooth' });
    },
    goBack(){
        this.$router.go(-1); [2]
    },
  },
};

</script>
