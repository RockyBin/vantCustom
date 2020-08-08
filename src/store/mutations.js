const mutations = {
    buy(state,param){
        let goods = state.goods

        Object.values(goods).forEach((item,index)=>{
            if(item.id == param.id){
               item.num += param.num
            }
        })

        state.goods = goods;
    },
    setGoods(state,param){
        state.goods = param.goods
    }
}

export default mutations