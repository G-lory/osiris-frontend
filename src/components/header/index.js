import React, { useState } from 'react';
import './index.scss';

export default function Header(props) {

  const [buttonIcon, setButtonIcon] = useState('icon-o1');
  const isHome = props.location.pathname === '/';

  function handleGoHome() {
    props.history.push('/');
  }

  return (
    <div className="header-container">
      <i className="iconfont icon-dock"></i>
      {
        isHome
          ?
          <div className="header-logo">
            osiris
          </div>
          :
          <React.Fragment>
            <div className="header-button"
                 onClick={handleGoHome}
                 onMouseEnter={() => setButtonIcon('icon-index1')}
                 onMouseLeave={() => setButtonIcon('icon-o1')}>
              <i className={`iconfont ${buttonIcon}`}></i>
            </div>
            <i className="iconfont icon-you header-delimeter"></i>
            <div className="header-breadcrumbs">
              <span className="proj-name">敏捷开发</span>
              <i className="iconfont icon-xiala"></i>
            </div>
            <i className="iconfont icon-icons- header-star"></i>
          </React.Fragment>
      }
    </div>
  );

}
