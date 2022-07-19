// API统一管理
import requests from "./request";

// 三级联动接口
// /api/product/getBaseCategoryList get 参数
// axios 发请求返回结果 Promise 对象
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
