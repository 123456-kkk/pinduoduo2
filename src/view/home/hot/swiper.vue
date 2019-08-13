<template>
    <div class="contains">
        <swiper :options="swiperOption" >
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper> 
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data() {
      return {
        swiperOption: {
         pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    computed:{
         ...mapState(["swiperList"])
    },
    methods:{
      ...mapActions(["_getSwiperData"])
    },
    mounted(){
       this._getSwiperData()
    }
}
</script>

<style scoped lang="stylus">
.contains >>> .swiper-container{
    width: 100%;
    height: 3.733333rem;
}
img{
  width 100%;
  height 100%
}
 .swiper-container >>> .swiper-pagination-bullet-active{
    background red!important;
   
}
 .swiper-container >>> .swiper-pagination-bullet{
    width 5px;
    height 5px;
    background #ffffff
}
 .swiper-container >>>.swiper-pagination{
   margin-left 100 px
 }
</style>
