<template>
  <div class="container-table-cart pos-relative features">
    <div id="btn_group">
      <button @click="goBack" type="button">BACK</button>
    </div> 
    <div class="area">
      <h1>장바구니</h1>
      <div class="f_top">
        <h2 class="tit txt_point_line">졸업 최소 이수학점</h2>
        <!-- <div class="f_pop">경고!</div> -->
      </div>
      <div class="area_bx_infor">
        <div class="col3 bx_infor">
          <div class="col">
            <span>졸업 최소 이수학점</span>
            <strong><b>130</b> 학점</strong>
          </div>
          <div class="col">
            <span>나의 장바구니 학점</span>
            <strong><b>{{ totalCartPrice }}</b> 학점</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="area wrap-table-shopping-cart">
      <h2 class="tit txt_point_line">나의 장바구니</h2>
        <template v-for="item in cartItems">
          <div class="bx_subject_item">
            <div class="bx_item_list">
              <div class="round"></div>
              <div class="bx_subject"  data-aos="fade-right" data-aos-duration="1000">
                <div class="subject_top">
                  <h3>{{ item.title }}</h3>
                  <button @click="decrease(item.id)">
                    삭제
                  </button>
                </div>
                <div class="area_subject_cont">
                  <p>{{ item.subtitle }}</p>
                  <ul class="subject_cont">
                    <li>{{ item.credit }}</li>
                    <li class="grades">{{ item.price }}학점</li>
                    <li>{{ item.grade }}학년</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="bx_subject_item type2">
          <div class="bx_item_list">
            <div class="round"></div>
            <div class="bx_subject">
              <router-link :to="{name: 'main'}">
                <span class="a_go"><p>남은 학점 담으러가기!</p></span>
              </router-link>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import AOS from 'aos';
import "aos/dist/aos.css";

  export default {
    created() {
        AOS.init();
    },
    computed: {
      ...mapState('cart', {
        cartItems: state => state.items
      }),
      ...mapGetters('cart', {
          totalCartPrice: 'totalPrice',
          totalCartQty: 'totalQty'
      })
    },
    methods: {
      delItem(id) {
        this.$store.dispatch('cart/delItem', id);
      },
      increase(id) {
        this.$store.dispatch('cart/increaseQty', id);
      },
      decrease(id) {
        this.$store.dispatch('cart/decreaseQty', id);
      },
      goBack(){
        this.$router.go(-1); [2]
      },
    }
  }
</script>