<template>
    <div class="index-box">
        <!-- 搜索栏 -->
       <search/>
       <!-- 导航栏 -->
       <banner/>
       <!-- 列表栏 -->
       <list/>
       <!-- 商品数据 -->
       <goods/>
    </div>
</template>
<script>
import banner from '../public/banner'
import list from './list'
import search from './search'
import goods from './goods'

export default {
    data(){
        return {

        }
    },
    components:{
        banner,
        list,
        search,
        goods
    }
}
</script>

<style>
@import '../../assets/css/index.css';
.index-box{
    background-color: #e0e0e0;
}
</style>
