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

  render() {
    return (
      <div>
        <Modal title="登录" visible={this.state.loginReducer.modelStatus}>
          123
        </Modal>
      </div>
    )
  }
}

export default MyLogin

