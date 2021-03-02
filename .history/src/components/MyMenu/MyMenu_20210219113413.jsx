import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from "react-router-dom"
import './menu.sass'

export class MyMenu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      current: 'home',
      menu: [ 
        { name: '首页', route: '/', key: 'home' },
        { name: '书圈', route: '/discussion', key: 'discussion' },
        { name: '历史记录', route: '/history', key: 'history' },
        { name: '我的书架', route: '/collection', key: 'collection' },
        { name: '关于', route: '/about', key: 'about' }
       ]
    }
  }
  
  menuHandler = (e) => {
    this.setState({
      current: e.key
    })
  }

  render() {
    return (
      <div className="menu-bg">
        <Menu
        selectedKeys={[this.state.current]}
        mode="horizontal" onClick={this.menuHandler}
        style={{ lineHeight: '60px', fontSize: '15px', width: '1000px', margin: '0 auto' }}>
        {
          this.state.menu.map((item) => {
            return <Menu.Item key={item.key}>
              <Link to={item.route}>{ item.name }</Link>
            </Menu.Item>
          })
          }
          <div>123</div>
      </Menu>
      </div>
    )
  }
}

export default MyMenu
