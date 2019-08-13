<template>
    <div>
      <input type="text" v-model="tel" placeholder="手机号">
      <input type="text" v-model="yzm" placeholder="验证码"><button>发送验证码</button>
      <button @click="save">登陆</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tel:'',
            yzm:''
        }
    },
    methods:{
        save(){
            let data={
                tel:this.tel,
                yzm:this.yzm
            }
            let arr=[]
            arr.push(data)
            if(this.tel===""&&this.yzm===""){
                alert('不能为空')
            }else{
                localStorage.setItem('user',JSON.stringify(arr))
            }
            if(localStorage.getItem('user')){
                 this.$router.push('/chat')
            }
        }
    },
   
}
</script>

<style>

</style>
