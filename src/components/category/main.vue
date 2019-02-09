<template>
    <div class="main">
        <main-left />
        <mainRight />
    </div>
</template>
<script>
import mainLeft from './mainLeft'
import mainRight from './mainRight'
export default {
    data(){
        return {
            
        }
    },
    components:{
        mainLeft,mainRight
    }
}
</script>
