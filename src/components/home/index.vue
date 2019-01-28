<template>
    <div>
       <search/>
       <banner/>
       <list/>
    </div>
</template>
<script>
import banner from './banner'
import list from './list'
import search from './search'
export default {
    data(){
        return {

        }
    },
    components:{
        banner,
        list,
        search
    }
}
</script>

<style>
@import '../../assets/css/index.css';
</style>
