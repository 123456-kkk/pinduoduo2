<template>
    <div>
       <img :src="imgUrl" alt="">
       <p>{{title}}</p>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            imgUrl:this.$route.params.imgUrl,
            title:this.$route.params.title
        }
    },
    // computed:{
    //     ...mapState(['detailList'])
    // },
    // methods:{
    //     ...mapActions(['_getdetailList'])
    // },
    mounted(){
       console.log(this.$router)
    }
}
</script>

<style>

</style>
