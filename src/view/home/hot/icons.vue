<template>
<div class="box">
    <div class="icons">
        <div class="center">
         <div class="item" v-for="item in iconList" :key='item.id'>
             <img :src="item.imgUrl" alt="">
             <p>{{item.title}}</p>
        </div>
        <div class="bottom-box">
            <div class="middle-box" :style="{width:middleWidth+'rem',left:middleLeft/37.5+'rem'}">

            </div>
        </div>
        </div>
       </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            //底下的大盒子宽
            bottomWith:100,
            //上边的大盒子宽
            centerWidth:750,
            //底下的小盒子宽
            middleWidth:0,
            //开始按下的的位置
            startX:0,
            //移动的距离
            middleLeft:0,
            //记录移动的距离
            endX:0
        }
    },
    computed:{
      ...mapState(["iconList"]),
    },
    methods:{
        
        ...mapActions(["_getIconData"]),
        touchStart(e){
          this.startX=e.touches[0].clientX
        },
        touchMove(e){
            let pageX=e.touches[0].clientX-this.startX
            this.middleLeft=(-(this.bottomWith/this.centerWidth * pageX-this.endX))
            if(this.middleLeft<0){
                this.middleLeft=0
            }else if(this.middleLeft > this.bottomWith-50){
                this.middleLeft=this.bottomWith-50
            }
        },
        touchEnd(e){
            this.endX=this.middleLeft
            
        },
        getMarkWidth(){
            this.middleWidth=(this.$el.offsetWidth/this.centerWidth*this.bottomWith)/37.5
        }
    },
    mounted(){
        this._getIconData() 
       this.getMarkWidth()
       this.$el.addEventListener("touchstart", this.touchStart,false);
       this.$el.addEventListener("touchmove",this.touchMove,false);
       this.$el.addEventListener("touchend", this.touchEnd,false);
    }
}
</script>

<style>
.icons{
    width: 100%;
    height: 4.1333333rem;
    overflow-x:scroll;
    margin-top: 18px;   
   
}
.icons::-webkit-scrollbar{
    display: none;
}
.center{
    width: 178%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
     
}
.box{
    position: relative;
}
.item{
    width: 73px;
    height: 60px;
    text-align: center;
}
.item img{
    width: 39px;
    height: 39px;
}
.item p{
    font-size: 13px;
}
.bottom-box{
    width: 2.666666rem;
    height:3px;
     position: absolute;
    background: #ccc;
    left: 50%;
     bottom: 10px;
    margin-left: -1.333333rem;
}
.middle-box{
    width: 10px;
    height: 100%;
    background: red;
   position: absolute;
    
}
</style>
