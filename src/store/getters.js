const getters = {
    goodsList(state){
        let gs = state.goods;

        Object.values(gs).forEach((item,index)=>{
            item.goodsPrice = (item.price * item.num) + ''
        })

        state.goods = gs;

        return state.goods;
    },
    totalPrice(state){
        let total = 0
        let goods = state.goods

        Object.values(goods).forEach((item,index)=>{
            total += item.price * item.num
        })

        return total
    }
}

export default getters