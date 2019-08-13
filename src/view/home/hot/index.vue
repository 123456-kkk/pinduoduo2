<template>
  <div class="main">
    <Swiper></Swiper>
    <Icons></Icons>
    <ShopList></ShopList>
    <div class="top" :style="{display:isShow?'block':'none'}" @click="Click">TOP</div>
  </div>
</template>

<script>
import Swiper from './swiper'
import Icons from './icons'
import ShopList from './homeShopList'
export default {
  name:'hom',
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    Scroll(e){
   
      if(e.target.scrollTop>300){
        this.isShow=true
      }else{
        this.isShow=false
      } 
    },
    Click(){
       this.$el.scrollTop=0
    }
  },
  mounted(){
    this.$el.addEventListener('scroll',this.Scroll,false)
  },
components:{
  Swiper,Icons,ShopList
}
}
</script>

<style>
.top{
  width: 30px;
  height: 30px;
  background: red;
  border-radius: 50%;
  position: fixed;
  bottom:80px;
  right:37px;
  text-align: center;
  line-height:30px;
  border: 1px solid #ccc;
  display: none;
  font-size: 12px;
}
</style>
