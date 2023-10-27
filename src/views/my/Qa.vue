<template>
  <figure class="tabBlock qa">
    <div id="btn_group">
      <button @click="goBack" type="button">BACK</button>
    </div>
    <div class="inner">
      <h1>자주 묻는 질문</h1>
      <div class="area">
        <div class="bx_fold">
          <div class="fold_top" @click="dropIt">
            <div class="sign">Q</div>
            <h2>수강신청은 어떻게 하나요?</h2>
          </div>
          <transition name="slide">
            <div class="fold_content" v-if="isDropped">
              <div class="sign">A</div>
              <p>한성대학교 홈페이지에서 수강신청 일정을 확인하시고, 장바구니를 활용하셔서 신청하시면 됩니다.</p>
            </div>
          </transition>
        </div>
        <div class="bx_fold">
          <div class="fold_top" @click="dropIt2">
            <div class="sign">Q</div>
            <h2>집중이수제는 무엇이며 어떻게 진행되나요?</h2>
          </div>
          <transition name="slide">
            <div class="fold_content" v-if="isDropped2">
              <div class="sign">A</div>
              <p>학과 및 교과목 특성을 고려하여 15주 교육과정을 8주 집중강의를 통해 단기간에 교과목을 이수할 수 있는 제도입니다.
              한 학기 내에 상반기, 하반기 교과목으로 나뉘어있으므로 수강신청에 유의바랍니다.
              </p>
            </div>
          </transition>
        </div>
        <div class="bx_fold">
          <div class="fold_top" @click="dropIt3">
            <div class="sign">Q</div>
            <h2>전과, 복수전공, 부전공이 가능한가요?</h2>
          </div>
          <transition name="slide">
            <div class="fold_content" v-if="isDropped3">
              <div class="sign">A</div>
              <p>미래플러스대학의 학과에 한해서 전과, 복수전공, 부전공이 가능합니다.
                단, 전과의 경우 재학 중 1회에 한하며 희망하는 학과에 전과 정원이 있을 경우에 가능합니다.
                일정은 학사일정과 학사공지를 참고바랍니다.</p>
            </div>
          </transition>
        </div>
        <div class="bx_fold">
          <div class="fold_top" @click="dropIt4">
            <div class="sign">Q</div>
            <h2>조기졸업이 가능한가요?</h2>
          </div>
          <transition name="slide">
            <div class="fold_content" v-if="isDropped4">
              <div class="sign">A</div>
              <p>신입학한 자로 6학기 또는 7학기만에 4학년 전과정을 이수하고 전체 성적 총 평점평균이 4.0이상이며, 수강 과목 성적 중 과락(F학점)이 없는 학생으로서 졸업사정 기준을 충족한 학생은 조기졸업을 할 수 있습니다.</p>
            </div>
          </transition>
        </div>
        <div class="bx_fold">
          <div class="fold_top" @click="dropIt5">
            <div class="sign">Q</div>
            <h2>졸업시 학위 명칭은 어떻게 되나요?</h2>
          </div>
          <transition name="slide">
            <div class="fold_content" v-if="isDropped5">
              <div class="sign">A</div>
              <p>ICT융합디자인학과 : 디자인학사</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    isDropped: false,
    isDropped2: false,
    isDropped3: false,
    isDropped4: false,
    isDropped5: false,
  }),
  methods: {
    dropIt() {
      this.isDropped = !this.isDropped
    },
    dropIt2() {
      this.isDropped2 = !this.isDropped2
    },
    dropIt3() {
      this.isDropped3 = !this.isDropped3
    },
    dropIt4() {
      this.isDropped4 = !this.isDropped4
    },
    dropIt5() {
      this.isDropped5 = !this.isDropped5
    },
    goBack(){
        this.$router.go(-1); [2]
    },
  }
}


</script>