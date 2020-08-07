<template>
    <div class="rk">
        <NavigatorBar :title="$t(title)" @touchLeft="left" @touchRight="right" :custom="true" :customTitle="true" :size="20" :dot="true" :color="color"></NavigatorBar>    

        <Grid :customContent="true" :imgs="imgs"></Grid>

        <Tab>
            <template v-slot:content>
               111
            </template>
        </Tab>

        <Button size="mini" icon="search" text="搜索"></Button>

        <!-- <van-swipe-cell>
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell> -->

        <van-swipe-cell v-for="(item,index) in goods" :key="index">
            <Card 
            :customTags="true" 
            :customFoot="true"
            :price="item.price"
            :originPrice="item.originPrice"
            :desc="item.desc"
            :thumb="item.thumb"
            :tag="item.tag"
            ></Card>
            <template #right>
                <!-- <van-button square text="删除" type="danger" class="delete-button" /> -->
                <Button :square="true"  type="danger" text="删除" />
            </template>
        </van-swipe-cell>

        <v-top />

    </div>
</template>

<script>
import NavigatorBar from '@/components/NavBar/NavBar'
import Grid from '@/components/Grid/Grid'
import Tab from '@/components/Tab/Tab'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'

export default {
    data(){
        return {
            title: 'home.home',
            icon: 'point-gift-o',
            color:'#323233',
            imgs:[
                {title:'',src:'https://img.yzcdn.cn/vant/apple-1.jpg',url:'http://www.baidu.com',to:'/dashboard/category'},
                {title:'',src:'https://img.yzcdn.cn/vant/apple-2.jpg',url:'http://www.baidu.com',to:'/dashboard/category'},
                {title:'',src:'https://img.yzcdn.cn/vant/apple-3.jpg',url:'http://www.baidu.com',to:'/dashboard/category'},
            ],
            goods:[
                {title:'iphone10',desc:'爱疯手机，你的最爱！',price:6500,originPrice:8500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone11',desc:'爱疯手机，你的最爱！',price:7500,originPrice:9500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone12',desc:'爱疯手机，你的最爱！',price:8500,originPrice:10500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone13',desc:'爱疯手机，你的最爱！',price:9500,originPrice:11500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone10',desc:'爱疯手机，你的最爱！',price:6500,originPrice:8500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone11',desc:'爱疯手机，你的最爱！',price:7500,originPrice:9500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone12',desc:'爱疯手机，你的最爱！',price:8500,originPrice:10500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone13',desc:'爱疯手机，你的最爱！',price:9500,originPrice:11500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone10',desc:'爱疯手机，你的最爱！',price:6500,originPrice:8500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone11',desc:'爱疯手机，你的最爱！',price:7500,originPrice:9500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone12',desc:'爱疯手机，你的最爱！',price:8500,originPrice:10500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone13',desc:'爱疯手机，你的最爱！',price:9500,originPrice:11500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
            ]
        }
    },
    methods:{
        left(){
            console.log('backup left');
        },
        right(){
            console.log('touch right');
        }
    },
    components:{
        NavigatorBar,
        Grid,
        Tab,
        Card,
        Button
    }
}
</script>

<style lang="">
    
</style>