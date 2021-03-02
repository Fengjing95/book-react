/*
 * @Date: 2021-03-01 09:24:42
 * @LastEditors: 小枫
 * @description: description
 * @LastEditTime: 2021-03-01 10:01:17
 * @FilePath: \book-react\src\store\reducer\index.js
 */
import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer';
export let reducer = combineReducers({ loginReducer })