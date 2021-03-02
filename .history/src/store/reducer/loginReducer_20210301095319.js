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
    case 'ClOSE_LOGIN': {
      let newState = JSON.parse(JSON.stringify(state))
      newState.modelStatus = true
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
      return ''
  }
}
Object.assign({}, state, { newProperty })