import {GET_SHOPCARLIST_DATA,GET_SEARCHT_DATA,GET_SWIPER_DATA,GET_ICON_DATA,GET_SHOPLIST_DATA,GET_RECOMMENDED_DATA,GET_SEARCHLIST_DATA,GET_CHATLIST_DATA,GET_DETAILLIST_DATA} from './mutations-type'
import axios from 'axios'
export default {
    _getSwiperData({commit}){
        axios.get('/api/swiper').then(res=>{
            commit(GET_SWIPER_DATA,res.data.results)
        })
        
    },
    _getIconData({commit}){
        axios.get('/api/icon').then(res=>{
            commit(GET_ICON_DATA,res.data.results)
        })
        
    },
    _getShopListData({commit}){
        axios.get('/api/homeShopList').then(res=>{
            commit(GET_SHOPLIST_DATA,res.data.results) 
        })
    },
    _getrecommendedList({commit},obj){ 
       
            setTimeout(()=>{
                axios.get(`/api/recommendedList?page=${obj.page}&num=${obj.num}`).then(res=>{
                    commit(GET_RECOMMENDED_DATA,res.data.results)
                })
                obj.callback()
            },1000)
      
            
    
    },
    _getsearchList({commit}){
        axios.get('/api/searchList').then(res=>{
            commit(GET_SEARCHLIST_DATA,res.data.searchList.data)
        })
        
    },
    _getchatList({commit}){
        axios.get('/api/chatList').then(res=>{
            commit(GET_CHATLIST_DATA,res.data.results)
        })
        
    },
    _getsearchdata({commit},cName){
        axios.get(`/api/search?q=${cName}`).then(res=>{
            commit(GET_SEARCHT_DATA,res.data.results)
        })
        
    },
    _getshopCarListdata({commit}){
        axios.get(`/api/shopCarData`).then(res=>{
            commit(GET_SHOPCARLIST_DATA,res.data.results)
        })
        
    },
    _getdetailList({commit}){
        commit(GET_DETAILLIST_DATA,id)
    },
    checkedAll({commit},obj){
        if(obj.bool){
            commit('add',obj.item)
        }else{
            commit('rudec',obj.item)
        }
    }

}