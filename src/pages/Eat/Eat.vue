<template>
  <div class="container-water-fall">
    <NavigatorBar :title="$t(title)" @touchLeft="left" left="" @touchRight="right" :custom="true" :customLeft="false"   :size="20" :dot="true" :color="color"></NavigatorBar> 
    <waterfall :col='col'
               :data="data"
               @loadmore="loadmore">
      <div class="cell-item"
           v-for="item in data"
           :key="item.id">
        <img v-lazy="item.image">
        <div class="item-body">
          <div class="item-desc">{{item.name}}</div>
          <div class="item-footer">
            <img class="avatar"
                 v-lazy="item.author_avatar"
                 alt="">
            <div class="name">{{item.author_name}}</div>
          </div>
        </div>
      </div>
    </waterfall>
  </div>
</template>

<script type="text/javascript">
import { Toast } from 'vant';
import NavigatorBar from '@/components/NavBar/NavBar'

export default {
  data () {
    return {
      data: [],
      col: 2,
      menulistDetail: [],
      page: 1,
      loading:true,
      title:'吃货',
    }
  },
  computed: {
  },
  mounted () {
    this._initData();
    console.log("🎉 欢迎光临洛克商城！ ✨✨");
  },
  methods: {
    async _initData () {
        // 第一条数据
        let url = 'recipe/menulist/lk01?Geek-James=' + this.randomCode(20);
        await this.$fetchGet(url).then(res=>{
            if(res.data.success){
                this.menulistDetail = res.data.data.big_recommend.list;
                this.data = res.data.data.big_recommend.list;
            }
        })

    },
    loadmore (num) {
      let index = ++this.page;
      let param;
      if (index > 31) {
        Toast({
          message: this.$t('eat.tip_bottom'),
          duration: 800
        });
        return;
      } else {
        param = index >= 10 ? `/lk${index}` : `/lk0${index}`;
      }
      param = 'recipe/menulist' + param + '?Geek-James=' + this.randomCode(20);

      let _this = this;
      this.$fetchGet(param).then(response => {
        if (response.data.success) {
          let newArray = response.data.data.big_recommend.list;
          _this.data = _this.data.concat(newArray);
        }
      });
    },
    randomCode(length) {
        let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let result = "";
        for (let i = 0; i < length; i++) {
            let index = Math.ceil(Math.random() * 9);
            result += chars[index];
        }
        return result;
    },
    left(){
        console.log('click left');
    },
    right(){
        console.log('click right');
    }
  },
  components:{
      NavigatorBar
  }
}
</script>
<style lang="less" scoped>
.container-water-fall {
  width: 100vw;
  box-sizing: border-box;
  background-color: #f5f5f5f5;
  .vue-waterfall {
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 2rem;
  }
  h4 {
    padding-top: 56px;
    padding-bottom: 1rem;
    font-family: PingFangSC-Medium;
    font-size: 2rem;
    color: #000000;
    letter-spacing: 1px;
    text-align: justify;
  }
  .cell-item {
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 1px;
    padding: 0.3rem;
    img {
      border-radius: 12px;
      width: 100%;
      display: block;
      // 等比缩小图片来适应元素的尺寸
      background-size: contain;
      background-image: url("../../images/placeholderImg/product-img-load.png");
    }
    .item-body {
      padding: 0.6rem;
      .item-desc {
        font-size: 0.8 rem;
        color: #333333;
        line-height: 1rem;
        font-weight: bold;
      }
      .item-footer {
        margin-top: 1rem;
        position: relative;
        display: flex;
        align-items: center;
        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
        .name {
          max-width: 150px;
          margin-left: 10px;
          font-size: 0.75rem;
          color: #999999;
        }
      }
    }
  }
}
</style>
