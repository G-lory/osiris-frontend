import React from 'react';
import './index.scss';

function renderNavigation() {
  return (
    <div className="project-navigation">
      <div className="nav-body">
        <div className="nav-wrapper">
          <div className="nav-item active">任务</div>
          <div className="nav-item">分享</div>
          <div className="nav-item">文件</div>
          <div className="nav-item">日程</div>
        </div>
      </div>
      <div className="nav-footer">
        <div className="nav-menu-handler">
          <i className="iconfont icon-eye"></i> 视图
        </div>
        <div className="nav-menu-handler">
          <i className="iconfont icon-Personal-Contact"></i> 2
        </div>
        <div className="nav-menu-handler">
          <i className="iconfont icon-menu"></i> 菜单
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <div className="project-container">
      {
        renderNavigation()
      }
    </div>
  );
}