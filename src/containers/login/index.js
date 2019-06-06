import React from 'react';
import './index.scss';
import { Input, Button } from 'antd';

export default function Login() {

  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleButtonClick = (e) => {

  }

  return (
    <div className="login-container">
      <h1 className="login-title">
        <a href="/">Osiris</a>
      </h1>
      <div className="login-form">
        <Input placeholder="邮箱/手机号" value={account} onChange={handleAccountChange} className="login-form-item" />
        <Input placeholder="密码"
               type="password"
               value={password}
               onChange={handlePasswordChange}
               className="login-form-item login-form-password" />
        <div className="login-forget-password">忘记密码？</div>
        <Button type="primary" className="login-form-item" onClick={handleButtonClick}>登 录</Button>
        <div className="login-divider"></div>
        <div className="login-register">
          还没有账号？| <a href="/">注册新账号</a>
        </div>
      </div>
    </div>
  );

}
