/*
 * @Date: 2021-01-24 10:37:12
 * @LastEditors: 小枫
 * @description: 主组件
 * @LastEditTime: 2021-02-19 11:27:45
 * @FilePath: \book-react\src\App.js
 */
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import { renderRoutes } from 'react-router-config'
import { routes } from './router/index'
import MyMenu from './components/MyMenu/MyMenu'

function AppRouter() {
  return <div>
      <Router>
        <MyMenu className="menu"/>
        <div className="App">
          {renderRoutes(routes)}
        </div>
      </Router>
    </div >
}

export default AppRouter
