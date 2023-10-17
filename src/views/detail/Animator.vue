<template>
  <div id="app">
    <div class="inner detail animator">
      <div class="area pd0">
        <div class="visual">
          <div class="left animate__animated animate__fadeInDown">애니메이터 이미지</div>
          <div class="right">
            <h2 class="animate__animated animate__fadeInDown">애니메이터</h2>
            <p class="animate__animated animate__fadeInDown">애니메이터란 영상 만화나 만화 영화를 그리거나 제작하는 사람. 보통 제작진 중에서도 직접적으로 무언가를 움직이는 작화나 CG 애니메이션을 만드는 사람들을 지칭한다.</p>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="area_bx_infor">
          <h2 class="tit large">관련 강의 교과목이<br/><b class="txt_point_line">6개</b> 검색되었어요</h2>
          <div class="col3 bx_infor">
            <div class="col">
              <span>전공필수</span>
              <strong><b>2</b>개</strong>
            </div>
            <div class="col">
              <span>전공기초</span>
              <strong><b>2</b>개</strong>
            </div>
            <div class="col">
              <span>전공선택</span>
              <strong><b>2</b>개</strong>
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
                <router-link :to="{name: 'basicstere'}">
                  <div class="subject_top">
                    <h3>기초입체디자인</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공필수</li>
                      <li class="grades">3학점</li>
                      <li>1학년</li>
                    </ul>
                    <span>교수진 : 전신종</span>
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
                <router-link :to="{name: 'threed'}">
                  <div class="subject_top">
                    <h3>3D컴퓨터그래픽</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>3학년</li>
                    </ul>
                    <span>교수진 : 장다윤</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'motion'}">
                  <div class="subject_top">
                    <h3>모션그래픽</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>3학년</li>
                    </ul>
                    <span>교수진 : 강필준</span>
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
            </div>
            <!-- 전공필수 -->
            <div class="area_bx_subject bx_onetake">
              <div class="bx_subject_item">
                <router-link :to="{name: 'basicstere'}">
                  <div class="subject_top">
                    <h3>기초입체디자인</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공필수</li>
                      <li class="grades">3학점</li>
                      <li>1학년</li>
                    </ul>
                    <span>교수진 : 전신종</span>
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
            </div>
            <!-- 전공기초 -->
            <div class="area_bx_subject bx_twotake">
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
            </div>
            <!-- 전공선택 -->
            <div class="area_bx_subject bx_threetake">
              <div class="bx_subject_item">
                <router-link :to="{name: 'motion'}">
                  <div class="subject_top">
                    <h3>모션그래픽</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>3학년</li>
                    </ul>
                    <span>교수진 : 강필준</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'threed'}">
                  <div class="subject_top">
                    <h3>3D컴퓨터그래픽</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공선택</li>
                      <li class="grades">3학점</li>
                      <li>3학년</li>
                    </ul>
                    <span>교수진 : 장다윤</span>
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
