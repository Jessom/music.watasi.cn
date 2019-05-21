<template>
  <div id="banner-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for='item in banners'
        :key='item.targetId'>
        <img
          :src="item.imageUrl" alt="">
        <span
          class="banner-tag"
          :class='item.titleColor'>{{ item.typeTitle }}</span>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div class="swiper-button-prev iconfont icon-left2" slot="button-prev"></div>
      <div class="swiper-button-next iconfont icon-right" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'banner',
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        // pagination: {
        //   el: '.swiper-pagination'
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },

  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },

  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/mixin.scss';
#banner-wrapper {
  padding: 10px 0;
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 50%;
    border-radius: 8px;
    background-color: #ccc;
    img {
      width: 100%;
      border-radius: 8px;
    }
    .banner-tag {
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 12px;
      color: #fff;
      padding: 2px 7px;
      border-radius: 3px 0 0 0;
      &.red {
        background: #dd4641;
      }
      &.blue {
        background: #549bd0;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    @include center;
    background: none;
    color: rgba(255, 255, 255, .8);
    font-size: 20px;
    height: 100%;
    top: 22px;
    opacity: 0;
    transition: opacity .3s;
  }
  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 1;
    }
  }
}
</style>
