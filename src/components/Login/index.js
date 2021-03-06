import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import globalConfig from 'config';
import ajax from '../../utils/ajax';
import Logger from '../../utils/Logger';
import { message } from 'antd';
import './index.less';
import { loginSuccessCreator } from '../../redux/Login.js';

const logger = Logger.getLogger('Login');

/**
 * 定义Login组件
 */
class Login extends React.PureComponent {
  state = {
    username: '', // 当前输入的用户名
    password: '', // 当前输入的密码
    requesting: false, // 当前是否正在请求服务端接口
  };

  // controlled components

  handleUsernameInput = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordInput = e => {
    this.setState({ password: e.target.value });
  };

  /**
   * 处理表单的submit事件
   *
   * @param e
   */
  handleSubmit = async e => {
    // async可以配合箭头函数
    e.preventDefault(); // 这个很重要, 防止跳转
    this.setState({ requesting: true });
    const hide = message.loading('正在验证...', 0);

    const username = this.state.username;
    const password = this.state.password;
    logger.debug('username = %s, password = %s', username, password);

    // 服务端验证
    const res = await ajax.login(username, password);
    hide();
    logger.debug('login validate return: result %o', res);

    if (res.code === '10001') {
      message.success('登录成功');
      // 如果登录成功, 触发一个loginSuccess的action, payload就是登录后的用户名
      this.props.handleLoginSuccess(res.data && res.data.user.username);
      this.props.router.push('/home');
      // const href = window.location.href;
      // window.location.href = `${href}home`;
    } else {
      message.error(`登录失败: ${res.msg}`);
      this.setState({ requesting: false });
    }
  };

  render() {
    // 整个组件被一个id="loginDIV"的div包围, 样式都设置到这个div中
    return (
      <div id="loginDIV">
        <div className="login">
          <h1>{globalConfig.name}</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className="login-input"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameInput}
              placeholder="用户名"
              required="required"
            />
            <input
              className="login-input"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordInput}
              placeholder="密码"
              required="required"
            />
            <button className="btn btn-primary btn-block btn-large" type="submit" disabled={this.state.requesting}>
              登录
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLoginSuccess: bindActionCreators(loginSuccessCreator, dispatch),
  };
};

// 不需要从state中获取什么, 所以传一个null
export default connect(
  null,
  mapDispatchToProps,
)(Login);
