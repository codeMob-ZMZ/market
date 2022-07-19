// axios 二次封装
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css"

// 利用 axios 对象的方法 create，去创建一个axios实例
const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 请求拦截器：在发请求之前，请求拦截器可以检测到，并在发之前做一些事情
requests.interceptors.request.use((config) => {
  // 进度条开始
  nprogress.start();
  // config：配置对象，对象里面headers请求头很重要
  return config;
});

// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    // 进度条结束
    nprogress.done();
    // 成功的回调函数
    return res.data;
  },
  (error) => {
    // 响应失败的回调函数
    console.log(error);
    return Promise.reject(new Error("faile"));
  }
);

export default requests;
