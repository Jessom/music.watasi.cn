<template>
  <div id="banner-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="http://p1.music.126.net/HXeBq6cOabZ_fTBuCd80BQ==/109951164072233614.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://p1.music.126.net/L8V3uVejBPq0-sayNgDMYA==/109951164072238305.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://p1.music.126.net/yYt2NIFerGKv1NIgsd8isA==/109951164072244366.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://p1.music.126.net/XbN-tSPIaf2JcX96ws0hvQ==/109951164072268283.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://p1.music.126.net/fygLzHckcOJ_jt36hLcBfw==/109951164071196452.jpg" alt="">
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
