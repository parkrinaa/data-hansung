<template>
  <div id="app">
    <div class="inner detail threedesign">
      <div id="btn_group">
        <button @click="goBack" type="button">BACK</button>
      </div>
      <div class="area pd0">
        <div class="visual">
          <div class="left animate__animated animate__fadeInDown">3D 그래픽 디자이너 이미지</div>
          <div class="acce one"></div>
          <div class="acce two"></div>
          <div class="acce three"></div>
          <div class="right">
            <h2 class="animate__animated animate__fadeInDown">3D 그래픽 디자이너</h2>
            <p classs="animate__animated animate__fadeInDown">3차원(3D) 그래픽 아티스트는 영화, TV 또는 비디오 게임 제작의 캐릭터, 풍경, 배경 및 기타 요소에 사용되는 디지털 애니메이션 또는 푸티지를 디자인합니다. 고요하거나 움직이는 창조물은 높이와 너비 외에도 깊이의 모양을 가지고 있습니다.</p>
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
              <strong><b>1</b>개</strong>
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
                <router-link :to="{name: 'twodesign'}">
                  <div class="subject_top">
                    <h3>2D컴퓨터그래픽</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공기초</li>
                      <li class="grades">3학점</li>
                      <li>1학년</li>
                    </ul>
                    <span>교수진 : 강필준, 권도원</span>
                  </div>
                </router-link>
              </div>
              <div class="bx_subject_item">
                <router-link :to="{name: 'basicplane'}">
                  <div class="subject_top">
                    <h3>기초평면디자인</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공필수</li>
                      <li class="grades">3학점</li>
                      <li>1학년</li>
                    </ul>
                    <span>교수진 : 권도원</span>
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
                <router-link :to="{name: 'basicplane'}">
                  <div class="subject_top">
                    <h3>기초평면디자인</h3>
                    <button class="btn btn_arrow">더보기</button>
                  </div>
                  <div class="area_subject_cont">
                    <ul class="subject_cont">
                      <li>전공필수</li>
                      <li class="grades">3학점</li>
                      <li>1학년</li>
                    </ul>
                    <span>교수진 : 권도원</span>
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
                      <li>1학년</li>
                    </ul>
                    <span>교수진 : 강필준, 권도원</span>
                  </div>
                </router-link>
              </div>
            </div>
            <!-- 전공선택 -->
            <div class="area_bx_subject bx_threetake">
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
      $('.bx_filt .btns .btn').removeClass('on');
      $(this).addClass('on');
    });
  }
}
</script>
