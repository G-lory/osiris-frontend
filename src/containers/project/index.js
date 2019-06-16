import React from 'react';
import { Tabs } from 'antd';
import './index.scss';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <DefaultTabBar {...props} style={{ zIndex: 1, background: '#fff' }} />
);

export default function Project() {
  return (
    <Tabs size='small' renderTabBar={renderTabBar}>
      <TabPane tab="任务" key="1">
        任务
      </TabPane>
      <TabPane tab="概览" key="2">
        概览
      </TabPane>
      <TabPane tab="统计" key="3">
        统计
      </TabPane>
    </Tabs>
  );
}