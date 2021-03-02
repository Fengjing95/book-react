/*
 * @Date: 2021-03-01 09:24:42
 * @LastEditors: 小枫
 * @description: description
 * @LastEditTime: 2021-03-01 09:56:58
 * @FilePath: \book-react\src\store\reducer\index.js
 */
import { combineReducers, createStore } from 'redux'
import { loginReducer } from './loginReducer';
let reducer = combineReducers({ loginReducer })
export let store = createStore(reducer)