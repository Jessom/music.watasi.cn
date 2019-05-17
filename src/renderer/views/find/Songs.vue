<template>
  <div class="songs-container">
    <div class="banner">
      <img class="img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4259498833,3464883428&fm=26&gp=0.jpg" alt="">
      <div class="banner-info">
        <div class="btn">精品歌单</div>
        <div class="meta">
          <div class="title">『凉风青叶』天然呆、永远积极向上的思考的女孩</div>
          <p class="desc">穿着职场套装，因穿法错误让光误以为是学生制服。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'songs-find',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
$btnColor: #deab67;
.songs-container {
  .banner {
    @include horizontal(flex-start, true);
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
    background-image: linear-gradient(to right, #5c4f3d, #736b62 80%, #5c4f3d);
    .img {
      width: 110px;
      height: 110px;
    }
    .banner-info {
      padding-left: 10px;

      .btn {
        display: inline-block;
        padding: 5px 14px;
        font-size: 15px;
        color: $btnColor;
        border-radius: 31px;
        border: 1px solid $btnColor;
      }

      .meta {
        line-height: 1.5;
        margin-top: 8px;
      }
      .title {
        color: #fff;
        font-weight: bold;
      }
      .desc {
        margin: 0;
        color: rgba(255,255,255,.8);
        font-size: 13px;
      }
    }
  }
}
</style>
