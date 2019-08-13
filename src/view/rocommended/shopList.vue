<template>
    <div class="shopList">
        <div class="box">
            <dl v-for="(item,ind) in shopList" :key="ind">
           <dt>
               <img v-lazy="item.imgUrl">
           </dt>
           <dd>
               <p>{{item.title}}</p> 
               <span>￥{{item.price}}</span>
                <button @click="addShop(item)">加入购车</button>
           </dd>
       </dl>
        </div>
    </div>
</template>

<script>
import Bscoll from 'better-scroll'
import { Indicator,Lazyload } from 'mint-ui';
export default {
        props:["shopList","_getrecommendedList","page"],
        data(){
            return {
                pages:this.page,
            }
        },
        watch:{
            shopList(){
                this.$nextTick(()=>{
                   this.bscroll= new Bscoll('.shopList')

                   this.bscroll.on('touchEnd',(pos)=>{
                    if(this.bscroll.maxScrollY>pos.y+50) {
                        this.pages+=6
                        if(this.page<19){
                             Indicator.open('loding...');
                                this._getrecommendedList({
                                page:this.pages,
                                num:6,
                                callback:()=>{
                                     Indicator.close();
                                }
                            })
                        }
                           
                    }
                   })
                })
            }
        },
        methods:{
            addShop(item){
                if(item.shop_count){
                    item.shop_count++
                }else{
                    item.shop_count=1
                }
               
                let {imgUrl,title,price,id,shop_count} = item
                this.axios.get(`/api/shopCar?shop_id=${id}&imgUrl=${imgUrl}&title=${title}&price=${price}&shop_count=${shop_count}` ).then(res=>{
                        console.log(res)
                })
            }
        }
}
</script>

<style scoped>
.shopList{
    width: 100%;
    height: 100%;
}
.box{
    width: 100%;
     display: flex;
    flex-wrap: wrap;
}
dl{
    width: 50%;
    height: 6.7rem;
}
dt img{
    width: 4.96rem;
    height: 4.96rem;
}
p{ 
    width: 165px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
}
button{
    background: orange;
    border: none;
}
span{
    color:red;
    margin: 18px 5px;
    display: inline-block;
}

</style>
