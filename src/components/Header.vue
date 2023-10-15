<template>
  <header class="cart">
    <div class="bar">
      <router-link :to="{name: 'main'}">
        <div class="icon active">
          <svg class="home" xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 512 512">
              <path class="roof" d="M506.555 208.064L263.859 30.367a13.3 13.3 0 00-15.716 0L5.445 208.064c-5.928 4.341-7.216 12.665-2.875 18.593s12.666 7.214 18.593 2.875L256 57.588l234.837 171.943a13.236 13.236 0 007.848 2.57c4.096 0 8.138-1.885 10.744-5.445 4.342-5.927 3.054-14.251-2.874-18.592z" />
              <path d="M442.246 232.543c-7.346 0-13.303 5.956-13.303 13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52s-66.52 29.842-66.52 66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303 5.956-13.303 13.303V470.9c0 7.347 5.957 13.303 13.303 13.303h133.029c6.996 0 12.721-5.405 13.251-12.267.032-.311.052-.651.052-1.036V342.01c0-22.009 17.905-39.914 39.914-39.914s39.914 17.906 39.914 39.914V470.9c0 .383.02.717.052 1.024.524 6.867 6.251 12.279 13.251 12.279h133.029c7.347 0 13.303-5.956 13.303-13.303V245.847c-.001-7.348-5.957-13.304-13.304-13.304z" />
          </svg>
        </div>
      </router-link>
      <router-link :to="{name: 'introduct'}">
        <div class="icon">
          <svg class="msg"></svg>
        </div>
      </router-link>
        <div class="icon button">
          <div class="header-icons-mobile">
            <div class="header-wrapicon2">
              <img class="header-icon1 js-show-header-dropdown">
              <span class="header-icons-noti">{{ totalCartQty }}</span>
                <div class="header-cart header-dropdown">
                  <ul class="header-cart-wrapitem">
                    <template v-for="product in cartItems">
                      <li class="header-cart-item">
                        <div class="header-cart-item-txt">
                          <router-link to="/" class="header-cart-item-name">
                            {{ product.title }}
                          </router-link>
                          <span class="header-cart-item-info">
                            {{ product.price }} 학점
                          </span>
                        </div>
                      </li>
                    </template>
                  </ul>
                  <div class="header-cart-total">
                      130학점중 {{ totalCartPrice }} 를 채우셨어요!
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="icon">
            <svg class="bell" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M466.768 380.91c-2.034-10.857-12.484-18.009-23.342-15.974-10.856 2.035-18.009 12.485-15.975 23.341 1.51 8.055-2.031 13.795-4.275 16.5-2.239 2.697-7.215 7.223-15.38 7.223H104.204c-8.165 0-13.141-4.525-15.38-7.223-2.244-2.705-5.785-8.445-4.275-16.5 5.673-30.272 17.056-50.183 28.064-69.439 13.369-23.384 27.193-47.565 27.193-84.839v-30c0-63.067 51.263-115.072 114.302-115.987h3.781c62.826.913 113.918 52.918 113.918 115.988v30c0 31.723 10.377 53.552 20.104 71.523 3.62 6.688 10.5 10.484 17.606 10.484 3.215 0 6.477-.777 9.502-2.415 9.715-5.257 13.327-17.395 8.069-27.108-9.678-17.882-15.281-32.203-15.281-52.484v-30c0-41.161-15.943-80.037-44.894-109.466-24.81-25.221-56.667-40.96-91.106-45.304V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v29.289c-76.458 9.92-136 75.892-136 154.711v30c0 26.647-9.673 43.566-21.919 64.986-12.064 21.104-25.739 45.023-32.655 81.924-3.301 17.616 1.369 35.626 12.813 49.414C69.479 444.1 86.304 452 104.204 452h91.989c0 33.084 26.916 60 60 60s60-26.916 60-60h91.603c17.9 0 34.725-7.9 46.158-21.676 11.444-13.787 16.114-31.798 12.814-49.414zM256.193 472c-11.028 0-20-8.972-20-20h40c0 11.028-8.971 20-20 20z" />
            </svg>
        </div>
        <div class="icon">
            <svg class="user" xmlns="http://www.w3.org/2000/svg" viewBox="0 -50 512 512">
                <path d="M256.661,257.323c-135.275,0-245.333,110.059-245.333,245.333c0,5.888,4.779,10.667,10.667,10.667
      s10.667-4.779,10.667-10.667c0-123.52,100.48-224,224-224s224,100.48,224,224c0,5.888,4.779,10.667,10.667,10.667
      c5.888,0,10.667-4.779,10.667-10.667C501.995,367.36,391.936,257.323,256.661,257.323z" />

                <path class="head" d="M256.661,0c-64.683,0-117.333,52.629-117.333,117.333s52.651,117.333,117.333,117.333s117.333-52.629,117.333-117.333
      S321.344,0,256.661,0z M256.661,213.333c-52.928,0-96-43.072-96-96s43.072-96,96-96c52.928,0,96,43.072,96,96
      S309.589,213.333,256.661,213.333z" />
            </svg>
        </div>
    </div>


  </header>
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
    }),
  },
  mounted() {
    'use strict'
    ;(function () {
        let icons = document.querySelectorAll('.icon')
        icons.forEach((icon) => {
            icon.addEventListener('click', clickIcon)
        })

        function clickIcon() {
            if ([...this.classList].indexOf('active') !== -1) {
                this.classList.remove('active')
            } else {
                icons.forEach((icon) => icon.classList.remove('active'))
                this.classList.add('active')
            }
        }
    })()
  },
};
</script>