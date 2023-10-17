<template>
  <div class="container-table-cart pos-relative features">
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
    <div class="area wrap-table-shopping-cart bgwhite">
      <h2 class="tit txt_point_line">나의 장바구니</h2>
      <table class="table-shopping-cart">
        <tr class="table-head">
          <th class="b-radi-left">강의명</th>
          <th>학점</th>
          <th class="b-radi-right">학년</th>
        </tr>
        <template v-for="item in cartItems">
          <tr class="table-row">
            <td class="tit">
              <span>{{ item.title }}</span>
              <button @click="decrease(item.id)">
                <i class="fs-12 fa fa-minus" aria-hidden="true"></i>
              </button>
            </td>
            <td>{{ item.price }}학점</td>
            <td>{{ item.grade }}학년</td>
            
          </tr>
        </template>
        <tr class="plus">
          <td colspan="4">
            <div class="table_cont">
              <router-link :to="{name: 'main'}">
                <span>남은 학점 담으러가기!</span>
              </router-link>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
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
      }
    }
  }
</script>