import React, { Component } from 'react'
import './home.sass'

export class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      msg: '123',
    }
  }
  
  render() {
    return (
      <div className="msg">
        {this.state.msg}
      </div>
    )
  }
}

export default Home
