<template>
  <div class="inner course prototyping">
    <div id="btn_group">
      <button @click="goBack" type="button">BACK</button>
    </div>
    <FeaturedProductList />
    <div class="area pr0">
      <div class="a_top pb20">
        <h2 class="tit">강의 수강자의<br/><b class="txt_point_line">사용자경험 프로토타이핑 <br/>결과물</b> 보기</h2>
      </div>
      <swiper
        class="swiper pb20"
        :options="swiperOption"
        >
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="img"></div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination pagination_bullet"></div>
    </div>
    <div class="area">
      <div class="a_top">
        <h2 class="tit"><b class="txt_point_line">강의 후기</b></h2>
      </div>
      <div class="area_bx_review">
        <div class="bx_review">
          <div class="r_top">
            <p>kimsubin12</p>
          </div>
          <p>사용자경험 프로토타이핑 수업 들으니, 앱을 만들어 보고 싶다는 생각이 드네요!!</p>
          <div class="t_bottom">
            <div class="b_left">
              <span class="date">{{ today.day }} {{ today.date }}</span> <br/>
            </div>
            <div class="b_right">
              <button class="button like rounded">
                <i class="fa fa-heart"></i>
              </button>
              <button class="button thumb rounded">
                <i class="fa fa-thumbs-up"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="bx_review">
          <div class="r_top">
            <p>wongid_0724</p>
          </div>
          <p>사용자경험 프로토타이핑 수업듣고 취업 성공..<br />수업구성이 너무 알차네요^^!</p>
          <div class="t_bottom">
            <div class="b_left">
              <span class="date">{{ today.day }} {{ today.date }}</span> <br/>
            </div>
            <div class="b_right">
              <button class="button like rounded">
                <i class="fa fa-heart"></i>
              </button>
              <button class="button thumb rounded">
                <i class="fa fa-thumbs-up"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="bx_review">
          <div class="r_top">
            <p>kimsubin12</p>
          </div>
          <p>최고 최고!! 짱짱!! 또 듣고싶습니다!</p>
          <div class="t_bottom">
            <div class="b_left">
              <span class="date">{{ today.day }} {{ today.date }}</span> <br/>
            </div>
            <div class="b_right">
              <button class="button like rounded">
                <i class="fa fa-heart"></i>
              </button>
              <button class="button thumb rounded">
                <i class="fa fa-thumbs-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="todo-container">
        <div class="list">
          <div v-for="(item, index) in todoList" :key="item" class="item">
            <div class="bx_review" data-aos="fade-right" data-aos-duration="1000">
            <div class="r_top">
              <p>rina</p>
              <button @click="removeItem(index)" class="btn btn-sm btn-danger remove">삭제</button>
            </div>
            <p>{{ item }}</p>
            <div class="t_bottom">
              <div class="b_left">
                <span class="date">{{ today.day }} {{ today.date }}</span> <br/>
              </div>
            </div>
          </div>
          </div>
        </div>
        <p class="txt_review">어떠셨나요?<br /> <span>따듯한 강의 후기를 남겨보세요</span></p>
        <div class="controller">
          <input type="text" v-model="itemInput" @keyup.enter="addItem" placeholder="내용을 입력해주세요."/>
          <button class="btn btn-primary" @click="addItem" :disabled="isAddBtnDisabled">+</button>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="a_top">
        <h2 class="tit">사용자경험 프로토타이핑 강의와<br /><b class="txt_point_line">비슷한 강의</b>둘러보기</h2>
      </div>
      <div class="area_bx_subject">
        <div class="bx_subject_item">
          <router-link :to="{name: 'methodology'}">
            <div class="subject_top">
              <h3>UX 디자인 방법론</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공필수</li>
                <li class="grades">3학점</li>
                <li>3학년</li>
              </ul>
              <span>교수진 : 송영섭</span>
            </div>
          </router-link>
        </div>
        <div class="bx_subject_item">
          <router-link :to="{name: 'hci'}">
            <div class="subject_top">
              <h3>HCI개론(인터렉션디자인 이해)</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공선택</li>
                <li class="grades">3학점</li>
                <li>1학년</li>
              </ul>
              <span>교수진 : 송영섭</span>
            </div>
          </router-link>
        </div>
        <div class="bx_subject_item">
          <router-link :to="{name: 'uxdesign'}">
            <div class="subject_top">
              <h3>UX 디자인 사례분석</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공선택</li>
                <li class="grades">3학점</li>
                <li>3학년</li>
              </ul>
              <span>교수진 : 송영섭</span>
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
      todoList:  [],
      itemInput: '',
      swiperOption: {
        effect: "coverflow",
        slidesPerView: 1.1,
        spaceBetween : 0,
        centeredSlides: true,
        // initialSlide: 1,
        coverflowEffect: {
          rotate: 50, 
          stretch: 0, 
          depth: 300, 
          modifier: 1,
          slideShadows: false,
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
        autoplay : {
          delay : 3000,
          disableOnInteraction : false,
        },
      },
    }
  },
  computed: {
    isAddBtnDisabled() {
      return !this.itemInput;
    },
    today: function() {
      var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
          dd = '0'+dd
      } 

      if(mm<10) {
          mm = '0'+mm
      } 

      today = {
        day: weekday[today.getDay()],
        date:  mm + '-' + dd + '-' + yyyy,
      }

      return(today);
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addItem', product);
    },
    goBack(){
        this.$router.go(-1); [2]
    },
    addItem() {
      if (this.isAddBtnDisabled) {
        return;
      }
      this.todoList.push(this.itemInput);
      this.itemInput = '';
    },
    removeItem(_index) {
      this.todoList.splice(_index, 1);
      // this.todoList = this.todoList.filter((item, index) => index !== _index)
    },
  },
  mounted() {
    $('.button').click( function() {
      var $button = $(this);
      
      // Button Off
      if ($button.hasClass('is-active')) {
        $button
          .removeClass('is-active');
        return;
      }
      
      // Button On (with a loader)
      $button.addClass('is-loading');  
      setTimeout(function () {
        $button
          .removeClass('is-loading')
          .addClass('is-active');
      }, 500);
    });
  }
}

</script>
