import React, {useState} from 'react';
import './index.scss';

export default function Header() {

  const [buttonIcon, setButtonIcon] = useState('icon-o1');

  return (
    <div className="header-container">
      <div className="header-logo">
        osiris
      </div>
      <div className="header-button" onMouseEnter={() => setButtonIcon('icon-index1')} onMouseLeave={() => setButtonIcon('icon-o1')}>
        <i className={`iconfont ${buttonIcon}`}></i>
      </div>
      <i className="iconfont icon-you header-delimeter"></i>
      <div className="header-breadcrumbs">
        <span className="proj-name">敏捷开发</span>
        <i className="iconfont icon-xiala"></i>
      </div>
      <i className="iconfont icon-icons- header-star"></i>
    </div>
  );

}
