<template>
    <div>
         <div class="index-category">
            <div class="category-item" v-for="(item) in lists" :key="item">
                <span class="iconfont" :class="item.icon" :style="{backgroundColor:item.color}"></span>
                <div>{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TestB',
  data () {
    return {
      lists: [
        {title: '在线咨询', icon: 'icon-jine', color: '#f95730'},
        {title: '产品介绍', icon: 'icon-jieshao', color: '#fa69b9'},
        {title: '活动动态', icon: 'icon-xianshiqianggou', color: '#49dacf'},
        {title: '限时抢购', icon: 'icon-dongtai', color: '#908cfd'},
        {title: '活动动态', icon: 'icon-zaixianzixun', color: '#92d85c'},
        {title: '限时抢购', icon: 'icon-huodong', color: '#ecbe35'}]
    }
  }
}
</script>

<style scoped>
.index-category{
    margin-top: 10px;
}
.index-category .category-item{
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    padding: 0 10%;
    float:left;
}
.index-category .category-item div{
    margin:20px 0;
    color: #999;
}
.index-category .category-item .iconfont {
    font-size: 40px;
    display:inline-block;
    padding: 10%;
    border-radius: 50%;
    color:#fff;
    border: 3px solid #f9f9f9;
    box-shadow: 0px 0px 6px rgba(0,0,0,.5);
}
</style>
