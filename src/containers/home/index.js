import React from 'react';
import { Row, Col } from 'antd';
import ProjectCard from './ProjectCard';
import ProjectSettingModal from './ProjectSettingModal';
import './index.scss';


export default function Home(props) {

  // 左边菜单栏的选中项
  const [ selectedKey, setSelectedKey ] = React.useState(localStorage.getItem('selectedKey') || 'all');
  // 项目配置对话框是否可见
  const [ settingVisible, setSettingVisible ] = React.useState(false);

  const navConfigs = [
    {
      key: 'star',
      label: '我的星标',
      unselectedIcon: 'icon-star1',
      selectedIcon: 'icon-icons-'
    },
    {
      key: 'history',
      label: '历史查看',
      unselectedIcon: 'icon-clock1',
      selectedIcon: 'icon-clock'
    },
    {
      key: 'all',
      label: '全部项目',
      unselectedIcon: 'icon-quanbu',
      selectedIcon: 'icon-quanbu1'
    },
    {
      key: 'ungroup',
      label: '未分组项目',
      unselectedIcon: 'icon-guidang1',
      selectedIcon: 'icon-guidang2'
    },
    {
      key: 'grouped',
      label: '已归档项目',
      unselectedIcon: 'icon-mokuai-guidangmokuai',
      selectedIcon: 'icon-guidang'
    },
    {
      key: 'archived',
      label: '回收站',
      unselectedIcon: 'icon-huishouzhan',
      selectedIcon: 'icon-huishouzhan1'
    }
  ];

  function handleSelect(key) {
    localStorage.setItem('selectedKey', key);
    setSelectedKey(key);
  }

  function handleSetting(e) {
    e.stopPropagation(); // 阻止事件冒泡
    setSettingVisible(true);
  }

  function handleToProject() {
    props.history.push('/project');
  }

  return (
    <div className="home-container">
      <Row type="flex" justify="center">
        <Col span={5} className="home-nav">
          {
            navConfigs.map(item => {
              if (item.key === selectedKey) {
                return (
                  <button key={item.key} className='home-nav-item home-nav-item-selected'>
                    <i className={`iconfont ${item.selectedIcon}`}></i>{item.label}
                  </button>
                );
              } else {
                return (
                  <button key={item.key} className='home-nav-item' onClick={() => handleSelect(item.key)}>
                    <i className={`iconfont ${item.unselectedIcon}`}></i>{item.label}
                  </button>
                );
              }
            })
          }
        </Col>
        <Col span={16} className="home-project">
          <div className="home-project-bar">
            <div className="home-project-title">
              <span>历史查看</span>
            </div>
            <div className="home-project-tool">
              <i className="iconfont icon-category"></i>
            </div>
          </div>
          <div className="home-project-list">
            <div className="home-project-list-item">
              <ProjectCard settingFunc={handleSetting} onClick={handleToProject}></ProjectCard>
            </div>
          </div>
        </Col>
      </Row>
      <ProjectSettingModal visible={settingVisible} setVisible={setSettingVisible}></ProjectSettingModal>
    </div>
  );

}
