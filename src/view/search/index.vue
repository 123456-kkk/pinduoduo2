<template>
  <div class="wrap">
    <header class="header">
      <div @click="isShow">
        <span>气质上衣女</span>
      </div>
    </header>
    <div class="dialog" :style="{display:isShows?'block':'none'}">
      <div class="ipt">
        <input type="text" placeholder="男休闲鞋" v-model="searchVal">
        <span @click="del">取消</span>
      </div>
      <div v-if="search.length" class="arr">
          <p v-for="(el,ind) in search" :key="ind" @click="btnAdd(el.name)">
            {{el.name}}
          </p>

      </div>
      <div v-if="newData.length">
        <p v-for="(item,ind) in newData" :key="ind">
          {{item}}
        </p>
     <button @click="addDel">删除</button>
      </div>
    
    </div>
    <div class="main">
      <div class="list">
        <div class="list-left">
          <ul>
            <li
              v-for="(item,ind) in searchList"
              :key="ind"
              :class="{active:ind==selectIndex}"
              ref="lis"
              @click="leftscroll(ind)"
            >{{item.name}}</li>
          </ul>
        </div>
        <div class="list-right">
          <ul class="biglist" ref="list">
            <li class="list-item" v-for="(item,ind) in searchList" :key="ind">
              <div class="head">
                <h3>{{item.name}}</h3>
                <span>查看更多</span>
              </div>
              <ul class="smalllist">
                <li v-for="(v,k) in item.items" :key="k">
                  <img :src="v.icon" />
                  <p>{{v.title}}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapActions,mapMutations } from "vuex";
export default {
  data() {
    return {
      scrollTop: [],
      scrollHeight: 0,
      isShows:false,
      searchVal:''
    };
  },
  computed: {
    ...mapState(["searchList","search","newData"]),
    selectIndex() {
      return this.scrollTop.findIndex((item, index) => {
        this.left_right(index)
        return (
          this.scrollHeight >= item &&
          this.scrollHeight < this.scrollTop[index + 1]
        );
      });
    }
  },
  methods: {
    ...mapActions(["_getsearchList","_getsearchdata"]),
    ...mapMutations(['toLalval']),
    left() {
      this.leftScroll = new BScroll(".list-left");
    },
    right() {
      this.rightScroll = new BScroll(".list-right", {
        click: true,
        probeType: 2
      });
    },
    left_right(index) {
      let el = this.$refs.lis[index];
      this.leftScroll.scrollToElement(el, 300, 0, -500);
    },
    leftscroll(ind) {
      this.rightScroll.scrollTo(0, -this.scrollTop[ind]);
    },
    isShow(){
      this.isShows=true
    },
    del(){
      this.isShows=false
    },
    btnAdd(item){
      this.toLalval(item)
    },
    addDel(){
      localStorage.removeItem('lakVal')
    }
  },

  watch: {
    searchList() {
      this.$nextTick(() => {
        let start = 0;
        let arr = [];
        arr.push(start);
        let lists = Array.from(
          this.$refs.list.getElementsByClassName("list-item")
        );

        lists.forEach((item, index) => {
          start += item.clientHeight;
          arr.push(start);
        });
        this.scrollTop = arr;
        this.rightScroll.on("scroll", pos => {
          this.scrollHeight = Math.abs(pos.y);
        });
      });
    },
    searchVal(){
      if(this.searchVal!=''){
        this._getsearchdata(this.searchVal)
      }else{
        this._getsearchdata('45562kdjfhghfuiodpdofijhb')
      }
      
    }
  },
  mounted() {
    this._getsearchList();
    this.left();
    this.right();
    this.leftscroll()
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 1.3333rem;
  padding: 10px 0 0 0;
  border-bottom: 1px solid #f4f4f4;
}
.dialog{
  position: absolute;top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 999;
}
.arr{
  position: absolute;top: 1.33333rem;
  left: 0;
  background: red;
}
.ipt{
  width: 100%;
  height: 1.3333333rem;
  display: flex;

}

.ipt span{
  font-size: 15px;
  width: 20%;height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ipt input {
  width: 70%;
  height:66%;
  margin: 9px;
  border:none;
  background:#f4f4f4;
  border-radius: 5px;
  padding-left: 20px;
  
}
.header div {
  width: 90%;
  height: 70%;
  background: #ededed;
  border: none;
  border-radius: 0.08rem;
  margin-left: 10px;
  text-align: center;
  line-height: 34.9px;
  color: #9c9c9c;
  font-size: 15px;
}
.list {
  width: 100%;
  height: 100%;
  /* background: red; */
  display: flex;
}
.list-left {
  width: 25%;
  height: 100%;
  overflow: hidden;
}

.list-left ul {
  width: 100%;
}
.list-left ul li {
  width: 100%;
  height: 53px;
  text-align: center;
  line-height: 53px;
  background: #fafafa;
  position: relative;
}
.list-left ul .active {
  background: #fff;
  border-left: 1px solid #e02e24;
}

.list-right {
  width: 75%;
  overflow: hidden;
}
.list-right::-webkit-scrollbar {
  display: none;
}
.list-right .biglist {
  width: 100%;
}
.list-right .biglist .head {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-right .biglist .smalllist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.list-right .biglist .smalllist li {
  width: 87px;
  height: 75px;
  text-align: center;
}
.list-right .biglist .smalllist img {
  width: 56px;
  height: 56px;
}
.list-item {
  padding: 10px;
}
</style>
