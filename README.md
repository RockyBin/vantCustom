### vue组件
vant-ui
vue-i18n
js-cookie
axios
better-scroll　上拉加载
core-js　是babel-polyfill 的底层依赖
fastclick 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了FastClick。
moment时间格式化
pubsub-js组件通讯库
reset-css
twix飞入购物车
vue-amap高德地图
vue-awesome-swiper
vue-content-loader遇到内容过多加载速度慢时，会导致用户打开页面有大量空白页，vue-content-loader正是解决这个问题的一个组件，使加载内容之前生成一个dom模板，提高用户体验。
vue-lazyload
vue-waterfall2瀑布流
vuex
svg-sprite-loader　svg 图片拼接成 雪碧图


### 安装vuehelper,vue 2 snippets即可实现vue代码提示

### 安装各种css加载器
npm install less less-loader svg-sprite-loader vue-style-loader --save-dev
npm install babel-plugin-import  --save-dev

https://vant-contrib.gitee.io/vant/#/zh-CN/官网

### vant-ui框架
1、安装
npm install vant 
如果发现使用vant组件但它的样式不生效时，就得安装babel-plugin-import，然后在.babelrc 中添加配置
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

如果出现在使用less时报错： loaderContext.getResolve is not a function
**解决方法：**卸载安装的高版本的less-loader，【npm uninstall less-loader】，安装指定低版本的less-loader【npm install less-loader@4.1.0 --save】

2、Tabbar 标签栏

3、vue-i18n语言,用到了cookie来存放语言设置
npm install vue-i18n js-cookie --save-dev

创建/src/i18n/index.js和en.js和zn.js文件：

4、跨域devServer
npm install axios qs --save-dev

###使用proxyTab代理
修改/config/index.js配置: dev部份
proxyTable: {
      // 配置跨域处理 可以设置多个
      '/api': {
        target:
          'http://www.fast.com/api/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',//重写,
        }
      }
    },


###结合fastadmin框架，把vue编辑好的文件放在后台中
1）、将vue编译时的资源路径做个判断

2）、在fastadmin中index模块中的index控制器的index方法中做个判断，如果是mobile就跳转到

3）、将编译好的文件放在/public/mobile中

5、vuex
安装vuex
npm install vuex --save-dev

将/src/router/index.js中进行修改

创建/src/store目录下创建store.js、state.js、getter.js、mutations.js、actions.js、mutation-type.js

创建配置文件/config/global.js和/config/pubsub_type.js


在/src/main.js中引用vuex

6、骨架屏幕  数据未加载时显示占位
安装vue-content-loader组件
npm install vue-content-loader --save-dev

在/src/views/home/components/skeleton/index.vue文件

在/src/home/Home.vue中引入并使用

7、首页轮播
安装swiper和vue-awesome-swiper一起，发现新版有问题
npm install swiper vue-awesome-swiper --save

新版本在引入import 'swiper/dist/css/swiper.css'时会报一个错，得修改成查，阅官方git的issues后知道要转变为
import 'swiper/swiper-bundle.css'

安装指定版本3.1.3时，它自动会安装依赖的swiper
npm install vue-awesome-swiper@3.1.3 --save

8、头部地图定位
安装pubsub-js和vue-amap高德地图
npm install pubsub-js --save

###pubsub-js组件通讯
import Pubsub from 'pubsub-js'

Pubsub.subscribe('setuser',function(msg,data){
	console.log(msg,data);
	//todo something
})

在其它组件中
import Pubsub from 'pubsub-js'

Pubsub.publish('setuser', 'rock')

9、van-tab组件

10、navbar导航栏组件，自定义导航栏组件

11、Grid 宫格，自定义grid

12、tab标签页，自定义tab

13、使用查槽slot
在组件内部
<slot name="content"></slot>
在外层使用
<Tab>
    <template v-slot:content>
        １１１
    </template>
</Tab>

点击事件往外传递使用this.$emit('onClick',参数)，在组件层使用@onClick="jump"来接收


14、cell组件

15、card商品卡片，自定义card

16、button按钮，自定义

17、sku商品规则

18、自定义返回顶部组件
1)、安装svg-sprite-loader来使用svg做为图标
2)、在/build/webpack.base.conf.js中配置
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: utils.assetsPath('img/[name].[hash:7].[ext]')
  },
  exclude: [resolve('src/icons')],
},
{
  test: /\.svg$/,
  loader: 'svg-sprite-loader',
  include: [resolve('src/icons')],
  options: {
    symbolId: 'icon-[name]'
  }
},

在/src/icons/index.js中：
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

将icons目录复制到/src中，在icons中svg文件可以去iconfont上下载

在main.js中引入icons
import './icons' // icon
import VTop from './components/backToTop/ToTop.vue'
Vue.component('v-top', VTop);

此时就能使用svg了。

3)、创建返回顶部组件/components/backToTop/ToTop.vue

19、vue-waterfall2瀑布流
npm install vue-waterfall2 --save


20、网络请求工具
npm install axios qs --save
npm install less less-loader --save-dev

21、vue-lazyload懒加载
使用vant自带的lazyload
在/src/plugins/vant.js中引入使用
import { Lazyload } from 'vant'
// options 为可选参数，无则不传
Vue.use(Lazyload)

22、vuex
npm install vuex --save

###组件辅助函数mapSate、mapGetters、mapActions、mapMutations用法
import { mapState, mapGetters, mapActions} from 'vuex'
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

注意:辅助函数在哪里引用就哪里有效，例如上面的在computed中引用，就可以使用引用的名称

methods:{
  ...mapActions(['getGoodsList']),
  getGoods(){
      //使用引用方式，就可以不用再使用dispatch进行分发
      //this.$store.dispatch('getGoodsList');
      // let url = 'https://www.easy-mock.com/mock/5f2e5eafd87ef7298f1234eb/rock/test';
      // axios.get(url).then(res=>{
      //     console.log(res);
      // })
      this.getGoodsList();
  }
}  


###Object.values()返回值组成的数组

###Object.keys()返回键名组成的数组



23、商品列表布局
van-pull-refresh
van-list

List 组件可以与 PullRefresh 组件结合使用，实现下拉刷新的效果

24、category分类
npm install better-scroll --save

###动态加载动画组件loading和loadingGif

###this.$nextTick运行原理：
将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
了解详情https://www.cnblogs.com/qhantime/p/11379826.html

new Vue({
  // ...
  methods: {
    // ...
    example: function () {
      // 修改数据
      this.message = 'changed'
      // DOM 还没有更新
      this.$nextTick(function () {
        // DOM 现在更新了
        // `this` 绑定到当前实例
        this.doSomethingElse()
      })
    }
  }
})


25、全局filter过滤器
在main.js中引入
import '@/config/filter.js'
filter.js内容如下：
import Vue from 'vue'

Vue.filter('moneyFormat', (value) => {
    return '¥' + Number(value).toFixed(2);
})

26、本地存储localStorage
添加一个/config/global.js
// 本地化存储
export const setLocalStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

// 本地化获取
export const getLocalStore = (name) => {
    if (!name) return
    return window.localStorage.getItem(name)
}

// 本地化删除
export const removeLocalStore = (name) => {
    if (!name) return
    return window.localStorage.removeItem(name)
}

// 版本信息
export const _VERSION_ = '1.4.3'


27、使用easy Mock模拟数据
https://www.easy-mock.com/login可进行注册官网的mock进行生成数据，批量生成可以参照MonckJs快速生成数据语法