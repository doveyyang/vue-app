<template>
    <div class="goods-box">
        <div class="goods-title">
            <img src="../../assets/images/jd_skill.png" alt="">
            <span  class="cycle">六点场</span>
            <span class="data-box">00:21:43</span>
        </div>
        <div class="best-goods">
            <div>
                <div class="item" v-for="(item,index) in bestList" :key="index" @click="gotoDetail(item.product_id)">
                    <img v-lazy="item.product_img_url" alt="">
                    <p class="price">￥{{item.product_uprice}}</p>
                    <div class="upprice">￥{{item.product_price}}</div>
                </div>
            </div>
        </div>
        <p class="g-title">为你推荐</p>
        <div class="goods-collection">
            <div class="goods-item" v-for="(item,index) in productList" :key="index" @click="gotoDetail(item.product_id)">
                <img v-lazy="item.product_img_url" alt="">
                <div class="desc">{{item.product_name}}</div>
                <div class="price">￥{{item.product_uprice}}</div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    data () {    
        return {
            bestList:[],
            productList:[],
        }
    },
    methods:{
        gotoDetail(id){
            this.$router.push("/detail/"+id)
        },
        getData(){
            this.$http.get('/home')
            .then(res=>{
                if(res.status == 200){
                    this.productList = res.data;
                    this.bestList = this.productList.slice(0,4)
                }
            }).catch(error=>console.log(error))
        }
    },
    mounted(){
        this.getData();
    }
}
</script>

<style scoped>
.goods-box{
    /* margin:4px; */
    padding: 2px;
}
.goods-box .goods-title{
    /* margin-bottom: 4px; */

    box-shadow: 0 0 1px 1px #e0e0e0;
    border-bottom: 1px solid #ccc;
}

.goods-box .goods-title img{
    
        width:60px;
        /* height: 40px; */
        vertical-align: middle;
}
.goods-box .goods-title .cycle{
    font-weight: 700;

}
.goods-box .goods-title .data-box{
    color: #aaa;    
}
.best-goods{
    /* margin: 5px; */
    height: 120px;
    width: 100%;
    /* border: 1px solid red; */
    background-color: #fff;
    
}
.best-goods .item{
    width: 20%;
    /* border: 1px solid blue; */
    box-sizing: border-box;
    float: left;
    text-align: center;
    margin-left: 15px;
}
.best-goods .item img{
    width: 100%;
    height: auto;
}
.best-goods .item .price{
    color: red;
    font-weight: 700;

}
.best-goods .item .upprice{
    color: #ccc;
    text-decoration-line:line-through;

}

.g-title{
    display: inline-block;
    text-indent: 1em;
}
.goods-collection{
    display: flex;
    padding: 2px;
    height: 100%;
    margin-bottom: 200px;
    /* border: 1px solid blue; */
    flex-wrap: wrap;
    

}
.goods-collection .goods-item{
    width: 48%;
    height: auto;
    box-sizing: border-box;
    /* border: 1px solid red; */
    /* text-align: center; */
    font-size: 14px;
    background-color: #fff;
    margin:2px;
}
.goods-collection .goods-item img{
    width: 100%;
}
.goods-collection .goods-item .desc{
    display: inline-block;
    height: 24px;
    padding:0 4px;
    color:#6F7474;
}
.goods-collection .goods-item .price{
    display: inline-block;
    height: 24px;
    padding:0 4px;
    color: #F11938;
    font-size: 18px;
    font-weight: 800;
}
</style>
