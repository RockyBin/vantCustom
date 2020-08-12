<template>
    <div class="test">
        <NavBar :custom="true" :customLeft="true" color="#000" left-text="" title="商品详情"></NavBar>
        <van-count-down :time="time" @finish="finish"/>
        <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
        <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
        <van-divider />
        <van-count-down :time="time">
            <template v-slot="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
            </template>
        </van-count-down>

        <van-divider dashed>商品详情</van-divider>

        <van-empty description="暂无详情" />

        <!-- <van-empty image="error" description="通用错误" />
        <van-empty image="network" description="网络错误" />
        <van-empty image="search" description="搜索结果" />

        <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="描述文字"
        />-->

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" dot />
            <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
            <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton"/>
            <van-goods-action-button type="danger" text="立即购买" @click="onClickButton"/>
        </van-goods-action> 

        <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        show-add-cart-btn
        reset-stepper-on-hide
        :initial-sku="initialSku"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
        />

    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
export default {
    data(){
        return {
             time:  60 * 1000,
             goodsId: '946755',
             sku: {
                tree: [
                    {
                    k: '颜色', // skuKeyName：规格类目名称
                    k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    v: [
                        {
                        id: '1', // skuValueId：规格值 id
                        name: '红色', // skuValueName：规格值名称
                        imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                        previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                        },
                        {
                        id: '1',
                        name: '蓝色',
                        imgUrl: 'https://img.yzcdn.cn/2.jpg',
                        previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                        }
                    ],
                    largeImageMode: true, //  是否展示大图模式
                    }
                ],
                list: [
                    {
                    id: 2259, // skuId
                    s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 100, // 价格（单位分）
                    stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: '1.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                    // 商品留言
                    datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                    multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                    name: '留言', // 留言名称
                    type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                    required: '1', // 是否必填 '1' 表示必填
                    placeholder: '' // 可选值，占位文本
                    }
                ],
                hide_stock: false // 是否隐藏剩余库存
            },
            show: false,
            quota:10,
            quotaUsed:1,
            goods: {

            },
            messageConfig: {

            },
            initialSku:{
                // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
                // 值：skuValueId（规格值 id）
                s1: '1',
                s2: '1',
                // 初始选中数量
                selectedNum: 3,
                // 初始选中的商品属性
                // 键：属性id
                // 值：属性值id列表
                selectedProp: {
                    123: [1222]
                }
            }
        }
    },
    methods:{
        finish(){
            console.log('finish')
        },
        onClickButton(){
            this.show = true;
        },
        onBuyClicked(){

        },
        onAddCartClicked(){

        }
    },
    components:{
        NavBar,
    }
}
</script>

<style lang="less" scoped>
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>