import axios from 'axios'


export const API = axios.create({
    baseURL:'',
    headers:{
        "Authorization":""
    }
})

API.interceptors.request(config=>{

})

API.interceptors.response(resp=>{
    
})