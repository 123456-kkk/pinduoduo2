<template>
    <div class="footer">
        <ul>
            <li @click="$router.push('/home')">
            <i class="iconfont icon-shouye" :class="$route.path.includes('/home')?'active':''"></i>
            <span :class="$route.path.includes('/home')?'active':''">首页</span>
            </li>  
            <li @click="$router.push('/rocommended')">
            <i class="iconfont icon-dingdanliebiao" :class="$route.path==='/rocommended'?'active':''"></i>
            <span :class="$route.path==='/rocommended'?'active':''">推荐</span>
            </li>
              <li @click="$router.push('/search')">
             <i class="iconfont icon-fangdajing" :class="$route.path==='/search'?'active':''"></i>
            <span :class="$route.path==='/search'?'active':''">搜索</span>
            </li>
              <li @click="$router.push('/chat')">
            <i class="iconfont icon-iconfontgengduo" :class="$route.path==='/chat'?'active':''"></i>
            <span :class="$route.path==='/chat'?'active':''">聊天</span>
            </li>
              <li @click="$router.push('/my')">
            <i class="iconfont icon-My" :class="$route.path==='/my'?'active':''"></i>
            <span :class="$route.path==='/my'?'active':''"> 我的</span>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 1.333333rem;
}
ul{
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 15px;
   align-items: center;
}
ul li{
    flex: 1;
   display: flex;
   justify-content: center;
   flex-direction: column;
}
i,span{
    text-align: center;
    margin-top: 7px;
}
.active{
    color:red
}

</style>
