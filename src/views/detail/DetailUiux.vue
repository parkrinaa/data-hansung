<template>
  <div id="app">
    <div class="inner detail uiuxdesign">
      <div class="area pd0">
        <div class="visual">
          <div class="left animate__animated animate__fadeInDown">UI/UX 디자인 이미지</div>
          <div class="right">
            <h2 class="animate__animated animate__fadeInDown">UI/UX 디자이너</h2>
            <p class="animate__animated animate__fadeInDown">UX(User Experience) 디자인은 시각화되는 작업과 사용자가 서비스 등을 직접적 혹은 간접적으로 느끼는 반응과 행동들과 같은 경험을 총체적으로 설계하는 일이다. UI(User Interface)는 UX 디자이너가 설계한 경험을 시각적으로 구현하는 역할을 맡고있다.</p>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="area_bx_infor">
          <h2 class="tit large">관련 강의 교과목이<br/><b>6개</b> 검색되었어요</h2>
          <div class="col3 bx_infor">
            <div class="col">
              <span>전공필수</span>
              <strong><b>3</b>개</strong>
            </div>
            <div class="col">
              <span>전공기초</span>
              <strong><b>2</b>개</strong>
            </div>
            <div class="col">
              <span>전공선택</span>
              <strong><b>1</b>개</strong>
            </div>
          </div>
        </div>
        <div class="a_top">
          <h2 class="tit large">추천교과목</h2>
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
              <div class="bx_subject_item">
                <router-link :to="{name: 'hci'}">
                  <div class="subject_top">
                    <h3>HCI개론(인터렉션디자인 이해)</h3>
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
                <router-link :to="{name: 'prototyping'}">
                  <div class="subject_top">
                    <h3>사용자경험 프로토타이핑</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                    <span>교수진 : 송영섭</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'gui'}">
                  <div class="subject_top">
                    <h3>GUI</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공기초</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                    <span>교수진 : 박원철</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'uxdesign'}">
                  <div class="subject_top">
                    <h3>UX디자인 사례분석</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공기초</li>
                      <li class="grades">3학점</li>
                      <li>3학년</li>
                    </ul>
                    <span>교수진 : 송영섭</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'methodology'}">
                  <div class="subject_top">
                    <h3>UX디자인 방법론</h3>
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
              <div class="bx_subject_item">
                <router-link :to="{name: 'hci'}">
                  <div class="subject_top">
                    <h3>HCI개론(인터렉션디자인 이해)</h3>
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
                <router-link :to="{name: 'methodology'}">
                  <div class="subject_top">
                    <h3>UX디자인 방법론</h3>
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
              <div class="bx_subject_item">
                <router-link :to="{name: 'gui'}">
                  <div class="subject_top">
                    <h3>GUI</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공기초</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                    <span>교수진 : 박원철</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'uxdesign'}">
                  <div class="subject_top">
                    <h3>UX디자인 사례분석</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공기초</li>
                      <li class="grades">3학점</li>
                      <li>3학년</li>
                    </ul>
                    <span>교수진 : 송영섭</span>
                  </div>
                </router-link>
              </div>
            </div>
            <!-- 전공선택 -->
            <div class="area_bx_subject bx_threetake">
              <div class="bx_subject_item">
                <router-link :to="{name: 'prototyping'}">
                  <div class="subject_top">
                    <h3>사용자경험 프로토타이핑</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>2학년</li>
                    </ul>
                    <span>교수진 : 송영섭</span>
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
