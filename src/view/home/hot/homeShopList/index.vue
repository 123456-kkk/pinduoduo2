<template>
     <div class="Shoplist">
        <Item :item="homeShopList"></Item>
    </div>
</template>

<script>
import Item from './item'
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['homeShopList'])
    },
    methods:{
        ...mapActions(["_getShopListData"])
    },
    mounted(){
        this._getShopListData()
    },
    components:{
        Item
    }
}
</script>

<style>

</style>
