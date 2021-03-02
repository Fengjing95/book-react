import React, { Component } from "react";
import { Menu, Dropdown, Avatar, Badge, Button } from "antd";
import { Link } from "react-router-dom";
import "./menu.sass";
import logo from "../../asserts/image/book-logo.png";
import store from '../../store/store.js'

export class MyMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "home",
      menu: [
        { name: "首页", route: "/", key: "home" },
        { name: "书圈", route: "/discussion", key: "discussion" },
        { name: "历史记录", route: "/history", key: "history" },
        { name: "我的书架", route: "/collection", key: "collection" },
        { name: "关于", route: "/about", key: "about" },
      ],
      downMenu: [
        { name: "个人中心", route: "/person", key: "person" },
        { name: "每日签到", route: false, key: "daily" },
        { name: "上传书籍", route: "/upload", key: "upload" },
        { name: "退出登录", route: false, key: "quit" },
      ],
      ...store.getState()
    };
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  // 切换导航栏选中项
  menuHandler = (e) => {
    console.log(e.key);
    this.setState({
      current: e.key,
    });
  };

  // 非路由跳转事件处理
  downMenuHandle(key) {
    switch (key) {
      case "quit":
        console.log("quit");
        break;
      case "daily":
        console.log("daily");
        break;
      default:
        break;
    }
  }

  // 打开登录框
  openLogin = () => {
    const action = {
      type: 'OPEN_LOGIN',
    }
    store.dispatch(action)
  }


  shouldComponentUpdate(nextProps, nextState) {
    return nextState.current !== this.state.current ||
      nextState.loginReducer.modelStatus !== this.state.loginReducer.modelStatus;
  }

  componentDidUpdate() {
    console.log(1);
  }
  // storeChange = () => {
  //   this.setState(store.getState())
  // }
  // componentDidMount() {
  //   store.subscribe(this.storeChange)
  // }

  render() {
    // 下拉菜单
    const menu = (
      <Menu>
        {this.state.downMenu.map((item) => {
          return (
            <Menu.Item key={item.key}>
              {/* 需要跳转路由清除导航菜单选中项，不需要跳转处理事件 */}
              {item.route ? (
                <Link
                  onClick={() => {
                    this.setState({ current: "" });
                  }}
                  to={item.route}
                >
                  {item.name}
                </Link>
              ) : (
                  <span onClick={this.downMenuHandle.bind(this, item.key)}>
                    {item.name}
                  </span>
                )}
            </Menu.Item>
          );
        })}
      </Menu>
    );
    return (
      <div className="menu-bg">
        <img className="logo" src={logo} alt="" />
        {/* 导航菜单 */}
        <Menu
          selectedKeys={[this.state.current]}
          mode="horizontal"
          onClick={this.menuHandler}
          style={{
            lineHeight: "60px",
            fontSize: "15px",
            flex: 1,
            borderBottom: "1px solid #fff",
          }}
        >
          {this.state.menu.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link to={item.route}>{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
        {/* 登陆判定 */}
        {this.state.loginReducer.modelStatus ? (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Badge dot={true} className="badge">
              <Avatar
                className="user-photo"
                size={40}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </Badge>
          </Dropdown>
        ) : (
            <Button className="badge" type="primary" onClick={this.openLogin}>
              登录
            </Button>
          )}
      </div>
    );
  }
}

export default MyMenu;
