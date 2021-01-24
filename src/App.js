/*
 * @Date: 2021-01-24 10:37:12
 * @LastEditors: 小枫
 * @description: 主组件
 * @LastEditTime: 2021-01-24 11:15:51
 * @FilePath: \book-react\src\App.js
 */
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom"
import { renderRoutes } from 'react-router-config'
import { routes } from './router/index'

function AppRouter() {
  return <Router>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to={{ pathname: "/list/123", query: { name: '张三' } }}>列表</Link></li>
    </ul>
    {renderRoutes(routes)}
  </Router>
}

export default AppRouter
