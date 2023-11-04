<template>
  <div class="inner course designeditor">
    <div id="btn_group">
      <button @click="goBack" type="button">BACK</button>
    </div>
    <FeaturedProductList />
    <div class="area">
      <div class="a_top">
        <h2 class="tit"><b class="txt_point_line">강의 후기</b></h2>
      </div>
      <div class="area_bx_review">
        <div class="bx_review">
          <div class="r_top">
            <p>kimsubin12</p>
          </div>
          <p>이번 수업을 통해 많은 지식을 얻을 수 있었어요.<br />최고 최고!! 짱짱!! 또 듣고싶습니다!</p>
          <div class="t_bottom">
            <div class="b_left">
              <span class="date">{{ today.day }} {{ today.date }}</span> <br/>
            </div>
            <div class="b_right">
              <span>{{ like }}</span>
              <button class="button like rounded" @click.once="increase()">
                <i class="fa fa-heart"></i>
              </button>
              <span>{{ like2 }}</span>
              <button class="button thumb rounded" @click.once="increase2()">
                <i class="fa fa-thumbs-up"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="bx_review">
          <div class="r_top">
            <p>wongid_0724</p>
          </div>
          <p>편집디자인 종합설계 수업듣고 취업 성공..<br />수업구성이 너무 알차네요^^!</p>
          <div class="t_bottom">
            <div class="b_left">
              <span class="date">{{ today.day }} {{ today.date }}</span> <br/>
            </div>
            <div class="b_right">
              <span>{{ like3 }}</span>
              <button class="button like rounded" @click.once="increase3()">
                <i class="fa fa-heart"></i>
              </button>
              <span>{{ like4 }}</span>
              <button class="button thumb rounded" @click.once="increase4()">
                <i class="fa fa-thumbs-up"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="bx_review">
          <div class="r_top">
            <p>rioooona8</p>
          </div>
          <p>최고 최고!! 짱짱!! 또 듣고싶습니다!</p>
          <div class="t_bottom">
            <div class="b_left">
              <span class="date">{{ today.day }} {{ today.date }}</span> <br/>
            </div>
            <div class="b_right">
              <span>{{ like5 }}</span>
              <button class="button like rounded" @click.once="increase5()">
                <i class="fa fa-heart"></i>
              </button>
              <span>{{ like6 }}</span>
              <button class="button thumb rounded" @click.once="increase6()">
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
        <h2 class="tit">편집디자인 종합설계 강의와<br /><b class="txt_point_line">비슷한 강의</b>둘러보기</h2>
      </div>
      <div class="area_bx_subject">
        <div class="bx_subject_item">
          <router-link :to="{name: 'typography'}">
            <div class="subject_top">
              <h3>타이포그래피</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공필수</li>
                <li class="grades">3학점</li>
                <li>1학년</li>
              </ul>
              <span>교수진 : 이은경, 김수은</span>
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
                <li>전공기초</li>
                <li class="grades">3학점</li>
                <li>3학년</li>
              </ul>
              <span>교수진 : 장경국</span>
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
        <div class="bx_subject_item">
          <router-link :to="{name: 'layoutdesign'}">
            <div class="subject_top">
              <h3>레이아웃 디자인</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공선택</li>
                <li class="grades">3학점</li>
                <li>2학년</li>
              </ul>
              <span>교수진 : 이호찬</span>
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
      like : 11,
      like2 : 12,
      like3 : 2,
      like4 : 10,
      like5 : 50,
      like6 : 1,
      ref: null,
      search: '',
      todoList:  [],
      itemInput: '',
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
    increase(){ 
      this.like += 1 
    },
    increase2(){ 
      this.like2 += 1 
    },
    increase3(){ 
      this.like3 += 1 
    },
    increase4(){ 
      this.like4 += 1 
    },
    increase5(){ 
      this.like5 += 1 
    },
    increase6(){ 
      this.like6 += 1 
    },
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
      }, 0);
    });
  }
}

</script>
