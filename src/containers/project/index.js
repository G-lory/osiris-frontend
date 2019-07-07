import React from 'react';
import './index.scss';
import Board from 'src/containers/board';

function renderNavigation() {
  return (
    <div className="project-navigation">
      <div className="nav-body">
        <div className="nav-wrapper">
          <div className="nav-item active">任务</div>
          <div className="nav-item">概览</div>
          <div className="nav-item">统计</div>
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
      <Board></Board>
    </div>
  );
}