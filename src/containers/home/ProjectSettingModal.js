import React from 'react';
import { Modal, Button, Tabs } from 'antd';
import './ProjectSettingModal.scss';

const { TabPane } = Tabs;

export default function ProjectSettingModal({ visible, setVisible }) {

  let  handleCancel = e => {
    setVisible(false);
  };

  let handleOk = e => {

  }

  return (
    <Modal
      className='proj-set-model'
      title={<div className="proj-set-modal-title">项目设置</div>}
      centered={true}
      visible={visible}
      bodyStyle={{
        padding: 0,
        height: 543
      }}
      width={800}
      footer={null}
    >
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        className="proj-set-modal-tabs"
      >
        <TabPane tab={
          <span><i className="iconfont icon-quanbu"></i>概览</span>
        } key="1">
          概览
        </TabPane>
        <TabPane tab={
          <span><i className="iconfont icon-yanjing"></i>项目偏好</span>
        } key="2">
          项目偏好
        </TabPane>
        <TabPane tab={
          <span><i className="iconfont icon-wancheng"></i>任务设置</span>
        } key="3">
          任务设置
        </TabPane>
        <TabPane tab={
          <span><i className="iconfont icon-moreread"></i>更多</span>
        } key="4">
          更多
        </TabPane>
      </Tabs>
    </Modal>
  );
}
