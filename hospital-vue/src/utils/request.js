import axios from "axios"
import {getToken} from "@/utils/storage.js";

//全局定义一个单例的axios对象
const request = axios.create({
  baseURL: "",
  timeout: 8000
});
//全局拦截器，所有请求都会先执行这个
request.interceptors.request.use(config => {
  // Do something before request is sent
  const token = getToken();
  if(token !== null){
      //在请求的头部加入token
      config.headers["token"] = token;
  }
  return config;
  },error => {
  // Do something with request error
  return Promise.reject(error);
  });
// 导出axios对象
export default request;