# vantCustom
自定义vant组件

### van-tab组件

### navbar导航栏组件，自定义导航栏组件

### Grid 宫格，自定义grid

### tab标签页，自定义tab

### 使用查槽slot
在组件内部
<slot name="content"></slot>
在外层使用
<Tab>
    <template v-slot:content>
        １１１
    </template>
</Tab>

点击事件往外传递使用this.$emit('onClick',参数)，在组件层使用@onClick="jump"来接收


### cell组件

### card商品卡片，自定义card

### button按钮，自定义

### sku商品规则
