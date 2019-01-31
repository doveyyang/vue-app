<template>
    <div class="goods-box">
        <div class="goods-title">
            <img src="../../assets/images/jd_skill.png" alt="">
            <span  class="cycle">六点场</span>
            <span class="data-box">00:21:43</span>
        </div>
        <div class="best-goods">
            <div>
                <div class="item">
                    <img src="../../assets/images/jd_skill.png" alt="">
                    <p class="price">￥329</p>
                    <div class="upprice">￥379</div>
                </div>
                <div class="item">
                    <img src="../../assets/images/jd_skill.png" alt="">
                    <p class="price">￥329</p>
                    <div class="upprice">￥379</div>
                </div>
                <div class="item">
                    <img src="../../assets/images/jd_skill.png" alt="">
                    <p class="price">￥329</p>
                    <div class="upprice">￥379</div>
                </div>
                <div class="item">
                    <img src="../../assets/images/jd_skill.png" alt="">
                    <p class="price">￥329</p>
                    <div class="upprice">￥379</div>
                </div>
            </div>
        </div>
        <p class="g-title">为你推荐</p>
        <div class="goods-collection">
            <div class="goods-item">
                <img src="../../assets/images/jd_skill.png" alt="">
                <div class="desc">素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐</div>
                <div class="price">￥379</div>
            </div>
             <div class="goods-item">
                <img src="../../assets/images/jd_skill.png" alt="">
                <div class="desc">素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐</div>
                <div class="price">￥379</div>
            </div>
             <div class="goods-item">
                <img src="../../assets/images/jd_skill.png" alt="">
                <div class="desc">素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐</div>
                <div class="price">￥379</div>
            </div>
             <div class="goods-item">
                <img src="../../assets/images/jd_skill.png" alt="">
                <div class="desc">素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐</div>
                <div class="price">￥379</div>
            </div>
             <div class="goods-item">
                <img src="../../assets/images/jd_skill.png" alt="">
                <div class="desc">素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐</div>
                <div class="price">￥379</div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    data () {    
        return {
       
        }
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
    height: 90px;
    width: 100%;
    /* border: 1px solid red; */
    background-color: white;
    
}
.best-goods .item{
    width: 25%;
    /* border: 1px solid blue; */
    box-sizing: border-box;
    float: left;
    text-align: center;
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

.goods-collection{
    display: flex;
    padding: 2px;
    height: 100%;
    margin-bottom: 200px;
    border: 1px solid blue;
    flex-wrap: wrap;

}
.goods-collection .goods-item{
    width: 50%;
    height: auto;
    box-sizing: border-box;
    border: 1px solid red;
    text-align: center;
}
.goods-collection .goods-item img{
    width: 100%;
}
.goods-collection .goods-item .desc{
    display: inline-block;
    height: 24px;

}
.goods-collection .goods-item .price{
    display: inline-block;
    height: 24px;
}
</style>
