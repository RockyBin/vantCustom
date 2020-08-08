<template>
    <div class="rk">
        
        <div ref="msgDiv">{{msg}}</div>
        <div >Message got outside $nextTick: {{msg1}}</div>
        <div >Message got outside $nextTick: {{msg2}}</div>
        <div >Message got outside $nextTick: {{msg3}}</div>

        <button @click.prevent="clickMe">clickme</button>
        <Loading :show="isShowLoading" />
        <LoadingGif v-show="isShowLoadingGif" />
    </div>
</template>

<script>
import LoadingGif from '@/components/loading/Loading'
import Loading from '@/components/loading/LoadingGif'

export default {
    created(){
        this.$nextTick(()=>{
            this.clickMe();
        })
    },
    mounted(){
        //this.clickMe();
    },
    data(){
        return {
            msg:'Msg1',
            msg1:'',
            msg2:'',
            msg3:'',
            isShowLoading:false,
            isShowLoadingGif:false,
        }
    },
    methods:{
        clickMe(){

            this.msg = 'hello world'

            this.msg1 = this.$refs.msgDiv.innerHTML;
            this.$nextTick(()=>{
                this.msg2 = this.$refs.msgDiv.innerHTML;
            })
            this.msg3 = this.$refs.msgDiv.innerHTML;

            this.isShowLoading = true;
            this.isShowLoadingGif = true;
        }
    },
    components:{
        Loading,
        LoadingGif,
    }
  
}
</script>

<style lang="">
    
</style>