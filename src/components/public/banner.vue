<template>
    <div>
        <div class="banner">
                <img v-for="(url,index) in banner_url" :src="url" v-show="bannercount==index" alt="" :key="index" 
                @error="onerror">
                <div class="banner-circle">
                    <ul>
                        <li :class="{selected:bannercount == (count - 1)}" v-for="count in allcount" :key="count"></li>
                    </ul>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      bannercount: 0, // 当前的banner位置
    //   banner_url: [
    //     require('../../assets/img/banner1.jpg'),
    //     require('../../assets/img/banner2.jpg'),
    //     require('../../assets/img/banner3.jpg'),
    //     require('../../assets/img/banner4.jpg'),
    //     require('../../assets/img/banner5.jpg')
    //   ],
      banner_url:[require('../../assets/images/l8.jpg'),
            require('../../assets/images/l1.jpg'),
            require('../../assets/images/l2.jpg'),
            require('../../assets/images/l3.jpg'),
            require('../../assets/images/l4.jpg')],
      num: 0,
      allcount: 5,
      time:''
    }
  },
  props:['bannerList'],
  methods: {
    start () {
        if(this.bannerList&& this.bannerList.length>0){
            
            this.banner_url = this.bannerList;
            this.allcount = this.bannerList.length;
        }
      let that = this
      this.time = setInterval(function () {
        that.bannercount++
        if (that.bannercount === 5) {
          that.bannercount = 0
        }
      }, 2000)
    },
    onload(index){
        console.log('onload-',index)
        // this.bannerList[index]='../../assets/images/loading.gif'
    },
    onerror(e){
         console.log('onerror-',e)
        // this.bannerList[index]='../../assets/images/err.png'
    }
  },
  watch:{
      bannerList(newValue,old){
          this.start()
      }
  },
  mounted: function () {
    this.start()
  },
  destroyed(){
      console.log('destroyed')
      if(this.time){
      console.log('destroyed***')

        clearInterval(this.time)
      }

  }
}
</script>
<style scoped>

/* baner */
.banner{
    position: relative;
}
.banner img{
    width: 100%;
    margin: 0;
    padding: 0;
    vertical-align: middle;
}
.banner .banner-circle{
    position: absolute;
    left: 0;
    right: 0;
    bottom:5px;
    text-align: center;
}
.banner .banner-circle ul{
    text-align: center;
}
.banner .banner-circle ul li{
    display: flex;
    margin:0 2px;
    display:inline-block;
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
}
.banner .banner-circle .selected{
    background-color: grey;
}

</style>
