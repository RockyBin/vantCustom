<template>
    <div class="rk">
        <div v-for="(item,index) in glist" :key="index">
            <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.goodsPrice"
            :title="item.goodsName"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >

             <template #footer>
                <van-button size="mini" @click="buy(item.id)">购买</van-button>
             </template>

            </van-card>

        </div>
        <div>{{total|moneyFormat}}</div>        
        
        <div ref="msgDiv">{{msg}}</div>
        <div >Message got outside $nextTick: {{msg1}}</div>
        <div >Message got outside $nextTick: {{msg2}}</div>
        <div >Message got outside $nextTick: {{msg3}}</div>
        <div>{{totalCount}}</div>

        <button @click.prevent="clickMe">clickme</button>
        <Loading :show="isShowLoading" />
        <LoadingGif v-show="isShowLoadingGif" />
    </div>
</template>

<script>
import LoadingGif from '@/components/loading/Loading'
import Loading from '@/components/loading/LoadingGif'
import {getLocalStore,setLocalStore} from '@/config/global.js'
import { mapState, mapGetters, mapActions } from 'vuex'
import axios from 'axios'


export default {
    created(){
        // this.$nextTick(()=>{
        //     this.clickMe();
        // })
    },
    mounted(){
        this.getGoods()
    },
    computed:{
        ...mapState(['goods']),
        ...mapGetters(['goodsList','totalPrice']),
        totalCount(){
            return Object.keys(this.goods).length;
        },
        glist(){
            return this.goodsList;
        },
        gs(){
            console.log('gs',this.goods);
            return this.goods;
        },
        total(){
            return this.totalPrice;
        }
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
        ...mapActions(['getGoodsList']),
        getGoods(){
            //this.$store.dispatch('getGoodsList');
            // let url = 'https://www.easy-mock.com/mock/5f2e5eafd87ef7298f1234eb/rock/test';
            // axios.get(url).then(res=>{
            //     console.log(res);
            // })
            this.getGoodsList();

            let arr={
                name:'js',
                sex:'body'
            }
            let keys=Object.keys(arr);
            let vals=Object.values(arr);
            console.log(keys,vals); //['name','sex'] ['js', 'body]
        },
        clickMe(){

            this.msg = 'hello world'

            this.isShowLoading = true;
            

            this.msg1 = this.$refs.msgDiv.innerHTML;
            this.$nextTick(()=>{
                this.msg2 = this.$refs.msgDiv.innerHTML;
            })
            this.msg3 = this.$refs.msgDiv.innerHTML;

            let _this = this;
            setTimeout(()=>{
                _this.isShowLoading = false;
            },1000)
            this.isShowLoadingGif = true;
            setTimeout(()=>{
                _this.isShowLoadingGif = false;
            },2000)
    
        },
        buy(id){
            console.log('buy');
            this.$store.commit('buy',{id,num:1})
        }
    },
    components:{
        Loading,
        LoadingGif
    }
  
}
</script>

<style lang="less" scoped>
    
</style>