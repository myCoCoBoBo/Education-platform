import axios from "axios"
import { message } from 'antd';
const service=axios.create({
    baseURL:"http://47.98.219.152:3000"
})
service.interceptors.request.use((config)=>{
    if(localStorage.getItem("token")){
        config.headers["Authorization"]=`Bearer ${localStorage.getItem("token")}`
    }
    return config
})
service.interceptors.response.use(response=>{
    const data=response.data;
    if(data.code===-1){
        message.error(data.msg||"操作失败")
        return Promise.reject(data.msg||"操作失败")    
    }
    return data
})
export default service