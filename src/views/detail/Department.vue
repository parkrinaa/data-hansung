<template>
  <figure class="tabBlock department">
    <h1 class="top_tit">학과소개</h1>
    <ul class="tabBlock-tabs">
      <li id="0" v-on:click="changeTab" class="tabBlock-tab on">
        학과소개
      </li>
      <li id="1" v-on:click="changeTab" class="tabBlock-tab">RPL신청</li>
      <li id="2" v-on:click="changeTab" class="tabBlock-tab">교수진소개</li>
    </ul>
    <div class="tabBlock-content">
      <div v-if="tabs[0]" class="tabBlock-pane introduct">
        <div class="area">
          <h2 class="tit"><b class="txt_point_line">ICT융합디자인학과란?</b></h2>
          <p>ICT(Information &amp; Communication Technology, 정보통신기술)시대의 시각디자인학과인 "ICT융합디자인학과"는 IT기술의 진보와 새로운 미디어 시대에 적응할 수 있는 실무형, 창의융합형 디자이너 양성을 목표로 하고 있습니다.</p>
          <p>'디자인 기초이론'과정에서 시작해 '커뮤니케이션 디자인', 'UX/UI디자인', '디자인 비즈니스 전문가'과정에 이르는 실무형 교육과정을 축으로 그래픽디자인, 편집디자인, 영상디자인, 웹디자인, 앱디자인, 브랜드디자인 등으로 확산되는 ICT융합디자인학과의 트리 구조 교과과정은 분야별 실무능력 향상 뿐만 아니라, 창의 융합적 디자인 전략 기획능력까지 겸비한 디자인 전문가로서 다양한 직군으로 진출할 수 있게 하는 발판이 될 것입니다.</p>
        </div>
        <div class="area">
          <h2 class="tit"><b class="txt_point_line">교육목표</b></h2>
          <ul class="bx_target">
            <li><p>“새로운 기술(ICT)의 시대를 주도하는<br />창의융합형 시각 디자인 전문인력 양성”</p></li>
            <li><p>디자인 기초이론을 토대로<br />창의적 사고를 통한 아이디어 발상 능력 함양</p></li>
            <li><p>사용자의 감성과 심리, 경험을 바탕으로 한<br />창의적인 기획 및 문제 해결 능력 함양</p></li>
            <li><p>첨단 기술을 이해하고 실무에서<br />활용될 수 있는 전문 지식, 표현 능력 함양</p></li>
            <li><p>융합적 사고를 바탕으로 한<br />디자인 전략기획 및 비즈니스 능력 함양</p></li>
          </ul>
        </div>
        <div class="area">
          <h2 class="tit"><b class="txt_point_line">진로 및 전망</b></h2>
          <div class="a_cont" data-aos="fade-up" data-aos-duration="3000">
            <p>디자인전문 업체 및 벤처 기업 창업과 학문분야의  연구자로서 진출과 산업체의 디자인 경영과 디자인 실무를 담당한 디자이너로 활동</p>
          </div>
          <div class="a_cont" data-aos="fade-up" data-aos-duration="3000">
            <p>전문 디자인업체, 중소기업체, 정부기관, 방송매체사, 출판사 등에 취업하여, 경제, 문화, 사회에 중요한 역할을 담당</p>
          </div>
          <div class="a_cont" data-aos="fade-up" data-aos-duration="3000">
            <p>다양한 학문과 전공이 접목된 분야로서 컴퓨터 기술뿐만 아니라 정보통신 및 산업디자인 전반에 해당되는 디자이너로서 활동</p>
          </div>
        </div>
        <div class="area">
          <h2 class="tit"><b class="txt_point_line">졸업요건</b></h2>
          <p>졸업작품(50점)+포트폴리오(50점) 심사 후 합산 80점 이상</p>
        </div>
      </div>
      <div v-if="tabs[1]" class="tabBlock-pane rpl">
        <div class="area">
          <h2 class="tit"><b class="txt_point_line">선행경험학습인정제도 (RPL)</b></h2>
          <p>개인이 선행적으로 갖는 경험이나 사전학습결과를 대학이 제시하는 기준에 따라 증명함으로써 객관적이고 공식적인 절차를 통해 대학학점으로 평가 인정하는 제도입니다.</p>
          <ul class="circle">
            <li>단순 경력 년수가 아닌 교과목별로 설정된 평가기준을 충족하는 경우에만 인정됩니다.</li>
            <li>평가의 공정성을 위하여 외부위원을 포함한 학점인정위원회에서 평가를 진행합니다.</li>
          </ul>
        </div>
        <div class="area">
          <h2 class="tit"><b class="txt_point_line">신청방법</b></h2>
          <p>2022학년도 신입생부터 신청시기는 <strong>“1학년 1학기 1회”</strong>만 인정</p>
          <ul class="a_cont">
            <li>
              <div class="right">
                <dl>
                  <dt>인정 내용</dt>
                  <dd>교육 및 훈련 경험</dd>
                  <dd>자격증 및 수상 경험</dd>
                  <dd>근무 경험</dd>
                </dl>
              </div>
            </li>
            <li>
              <div class="right">
                <dl>
                  <dt>인정 범위</dt>
                  <dd>전체 학점의 25% 이내</dd>
                </dl>
              </div>
            </li>
            <li>
              <dl>
                <dt>신청 방법</dt>
                <dd>온라인 : 미래플러스대학 홈페이지 - 학사안내 - 서류제출 - RPL서류제출</dd>
                <dd>오프라인 : 한성대학교 진리관 312호(미래플러스대학교학팀)</dd>
              </dl>
              <a href="https://futureplus.hansung.ac.kr/ko/notice/job/rpl" title="한성대 서류제출 페이지" target="_blank" class="btn">온라인 제출하러 가기</a>
            </li>
            <li>
              <p>제출 서류</p>
              <dl class="dl_check">
                <dt>공통 필수</dt>
                <dd>선행경험학습 학점인정신청서, 선행경험학습 포트폴리오, 자기평가 체크리스트, 서류준비 체크리스트</dd>
                <dt>교육 및 훈련</dt>
                <dd>교육 및 훈련 이수 증명서, 성적 및 학점취득증명서, 수업계획서/강의개요서</dd>
                <dt>자격증 및 수상</dt>
                <dd>자격증 및 수상 내역, 명장/숙련기술전수자 증명 서류</dd>
                <dt>근무경험</dt>
                <dd>경력증명서/재직증명서, 직무기술서</dd>
                <dt>기타</dt>
                <dd>교육훈련 결과 및 근무경험, 직무수행능력을 입증할 수 있는 사람</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="tabs[2]" class="tabBlock-pane faculty">
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
              <swiper-slide>
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
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="bx_subject_item">
                  <router-link :to="{name: 'videobesic'}">
                    <div class="subject_top">
                      <h3>영상디자인기초</h3>
                      <button class="btn btn_arrow">더보기</button>
                    </div>
                    <div class="area_subject_cont">
                      <ul class="subject_cont">
                        <li>전공기초</li>
                        <li class="grades">3학점</li>
                        <li>2학년</li>
                      </ul>
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
              <swiper-slide>
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
                    </div>
                  </router-link>
                </div>
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
              <h2>논문</h2>
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
        <div class="area">
          <div class="bx_profile">
            <div class="img hochan">교수진 이미지</div>
            <div class="right">
              <h2>이호찬</h2>
              <p>boogi73@gmail.com</p>
            </div>
          </div>
          <div class="bx_subjects">
            <h2>담당과목</h2>
            <swiper
            class="swiper"
            :options="swiperOption"
            >
              <swiper-slide>
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
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="bx_subject_item">
                  <router-link :to="{name: 'menegedesign'}">
                    <div class="subject_top">
                      <h3>디자인매니지먼트</h3>
                      <button class="btn btn_arrow">더보기</button>
                    </div>
                    <div class="area_subject_cont">
                      <ul class="subject_cont">
                        <li>전공선택</li>
                        <li class="grades">3학점</li>
                        <li>3학년</li>
                      </ul>
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="bx_subject_item">
                  <router-link :to="{name: 'information'}">
                    <div class="subject_top">
                      <h3>인포메이션디자인</h3>
                      <button class="btn btn_arrow">더보기</button>
                    </div>
                    <div class="area_subject_cont">
                      <ul class="subject_cont">
                        <li>전공선택</li>
                        <li class="grades">3학점</li>
                        <li>3학년</li>
                      </ul>
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="bx_list_sub">
            <div class="list">
              <h2>경력</h2>
              <ul>
                <li>한성대학교 산업디자인학과 학사</li>
                <li>한성대학교 대학원 미디어디자인학과 석사</li>
                <li>전) (주)WECOM AD 팀장</li>
                <li>현) (주)디자인그룹 더블유 대표</li>
                <li>현) 한성대학교 미래플러스대학 ICT융합디자인학과 겸임교수</li>
              </ul>
            </div>
            <div class="list">
              <h2>프로젝트</h2>
              <ul>
                <li>공기관 및 사기업 광고, 홍보물, 정기간행물(사보), C.I, B.I, 홈페이지 디자인(서울특별시, 대한민국 역사박물관, 대한적십자사, 직접판매공제조합, 이수그룹, 로레일, 샘소나이트, 한국제지, 대림오토바이, 리바트, 하나금융그룹, 미래에셋증권, 한국투자증권, DB손해보험 등)</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="bx_profile">
            <div class="img shinjong">교수진 이미지</div>
            <div class="right">
              <h2>전신종</h2>
              <p>02-760-4152 <br /> art-chun@hanmail.net</p>
            </div>
          </div>
          <div class="bx_subjects">
            <h2>담당과목</h2>
            <swiper
            class="swiper"
            :options="swiperOption"
            >
              <swiper-slide>
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
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
              <swiper-slide>
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
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="bx_list_sub">
            <div class="list">
              <h2>경력</h2>
              <ul>
                <li>한성대학교 산업디자인학과 학사</li>
                <li>한성대학교 예술대학원 공간연출학과 석사</li>
                <li>일본 국립츠쿠바대학교 대학원 예술연구과 구성과 석사</li>
                <li>한성대학교 시각.영상커뮤니케이션학과 박사</li>
                <li>한성대학교 미래플러스대학 ICT융합디자인학과</li>
                <li>한성대학교 상상력인재학부 교학부장</li>
                <li>한성대학교 ICT디자인학부 (브랜드·패키지디자인트랙 주임교수) 조교수</li>
                <li>(사)한국기초조형학회 부회장</li>
                <li>ANBD(ASIA NETWORK BEYOND DESIGN) 특임이사, 전시국장</li>
              </ul>
            </div>
            <div class="list">
              <h2>프로젝트</h2>
              <ul>
                <li>구성전 (츠쿠바대학교 갤러리. 츠쿠바)</li>
                <li>형태를 가진 공간들 (츠쿠바갤러리. 츠쿠바)</li>
                <li>일한국제현대미술전 (카나가와켄 시민갤러리, 요코하마)</li>
                <li>제55회 모던아트전 (우에노 미술관, 동경)</li>
                <li>한일 우정의해 HOPE한일교류미술전 (주일한일대사관 갤러리, 동경)</li>
                <li>TOKYO COMPETITION#2 공모전. 비쥬얼아트부문 입선 (마루노치갤러리, 동경)</li>
                <li>노하우전 (츠쿠바대학교 갤러리. 츠쿠바)</li>
                <li>제9회 동강현대미술작가 초대전 (영월문화예술회관)</li>
                <li>DNA(Design & Art) 5cell전 (한성대학교 갤러리, 서울)</li>
                <li>제10회 동강현대미술작가 초대전 (영월문화예술회관)</li>
                <li>꽃과 미술의 만남전 (정글북아트갤러리. 일산)</li>
                <li>Encore Alaska전 (알라스카, 미국)</li>
                <li>Gusan open studio (개인작업장, 일산)</li>
                <li>2007 대한민국신진작가전 (울산대공원남문전시장, 울산)</li>
                <li>2007 과학과 예술의 만남-점더크게, 좀더작게-(at센타, 서울)</li>
                <li>남·북화가100인작품전 (북경만수대화랑, 중국)</li>
                <li>기획초대전 무자-12인전 (정글북아트갤러리, 일산)</li>
                <li>2008과학예술특별전&lt;과학으로 보면 더 재미있는 미술&gt;(국립중앙과학관, 대전)</li>
                <li>2008 미술과 놀이 –놀이의 방법- (예술의 전당, 서울)</li>
                <li>Gusan open studio (개인작업장, 일산)</li>
                <li>국립현대미술관의 찾아가는 미술관 -KAIST전(KAIST. 대전)</li>
                <li>2008람사르총회 기획초대전 -GREEN DMZ전 (창원컨벤션센터. 창원)</li>
                <li>제12회 동강현대미술작가 초대전 (영월문화예술회관)</li>
                <li>2009 아시아기초조형연합학회작품전 (제주대학교)</li>
                <li>미술과 놀이 - Art in Superstar - (예술의 전당, 서울)</li>
                <li>2009 일본기초조형학회아이즈국제작품전 (공립대학 법인 아이즈대학, 일본)</li>
                <li>서울디자인올림픽 - 자연의 꿈 - (서울시 중구 전시존 , 잠실종합운동장)</li>
                <li>I LOVE STAR 전 (강남구청, 서울)</li>
                <li>과학-미술 융합 특별전 (과천국립과학관)</li>
                <li>마이클잭슨 1주기 추모전 (홍대 상상마당)</li>
                <li>- Art in Superstar - (경남도립미술관)</li>
                <li>2010서울디자인한마당 (서울시 중구 전시존 , 잠실종합운동장)</li>
                <li>봄맞이 특별전 -나비의 꿈- (광주시립미술관)</li>
                <li>양평군립미술관 개관전 -마법의 나라, 양평-(양평군립미술관)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </figure>
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
  data() {
    return {
      tabs: [true, false],
      swiperOption: {
        slidesPerView: 1.5,
        spaceBetween : 10,
        centeredSlides: true,
        initialSlide: 1,
        loop: 1,
        autoplay : {
          delay : 3000,
          disableOnInteraction : false,
        },
      },
    };
  },
  methods: {
    changeTab(e) {
      document
        .querySelectorAll(".tabBlock-tab")
        .forEach((e) => e.classList.remove("is-active"));
      const id = e.target.id;
      e.target.classList.add("is-active");
      this.tabs = this.tabs.map(() => false);
      this.tabs[id] = true;
      console.log(e, "tab changing");
    }
  },
  mounted() {
    $(".tabBlock-tab").on("click",function(){
      $(this).addClass("button-click");
    });

    $(".tabBlock-tab").on("webkitAnimationEnd",function(){
        $(this).removeClass("button-click");
      });

    $('.tabBlock-tab').click( function(){
      if ( $(this).hasClass('on') ) {
        $(this).removeClass('on');
      } else {
        $('.tabBlock-tab').removeClass('on');
        $(this).addClass('on');    
      }
    });
  },
};
</script>
