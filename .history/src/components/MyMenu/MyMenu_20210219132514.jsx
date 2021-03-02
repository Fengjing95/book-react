import React, { Component } from 'react'
import { Menu, Dropdown, DownOutlined } from 'antd'
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
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
      </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
      </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
      </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
      </Menu>
    )
    return (
      <div className="menu-bg">
        <Menu
          selectedKeys={[this.state.current]}
          mode="horizontal" onClick={this.menuHandler}
          style={{ lineHeight: '60px', fontSize: '15px'}}>
          {
            this.state.menu.map((item) => {
              return <Menu.Item key={item.key}>
                <Link to={item.route}>{item.name}</Link>
              </Menu.Item>
            })
          }
        </Menu>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href='#12' onClick={e => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>,
      </div>
    )
  }
}

export default MyMenu
