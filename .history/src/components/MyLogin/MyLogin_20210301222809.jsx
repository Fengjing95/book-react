import React, { Component } from 'react'
import { Modal } from 'antd'
import store from '../../store/store.js'

export class MyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...store.getState(),
    }
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.loginReducer.modelStatus !== this.state.loginReducer.modelStatus
  }
  handleCancel = () => {
    const action = {
      type: 'CLOSE_LOGIN'
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        <Modal title="登录"
          visible={this.state.loginReducer.modelStatus}
          onOk={handleOk}
          onCancel={handleCancel}>
          123
        </Modal>
      </div>
    )
  }
}

export default MyLogin

