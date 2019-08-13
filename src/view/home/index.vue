<template>
    <div class="wrap">
        <ly-tab
            v-model="selectedId"
            :items="items"
            @change="change"
            :options="options">
        </ly-tab>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
    name:'hom',
     data () {
    return {
      selectedId: 0,
      items: [
        {label: '热门'},
        {label: '女装'},
        {label: '百货'},
        {label: '母婴'},
        {label: '手机'},
        {label: '鞋包'},
        {label: '电器'},
        {label: '食品'},
        {label: '美妆'}
      ],
      options: {
        activeColor: 'red'
      },
      path:["/home/hot","/home/clothing"]
    }
  },
  methods:{
    change(item,index){
      this.$router.replace(this.path[index])
    }
  },
    mounted(){
      switch(this.$route.path){
        case '/home/hot':
        this.selectedId=0
        break;
        case '/home/clothing':
        this.selectedId=1
        break;
      }
    }
}
</script>

<style>

</style>
