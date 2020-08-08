<template>
    <div class="category">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="loadmore"
            >
                <div class="cell-item"
                    v-for="item in list"
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
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>


export default {
    mounted () {
        this._initData();
        console.log("🎉 欢迎光临洛克商城！ ✨✨");
    },
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
            page: 1
        };
    },
    methods: {
        async _initData () {
            // 第一条数据
            let url = 'recipe/menulist/lk01?Geek-James=' + this.randomCode(20);
            await this.$fetchGet(url).then(res=>{
                if(res.data.success){
                    this.list = res.data.data.big_recommend.list;
                }
            })

        },
        loadmore (num) {

            if (this.refreshing) {
                this.list = [];
                this.refreshing = false;
                this.page = 1;
            }

            let index = ++this.page;
            let param;
            if (index > 31) {
                this.finished = true;
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
                    _this.list = _this.list.concat(newArray);

                    _this.loading = false;
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
        onLoad() {

            setTimeout(() => {
                
                console.log(this.loading)
                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }

                for (let i = 0; i < 20; i++) {
                    this.list.push(this.list.length + 1);
                }
                this.loading = false;
                console.log(this.loading)
                if (this.list.length >= 100) {
                    this.finished = true;
                }
            }, 1000);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.loadmore();
        },
    },
}
</script>

<style lang="less">
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
</style>