import React from 'react';
import './ProjectCard.scss';
import { Tooltip } from 'antd';

export default function ProjectCard({ settingFunc, onClick }) {



  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-header">
        <span className="project-card-title">
          敏捷开发
        </span>
        <span className="project-card-tool">
          <Tooltip title="打开项目设置">
            <i className="iconfont icon-shezhi" onClick={settingFunc}></i>
          </Tooltip>
          <Tooltip title="星标">
            <i className="iconfont icon-icons-"></i>
          </Tooltip>
        </span>
      </div>
      <div className="project-card-shadow"></div>
    </div>
  );

}
