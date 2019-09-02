<template>
<!--    <swiper :options="swiperOption" ref="mySwiper">-->
<!--        &lt;!&ndash; slides &ndash;&gt;-->
<!--        saljfdlasjk-->
<!--        <swiper-slide>I'm Slide 1</swiper-slide>-->
<!--        <swiper-slide>I'm Slide 2</swiper-slide>-->
<!--        <swiper-slide>I'm Slide 3</swiper-slide>-->
<!--        <swiper-slide>I'm Slide 4</swiper-slide>-->
<!--        <swiper-slide>I'm Slide 5</swiper-slide>-->
<!--        <swiper-slide>I'm Slide 6</swiper-slide>-->
<!--        <swiper-slide>I'm Slide 7</swiper-slide>-->
<!--        &lt;!&ndash; Optional controls &ndash;&gt;-->
<!--        <template #pagination>-->
<!--            <div class="swiper-pagination"></div>-->
<!--        </template>-->
<!--    </swiper>-->
    <div>
        这里是填充safd
        <router-link to="http://www.baidu.com">百度</router-link>
    </div>

</template>

<script>

  export default {
    name: 'Index',
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: true,
          speed: 1000
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>
