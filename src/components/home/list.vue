<template>
    <!-- <div>
         <div class="index-category">
            <div class="category-item" v-for="(item,index) in lists" :key="index">
                <span class="iconfont" :class="item.icon" :style="{backgroundColor:item.color}"></span>
                <div>{{item.title}}</div>
            </div>
        </div>
    </div> -->
    <div class="home_n">
		<nav class="m_nav">
                <ul>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav0.png" alt="">
                            <span>京东超市</span>
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav1.png" alt="">
                            <span>全球购</span>
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav2.png" alt="">
                            <span>服装城</span>
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav3.png" alt="">
                            <span>京东生鲜</span>
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav4.png" alt="">
                            <span>京东到家</span>
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav5.png" alt="">
                            <span>充值中心</span>
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav6.png" alt="">
                            <span>惠赚钱</span>
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav7.png" alt="">
                            <span>领券</span>
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav8.png" alt="">
                            <span>物流查询</span>
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_item_link">
                            <img src="../../assets/images/nav9.png" alt="">
                            <span>我的关注</span>
                        </a>
                    </li>
                </ul>
            </nav>
	</div>
</template>

<script>
export default {
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
/* .index-category{
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
} */


/*导航*/

.m_nav {
    max-width: 100%;
    height: 150px;
}

.m_nav ul {
    width: 100%;
    padding-top: 16px;
}

.m_nav .nav_item {
    width: 20%;
    height: 69px;
    float: left;
    text-align: center;
}

.nav_item .nav_item_link {
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
}

.nav_item .nav_item_link img {
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
}

.nav_item .nav_item_link span {
    font-size: 12px;
}

</style>
