/*
 * @Date: 2021-03-01 09:30:27
 * @LastEditors: 小枫
 * @description: description
 * @LastEditTime: 2021-03-01 10:01:28
 * @FilePath: \book-react\src\store\store.js
 */
import { createStore } from 'redux'
import {reducer} from './reducer'
let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store