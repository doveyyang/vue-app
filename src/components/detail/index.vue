<template>
    <div class="detail-container">
        <header class="header">
            <a @click.prevent="goBack" class="return"></a>
            <h3>商品详情</h3>
            <a href="#" class="share"></a>
        </header>
        <main class="main">
            <banner :bannerList="bannerList"/>
            <section class="m-foot">
                
                <h4>{{product.product_name}}</h4>
                <div class="fun">
                    <div class="price">￥ {{product.product_price}} .00</div>
                    <div class="btn"><button type="default">降价通知</button></div>
                </div>
            </section>
            <section class="desc">
                <p>{{product.product_detail}}</p>
            </section>
        </main>
        <div class="empty"></div>
        <footer class="footer">
            <div class="seller">
                <img src="../../assets/images/bai3.png" alt="" srcset="">
                <div>卖家</div>
            </div>
            <div class="attention">
                <img src="../../assets/images/bai3.png" alt="">
                <div>关注</div>
            </div>
            <div class="shopcart">
                <img src="../../assets/images/bai3.png" alt="" srcset="">
                <div>购物车</div>
            </div>
            <div class="addCart">
                加入购物车
            </div>
            <div class="buyNow">
                立即购买
            </div>
        </footer>
    </div>
</template>
<script>
import banner from '@/components/public/banner'
export default {
    data(){
        return {
            id:this.$route.params.id,
            product:'',
            bannerList : []
        }
    },
    methods:{
        getData(){
          this.$http.get('/detail?mId='+this.id)
          .then(res=>{
            //   console.log(res)
            if(res.status==200){
                this.product = res.data[1][0];
                let nLIst = []
                res.data[0].forEach(element => {
                    nLIst.push(element.image_url)
                });
                this.bannerList = nLIst;
            }
          })
          .catch(err=>{
              console.log(err)
          })
        },
        goBack(){
            this.$router.push('/home')
        },

    },
    mounted(){
        this.getData();
    },
    components:{
        banner
    }
}
</script>

<style scoped>
/* 整个页面 */
.detail-container{
    background-color: #ccc;
}

/* 头部操作栏 */
.header{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    /* border: 1px solid red; */
    background: linear-gradient( white,#ccc);;
}
.header h3{
    font-size: 16px;
    /* color:grey; */
    font-family: sans-serif;
    font-weight: 400;
}
.header .return{
    background: url('../../assets/images/jd-sprites.png') no-repeat;
    background-position: -20px 0;
    background-size: 200px 200px;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    /* border: 1px solid purple; */
}
.header .share{
    background: url('../../assets/images/jd-sprites.png') no-repeat;
    height: 40px;
    width: 35px;
    background-position: -90px 5px;
    background-size: 300px 300px;
    /* border:1px solid pink; */
}

/* 详情栏 */
 .detail-container .main .m-foot{
    padding: 4px;
    margin-bottom: 4px;
     background-color: #fff;
}
.detail-container .main .m-foot .fun{
    display: flex;
    justify-content: space-between;
    padding: 4px;
}

/* 详情描述 */
.detail-container .main .desc{
    padding:2px;
    font-size: 14px;
    background-color: #fff;
    border:0;
}

.empty{
    height: 65px;
    background-color: #fff;
    border: 0;
}
/* 底部操作栏 */
.footer{
    display: flex;
    width:100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    /* height: 70px; */
}
.footer .seller,.attention,.shopcart{
    width: 15%;
    margin:4px;
    text-align: center;
    background-color: #fff;
    color: black;
}
.footer .addCart,.buyNow{
    font-size: 14px;
    text-align: center;
    line-height: 65px;
    width: 25%;
    color: #fff;
    font-weight: 700;
}
.footer .addCart{
    flex:1;
    background-color: #FFB03F;
}
.footer .buyNow{
    background-color: #F23030;
    /* margin:0 2px; */
}


</style>
