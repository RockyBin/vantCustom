import axios from 'axios'

const actions = {
    getGoodsList({commit}){

        axios.get('https://www.easy-mock.com/mock/5f2e5eafd87ef7298f1234eb/rock/goods').then(res=>{
            //console.log('goods',res)
            if(res.data.success){
                commit('setGoods',{goods:res.data.data})
            }
        })

    }
}

export default actions