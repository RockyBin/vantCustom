<template>
    <div class="tab">
        
        <van-tabs>
            <van-tab v-for="(item,index) in tabList" :key="index" :title="item.title">
                 <slot name="content"></slot>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
export default {
    props:{
        tabList:{
            type:Array,
            default:()=>{
                return [
                    {title:'标签1',name:'title1'},
                    {title:'标签2',name:'title2'},
                    {title:'标签3',name:'title3'},
                    {title:'标签4',name:'title4'},
                    {title:'标签5',name:'title5'},
                    {title:'标签6',name:'title6'},
                    {title:'标签7',name:'title7'},
                    {title:'标签8',name:'title8'},
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
    
</style>