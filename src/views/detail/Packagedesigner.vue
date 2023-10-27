<template>
  <div id="app">
    <div class="inner detail package">
      <div id="btn_group">
        <button @click="goBack" type="button">BACK</button>
      </div>
      <div class="area pd0">
        <div class="visual">
          <div class="left animate__animated animate__fadeInDown">패키지디자이너 이미지</div>
          <div class="acce one"></div>
          <div class="acce two"></div>
          <div class="acce three"></div>
          <div class="right">
            <h2 class="animate__animated animate__fadeInDown">패키지디자이너</h2>
            <p class="animate__animated animate__fadeInDown">패키지는 브랜드 이미지를 소비자에게 전달하고 소비자의 구매 의욕을 높이는 역할을 합니다. 패키지 브레인스토밍, 스케치, 프로토타입 제작 등 제품 포장지를 설계하는 업무를 담당하고있습니다.</p>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="area_bx_infor">
          <h2 class="tit large">관련 강의 교과목이<br/><b class="txt_point_line">5개</b> 검색되었어요</h2>
          <div class="col3 bx_infor">
            <div class="col">
              <span>전공필수</span>
              <strong><b>2</b>개</strong>
            </div>
            <div class="col">
              <span>전공기초</span>
              <strong><b>0</b>개</strong>
            </div>
            <div class="col">
              <span>전공선택</span>
              <strong><b>3</b>개</strong>
            </div>
          </div>
        </div>
        <div class="a_top">
          <h2 class="tit">추천교과목</h2>
        </div>
        <div class="bx_filt">
          <div class="btns">
            <button type="info" size="large" class="btn on" v-bind:class="{ active: isActive, 'text-danger': hasError }" @click="isallChange = true, isoneChange = false, istwoChange = false, isthreeChange = false">
              전체
            </button>
            <button type="info" size="large" class="btn" @click="isoneChange = true, isallChange = false, istwoChange = false, isthreeChange = false">
              전공필수
            </button>
            <button type="info" size="large" class="btn" @click="istwoChange = true, isallChange = false, isoneChange = false, isthreeChange = false">
              전공기초
            </button>
            <button type="info" size="large" class="btn" @click="isthreeChange = true, isallChange = false, isoneChange = false, istwoChange = false">
              전공선택
            </button>
          </div>
          <div :class="['take', isallChange ? 'alltake' : '', isoneChange ? 'onetake' : '', istwoChange ? 'twotake' : '', isthreeChange ? 'threetake' : '']">
            <div class="area_bx_subject take">
              <div class="bx_subject_item">
                <router-link :to="{name: 'socialdesign'}">
                  <div class="subject_top">
                    <h3>소셜비즈니스 마케팅</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                    <span>교수진 : 이은경</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'packegdesign'}">
                  <div class="subject_top">
                    <h3>패키지디자인</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                    <span>교수진 : 전신종</span>
                  </div>
                </router-link>
              </div>
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
                <router-link :to="{name: 'branddesign'}">
                  <div class="subject_top">
                    <h3>브랜드디자인</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>3학년</li>
                    </ul>
                    <span>교수진 : 문해원</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'servicedesign'}">
                  <div class="subject_top">
                    <h3>서비스경험디자인</h3>
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
            </div>
            <!-- 전공필수 -->
            <div class="area_bx_subject bx_onetake">
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
                <router-link :to="{name: 'servicedesign'}">
                  <div class="subject_top">
                    <h3>서비스경험디자인</h3>
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
            </div>
            <!-- 전공기초 -->
            <div class="area_bx_subject bx_twotake">
            </div>
            <!-- 전공선택 -->
            <div class="area_bx_subject bx_threetake">
              <div class="bx_subject_item">
                <router-link :to="{name: 'socialdesign'}">
                  <div class="subject_top">
                    <h3>소셜비즈니스 마케팅</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                    <span>교수진 : 이은경</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'packegdesign'}">
                  <div class="subject_top">
                    <h3>패키지디자인</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                    <span>교수진 : 전신종</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'branddesign'}">
                  <div class="subject_top">
                    <h3>브랜드디자인</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>3학년</li>
                    </ul>
                    <span>교수진 : 문해원</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
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
  data() {
    return {
      isallChange: false,
      isoneChange: false,
      istwoChange: false,
      isthreeChange: false,
      isActive: true,
      hasError: false
    };
  },
  methods: {
    goBack(){
        this.$router.go(-1); [2]
    },
  },
  mounted() {
    $('.bx_filt .btns .btn').click( function(){
      if ( $(this).hasClass('on') ) {
        $(this).removeClass('on');
      } else {
        $('.btns .btn.on').removeClass('on');
        $(this).addClass('on');    
      }
    });
  }
}
</script>
