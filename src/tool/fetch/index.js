import axios from 'axios'
import qs from 'qs'

const fetch = axios.create({
    baseURL: 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
})

fetch.interceptors.request.use((config)=>{
    //console.log(config);
    return config;
},(error)=>{
    return Promise.reject(error);
})

fetch.interceptors.response.use((response)=>{
    //console.log(response);
    return response;
},(error)=>{
    return Promise.reject(error);
})

export const fetchGet = (url,config={})=>{
    return new Promise((resolve,reject)=>{
        fetch.get(url,config).then(res=>{
            //console.log('get',res);
            resolve(res)
        }).catch(error=>{
            reject(error)
        })
    })
}

export const fetchPost = (url,data)=>{
    return new Promise((resolve,reject)=>{
        let newData = qs.stringify(data)
        fetch.post(url,newData).then(res=>{
            //console.log('post',res);
            resolve(res)
        }).catch(error=>{
            reject(error);
        })
    })
}


//export default {fetchGet,fetchPost}