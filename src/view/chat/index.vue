<template>
  <div class="wrap">
    <div class="main" ref="main">
     
      <div class="shop-list">
        <input type="checkbox" :checked="checkAll" @click="ClickAll" />
        全选
        总价：{{total}}
        <div class="shop-item" v-for="(item,ind) in shopCarList" :key="ind">
             <mt-cell-swipe
        :right="[ {
      content: '删除',
      style: { background: 'red', color: '#fff' },
      handler: () =>delcellswipe(ind)
          }]">
            <p>
            <input type="checkbox" :checked="radio"  @click="radios(item)"/> 单选
          </p>
          <img :src="item.imgUrl" alt />
          <p>{{item.title}}</p>
          <p>{{item.price}}</p>
          <button @click="change(item,false)">-</button>
          <input type="text" :value="item.shop_count"  class="count">
          <button @click="change(item,true)">+</button>
          
          
          </mt-cell-swipe>
        
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { CellSwipe } from "mint-ui";
export default {
  data() {
    return {
      checkAll: false,
      total: 0,
      radio:false
    };
  },
  computed: {
    ...mapState(["shopCarList"])
  },
  methods: {
    ...mapActions(["_getshopCarListdata", "checkedAll"]),
    ClickAll() {
      this.checkAll = !this.checkAll;
      this.shopCarList.forEach(item=>{
            item.checked = this.checkAll
            if(!item.checked){
                this.radio=false
            }else{
                this.radio=true
            }
        })
      this.commone()
    },
    change(item, bool) {
      this.checkedAll({ item, bool });
      this.commone()
    },
    delcellswipe(ind){
        this.shopCarList.splice(ind,1)
         this.commone()
    },
    radios(item){
       

             if(item.checked){
                this.$set(item,'checked',false)
             }else{
                this.$set(item,'checked',true)
             }
              this.commone()
       let isarr= this.shopCarList.every(item=>{
            return item.checked
        })
        if(isarr){
            this.checkAll=true
        }else{
            this.checkAll=false
        }
        //  this.radio=isarr
       
    },
    commone(){
        let total=0
        this.shopCarList.forEach(item=>{
            if(item.checked){
                total+=item.price*item.shop_count
            }           
        })
        this.total=total.toFixed(2)
    }
  },
  mounted() {
    this._getshopCarListdata();
  },
  components: {}
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
.count{
    width:50px;
    height: 20px;
}
</style>
