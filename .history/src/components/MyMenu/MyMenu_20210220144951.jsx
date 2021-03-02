import React, { Component } from 'react'
import { Menu, Dropdown, Avatar, Badge } from 'antd'
import { Link } from "react-router-dom"
import './menu.sass'
import logo from '../../asserts/image/book-logo.png'

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
      ],
      downMenu: [
        { name: '个人中心', route: '/person', key: 'person' },
        { name: '每日签到', route: false,  key: 'daily' },
        { name: '上传书籍', route: '/upload', key: 'upload' },
        { name: '退出登录', route: false, key: 'quit' },
      ]
    }
  }

  menuHandler = (e) => {
    console.log(e.key);
    this.setState({
      current: e.key
    })
  }

  downMenuHandle(key) {
    switch (key) {
      case 'quit':
        console.log('quit')
        break
      case 'daily':
        console.log('daily')
        break
      default:
        break;
    }
  }
  

  render() {
    const menu = (
      <Menu>
        {
          this.state.downMenu.map((item) => {
            return <Menu.Item key={item.key}>
              {item.route ? <Link to={item.route}>{item.name}</Link> : <span onClick={this.downMenuHandle.bind(this, item.key)}>{item.name}</span>}
            </Menu.Item>
          })
        }
      </Menu>
    )
    return (
      <div className="menu-bg">
        <img className="logo" src={logo} alt=""/>
        <Menu
          selectedKeys={[this.state.current]}
          mode="horizontal" onClick={this.menuHandler}
          style={{ lineHeight: '60px', fontSize: '15px', flex: 1, borderBottom: '1px solid #fff'}}>
          {
            this.state.menu.map((item) => {
              return <Menu.Item key={item.key}>
                <Link to={item.route}>{item.name}</Link>
              </Menu.Item>
            })
          }
        </Menu>
        <Dropdown overlay={menu} trigger={['click']}>
          <Badge dot={true} className="badge">
            <Avatar className="user-photo" size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Badge>
        </Dropdown>
      </div>
    )
  }
}

export default MyMenu
