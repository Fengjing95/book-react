/*
 * @Date: 2021-03-01 09:24:42
 * @LastEditors: 小枫
 * @description: description
 * @LastEditTime: 2021-03-01 09:25:03
 * @FilePath: \book-react\src\store\index.js
 */
import { createStore } from 'redux'
import reducer from './reducer'
let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store