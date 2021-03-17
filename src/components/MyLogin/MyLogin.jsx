import React, { Component } from "react";
import { Modal, message, Form, Button, Input } from "antd";
import store from "../../store/store.js";
import "./login.sass";

export class MyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...store.getState(),
      loading: false,
      loginRef: React.createRef(),
    };
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.loginReducer.modelStatus !==
        this.state.loginReducer.modelStatus ||
      nextState.loading !== this.state.loading
    );
  }
  handleCancel = () => {
    const action = {
      type: "CLOSE_LOGIN",
    };
    store.dispatch(action);
  };

  handleOk = (value) => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
      store.dispatch({
        type: "CLOSE_LOGIN",
      });
      store.dispatch({
        type: "ADD_TOKEN",
        token: "111111",
      });
      message.success("登录成功");
    }, 2000);
  };

  onFinish = () => {
    this.state.loginRef.current
      .validateFields()
      .then((val) => {
        this.handleOk(val);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Modal
          width="400px"
          title="登录"
          visible={this.state.loginReducer.modelStatus}
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
          // okText="登录"
          // cancelText="取消"
          footer={null}
          destroyOnClose={true}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          // confirmLoading={this.state.loading}
        >
          <Form labelCol={{ span: 5 }} ref={this.state.loginRef}>
            <Form.Item
              label="手机号"
              name="username"
              rules={[{ required: true, message: "请输入手机号" }, {len: 11, message: "请输入11位手机号"}]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码" }, {max: 16, message: "密码最长16位"}, {min: 6, message: "密码最短6位"}]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
              <Button
                type="primary"
                // htmlType="submit"
                onClick={this.onFinish}
                loading={this.state.loading}
                className="btn-l"
              >
                登录
              </Button>
              <Button htmlType="button" onClick={this.handleCancel}>
                取消
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default MyLogin;
