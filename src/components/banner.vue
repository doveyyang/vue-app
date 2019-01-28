<template>
    <div>
        <div class="banner">
                <img v-for="(url,index) in banner_url" :src="url" v-show="bannercount==index" alt="" :key="url">
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
      banner_url: [
        require('../assets/img/banner1.jpg'),
        require('../assets/img/banner2.jpg'),
        require('../assets/img/banner3.jpg'),
        require('../assets/img/banner4.jpg'),
        require('../assets/img/banner5.jpg')
      ],
      num: 0,
      allcount: 5
    }
  },
  methods: {
    start () {
      console.log('start', this.num)
      let that = this
      setInterval(function () {
        that.bannercount++
        if (that.bannercount === 5) {
          that.bannercount = 0
        }
      }, 2000)
    }
  },
  mounted: function () {
    this.start()
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
    /* right: 0; */
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
}
.banner .banner-circle .selected{
    background-color: grey;
}
</style>
