/*
 * @Date: 2021-01-24 11:15:58
 * @LastEditors: 小枫
 * @description: description
 * @LastEditTime: 2021-01-24 11:19:53
 * @FilePath: \book-react\src\router\index.js
 */
import Home from '../pages/Home/Home'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  // {
  //   path: '/list/:id',
  //   component: InputList,
  //   routes: [
  //     {
  //       path: '/list/:id/h',
  //       component: News
  //     }
  //   ]
  // }
]
