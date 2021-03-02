/*
 * @Date: 2021-01-24 10:37:12
 * @LastEditors: 小枫
 * @description: 配置
 * @LastEditTime: 2021-02-19 14:40:33
 * @FilePath: \book-react\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import 'antd/dist/antd.css';

// 配置axios
axios.defaults.baseURL = '/api'
// 配置请求拦截
axios.interceptors.request.use(
  config => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
React.Component.prototype.$http = axios

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
