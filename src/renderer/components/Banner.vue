<template>
  <div id="banner-wrapper">
    <swiper
      :options="swiperOption"
      v-lazy-container="{
        selector: 'img',
        error: 'http://music.watasi.cn/loading/banner.png',
        loading: 'http://music.watasi.cn/loading/banner.png'
      }">
      <swiper-slide
        v-for='(item, ind) in banners'
        :key='ind'>
        <img
          alt=""
          :data-src="item.imageUrl"
          data-loading="data:image/png;base64,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"
          data-error="data:image/png;base64,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">
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
  /* .swiper-inner {
    width: 100%;
    // height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  } */
  .swiper-slide {
    // background-position: center;
    // background-size: cover;
    width: 50%;
    border-radius: 8px;
    background-color: #ccc;
    overflow: hidden;
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
