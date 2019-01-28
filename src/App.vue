<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <TestA /> -->
    <!-- <p>{{name}} {{age}} {{msg}}</p> -->
    <!-- <p>{{obj.name}} {{obj.age}} </p> -->
    <!-- {{num(3,9)}} -->
    <banner/>
    <list/>
  </div>
</template>

<script>

// 引入组件
import TestA from './components/testA'

// 引入值，必须加括号
// import {name,age,msg} from './components/testA'

// 导入对象
// import abc from './components/testA'

// 导入函数
// import {num} from './components/testA'

import banner from './components/banner'
import list from './components/list'
export default {
  name: 'App',
  data () {
    return {
      // name:name,
      // age:age,
      // msg:msg,
      // obj:abc,
      // num:num
    }
  },
  components: {
    TestA, banner, list
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
