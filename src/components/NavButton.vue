<template>
    <div class="footer">
        <footer class="fixBottomBox">
            <ul>
                <router-link tag="li" to="/home" class="tabItem">
                    <a href="javascript:;" class="tab-item-link">
                        <i class="iconfont icon-zhuye"></i>
                        <label>首页</label>
                    </a>
                </router-link> 
                <router-link tag="li" to="/category" class="tabItem">
                    <a href="javascript:;" class="tab-item-link">
                        <i class="iconfont icon-fenlei"></i>
                        <label>分类</label>
                    </a>
                </router-link>
                <router-link tag="li" to="/find" class="tabItem">
                    <a href="javascript:;" class="tab-item-link">
                        <i class="iconfont icon-gouwuche"></i>
                        <label for="">购物车</label>
                    </a>
                </router-link>
                <router-link tag="li" to="/cart" class="tabItem">
                    <a href="javascript:;" class="tab-item-link">
                        <i class="iconfont icon-wode2"></i>
                        <label for="">我的</label>
                    </a>
                </router-link>
            </ul>
        </footer>
  </div>
</template>

<style scoped>
    .active i,
    .active label {
        color: #f60;
    }

    .tab-item-link {
        display: flex;
        font-size: 14px;
        flex-direction: column;
        justify-content: center;
    }
</style>
