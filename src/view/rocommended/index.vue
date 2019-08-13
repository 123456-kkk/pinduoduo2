<template>
    <div class="wrap">
        <div class="main" ref="main">
            <shopList :shopList="recommendedList" :_getrecommendedList="_getrecommendedList" :page="page"></shopList>
            <div class="top" :style="{display:isShow?'block':'none'}" @click="Click">TOP</div>
      </div> 
       <Footer></Footer>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import { Indicator } from 'mint-ui';

import shopList from './shopList'
export default {
    data(){
        return{
              isShow:false,
              page:0
        }
    },
    computed:{
        ...mapState(['recommendedList'])
    },
    methods:{
        ...mapActions(['_getrecommendedList']),
        Scroll(e){
   
      if(e.target.scrollTop>300){
        this.isShow=true
      }else{
        this.isShow=false
      }
    },
    Click(){
       this.$refs.main.scrollTop=0
    }
    },
    mounted(){
      Indicator.open('loding...');
        this._getrecommendedList({
          page:this.page,
          num:6,
          callback:()=>{
            Indicator.close();
          }
        })
         this.$refs.main.addEventListener('scroll',this.Scroll,false)
    },
    components:{
      shopList
    }
}
</script>

<style>

</style>
