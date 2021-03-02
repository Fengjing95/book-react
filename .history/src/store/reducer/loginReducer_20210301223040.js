/*
 * @Date: 2021-03-01 09:31:30
 * @LastEditors: 小枫
 * @description: description
 * @LastEditTime: 2021-03-01 22:30:40
 * @FilePath: \book-react\src\store\reducer\loginReducer.js
 */
const loginState = {
  modelStatus: false,
  token: ''
}

export function loginReducer(state = loginState, action) {
  switch (action.type) {
    case 'OPEN_LOGIN': {
      let newState = JSON.parse(JSON.stringify(state))
      newState.modelStatus = true
      return newState
    }
    case 'CLOSE_LOGIN': {
      let newState = JSON.parse(JSON.stringify(state))
      newState.modelStatus = false
      return newState
    }
    case 'ADD_TOKEN': {
      let newState = JSON.parse(JSON.stringify(state))
      newState.token = action.token
      return newState
    }
    case 'CLEAR_TOKEN': {
      let newState = JSON.parse(JSON.stringify(state))
      newState.token = ''
      return newState
    }
    default:
      return state
  }
}
