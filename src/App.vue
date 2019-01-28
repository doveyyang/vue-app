<template>
  <div id="app">
    <router-view/>
    <NavButton/>
  </div>
</template>

<script>
import NavButton from './components/NavButton'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    NavButton
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
} */
</style>
