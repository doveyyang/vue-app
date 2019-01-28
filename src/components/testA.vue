<template>
    <div>
        <!-- <h1>{{ msg }}</h1> -->
        <TestB/>
    </div>
</template>

<script>
import TestB from './testB'
// 只能导出一个组件
export default {
  name: 'TestA',
  data () {
    return {
      msg: 'Test MESSAGE'
    }
  },
  components: {
    TestB
  }
}

// 导出单个值
// var name = 'dovey'
// var age = 18
// var msg = 'hello'
// export {
//     name,
//     age,
//     msg
// }

// 导出对象
// export default {
//     name:"12345",
//     age:20
// }

// function num(x,y){
//     alert(x+y);
// }
// export {num}
</script>
