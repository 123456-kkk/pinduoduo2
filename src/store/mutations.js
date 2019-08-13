import {GET_SHOPCARLIST_DATA,GET_SWIPER_DATA,GET_ICON_DATA,GET_SHOPLIST_DATA,GET_RECOMMENDED_DATA,GET_SEARCHLIST_DATA,GET_CHATLIST_DATA,GET_DETAILLIST_DATA,GET_SEARCHT_DATA} from './mutations-type'
if(!localStorage.getItem('lakVal')){
    localStorage.setItem('lakVal','[]')
}
export default {
   [GET_SWIPER_DATA](state,res){
        state.swiperList=res
    },
    [GET_ICON_DATA](state,res){
        state.iconList=res
    },
    [GET_SHOPLIST_DATA](state,res){
        state.homeShopList=res
    },
    [GET_RECOMMENDED_DATA](state,res){
        state.recommendedList=state.recommendedList.concat(res)
    },
    [GET_SEARCHLIST_DATA](state,res){
        state.searchList=res
    },
    [GET_CHATLIST_DATA](state,res){
        state.chatList=res
    },
    [GET_DETAILLIST_DATA](state,res){
        state.detailList=res
    },
    [GET_SEARCHT_DATA](state,res){
        state.search=res
    },
    toLalval(state,res){
        let arr=JSON.parse(localStorage.getItem('lakVal'))
        arr.push(res)
        let newArr=new Set(arr)
        localStorage.setItem('lakVal',JSON.stringify(newArr))
    },
    [GET_SHOPCARLIST_DATA](state,res){
        state.shopCarList=res
    },
    add(state,data){
        data.shop_count++
    },
    rudec(state,data){
        if(data.shop_count<1){
            state.shopCarList.splice(state.shopCarList.indexOf(data),1)
        }else{
            data.shop_count--
        }
       
    }
    
}