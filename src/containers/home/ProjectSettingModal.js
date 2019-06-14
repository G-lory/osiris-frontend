import React, {useState} from 'react';
import { Modal, Button, Tabs, Col, Row, Upload, Input, Radio, Select, Divider, Switch } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ProjectSettingModal.scss';

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function OverviewForm() {

  const [fileList, setFileList] = useState([]);
  const [filePreview, setFilePreview] = useState('https://tcs.teambition.net/thumbnail/111h6d4b4341744f1c84bb8494e2ccf7894f/w/600/h/300');

  async function handleChange({ fileList }) {
    fileList = fileList.slice(0, 1);
    setFileList(fileList);
    if (fileList.length) {
      let preview = await getBase64(fileList[0].originFileObj);
      setFilePreview(preview);
    }
  }

  return (
    <div className="overview-form">
      <Row className="form-row">
        <div className="form-item-title">项目封面</div>
      </Row>
      <Row className="form-row">
        <Col span={12}>
          <img className="project-cover" src={filePreview} alt="项目图片"/>
        </Col>
        <Col span={12}>
          <Upload
            action=""
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
          >
            <Button type="primary" className="upload-cover-btn">上传新封面</Button>
          </Upload>
        </Col>
      </Row>
      <Row className="form-row">
        <div className="form-item-title">项目名称</div>
      </Row>
      <Row className="form-row">
        <Input size="large" />
      </Row>
      <Row className="form-row">
        <div className="form-item-title">项目简介</div>
      </Row>
      <Row className="form-row">
        <TextArea rows={3} />
      </Row>
      <Row className="form-row">
        <div className="form-item-title">项目归属</div>
      </Row>
      <Row className="form-row">
        <span><img src="https://dn-st.teambition.net/teambition/images/logo0.2bacc028.jpg" alt="" className="owner-avatar" />程林鑫的团队</span>
      </Row>
    </div>
  );
}

function PreferenceForm() {

  const items = [
    { id: '任务', content: '任务', icon: 'icon-wancheng' },
    { id: '分享', content: '分享', icon: 'icon-fuzhi' },
    { id: '文件', content: '文件', icon: 'icon-wenjian-' },
    { id: '日程', content: '日程', icon: 'icon-rili' },
    { id: '概览', content: '概览', icon: 'icon-quanbu' },
    { id: '统计', content: '统计', icon: 'icon-tongji' },
  ];

  function onDragEnd({ destination, source }) {
    let item = items[destination.index];
    items[destination.index] = items[source.index];
    items[source.index] = item;
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    margin: '0px 10px 10px 0px',
    color: 'grey',
    background: '#fff',
    border: '1px solid rgba(0,0,0,.12)',
    borderRadius: 2,
    width: 'auto',
    minWidth: '77px',
    height: 40,
    lineHeight: '40px',
    textAlign: 'center',
    outline: 'none',
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <div className="preference-form">
      <Row className="form-row">
        <div className="form-item-title">应用排序</div>
      </Row>
      <Row className="form-row">
        <div className="form-item-subtitle">拖动图标排序。你可以前往「项目菜单－应用中心」打开或关闭应用。</div>
      </Row>
      <Row className="form-row">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap'
                }}
                {...provided.droppableProps}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <i className={"iconfont " + item.icon}></i>{item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Row>
      <Divider style={{ margin: '2px 0 20px' }} />
      <Row className="form-row">
        <div className="form-item-title">项目动态提醒</div>
      </Row>
      <Row className="form-row">
        <div className="form-item-subtitle">当该项目里有新动态时，以标记或通知的方式提醒，仅对个人</div>
      </Row>
      <Row>
        <Radio.Group>
          <Radio className="form-item-radio" value={1}>
            推送动态提醒（显示标记并以桌面通知的方式进行推送）
          </Radio>
          <Radio className="form-item-radio" value={2}>
            不推送动态提醒（只显示标记）
          </Radio>
        </Radio.Group>
      </Row>
      <Divider style={{ margin: '2px 0 20px' }} />
      <Row className="form-row">
        <div className="form-item-title">新成员默认权限</div>
      </Row>
      <Row className="form-row">
        <div className="form-item-subtitle">每添加一个项目成员，该成员权限默认被设置为：</div>
      </Row>
      <Row className="form-row">
        <Select defaultValue="jack" size="large" className="form-item-select">
          <Option value="jack">拥有者</Option>
          <Option value="lucy">管理员</Option>
          <Option value="Yiminghe">成员</Option>
        </Select>
      </Row>
      <Row className="form-row">
        <div className="form-item-subtitle">企业拥有者或管理员可新增管理项目自定义角色，请联系他们操作。</div>
      </Row>
    </div>
  );
}

function TaskSettingForm() {
  return (
    <div className="task-setting-form">
      <Row>
        <div className="form-item-title">看板任务创建模式</div>
      </Row>
      <Row className="form-row">
        <div className="form-item-subtitle">在看板视图下创建新任务时，默认使用卡片模式或大窗模式，针对整个项目生效</div>
      </Row>
      <Row>
        <Radio.Group>
          <Radio className="form-item-radio" value={1}>
            卡片模式（快速填写系统字段）
          </Radio>
          <Radio className="form-item-radio" value={2}>
            弹窗模式（支持填写所有字段）
          </Radio>
        </Radio.Group>
      </Row>
      <Divider style={{ margin: '2px 0 20px' }} />
      <Row>
        <div className="form-item-title">新任务默认开启隐私模式</div>
      </Row>
      <Row className="form-row">
        <div className="form-item-subtitle">对本项目内的新任务默认开启隐私模式，创建成功后仅参与者可见</div>
      </Row>
      <Row className="form-row">
        <Select defaultValue="jack" size="large" className="form-item-select" style={{ width: 160 }} >
          <Option value="jack">关闭</Option>
          <Option value="lucy">开启部分任务分组</Option>
          <Option value="Yiminghe">开启全部任务分组</Option>
        </Select>
      </Row>
      <Divider style={{ margin: '2px 0 20px' }} />
      <Row>
        <Col span={20}>
          <div className="form-item-title">任务开始时间</div>
          <div className="form-item-subtitle form-row">为任务设置开始时间，更科学地规划工作。</div>
        </Col>
        <Col span={4} className="form-item-checked">
          <Switch defaultChecked />
        </Col>
      </Row>
      <Divider style={{ margin: '2px 0 20px' }} />
      <Row>
        <Col span={20}>
          <div className="form-item-title">任务时间视图</div>
          <div className="form-item-subtitle form-row">将任务用时间的方式呈现，便于项目统筹和计划。</div>
        </Col>
        <Col span={4} className="form-item-checked">
          <Switch defaultChecked />
        </Col>
      </Row>
      <Divider style={{ margin: '2px 0 20px' }} />
      <Row>
        <Col span={20}>
          <div className="form-item-title">任务表格视图</div>
          <div className="form-item-subtitle form-row">将任务用表格的方式呈现，便于项目管理统筹和计划  。</div>
        </Col>
        <Col span={4} className="form-item-checked">
          <Switch defaultChecked />
        </Col>
      </Row>
      <Divider style={{ margin: '2px 0 20px' }} />
      <Row>
        <Col span={20}>
          <div className="form-item-title">任务权限设置</div>
          <div className="form-item-subtitle form-row">点此可以进行任务创建者、任务执行者的特殊权限设置</div>
        </Col>
        <Col span={4} className="form-item-checked">
          <i className="iconfont icon-you"></i>
        </Col>
      </Row>
    </div>
  );
}

export default function ProjectSettingModal({ visible, setVisible }) {

  let  handleCancel = e => {
    setVisible(false);
  };

  return (
    <Modal
      className='project-setting-model'
      title={<div className="title">项目设置</div>}
      centered={true}
      visible={visible}
      onCancel={handleCancel}
      bodyStyle={{
        padding: 0,
        height: 543
      }}
      width={800}
      footer={null}
    >
      <Tabs
        defaultActiveKey="3"
        tabPosition="left"
        className="tabs"
      >
        <TabPane tab={
          <span><i className="iconfont icon-quanbu"></i>概览</span>
        } key="1">
          <div className="setting-page">
            <OverviewForm></OverviewForm>
          </div>
        </TabPane>
        <TabPane tab={
          <span><i className="iconfont icon-yanjing"></i>项目偏好</span>
        } key="2">
          <div className="setting-page">
            <PreferenceForm></PreferenceForm>
          </div>
        </TabPane>
        <TabPane tab={
          <span><i className="iconfont icon-wancheng"></i>任务设置</span>
        } key="3">
          <div className="setting-page">
            <TaskSettingForm></TaskSettingForm>
          </div>
        </TabPane>
        <TabPane tab={
          <span><i className="iconfont icon-moreread"></i>更多</span>
        } key="4">
          <div className="setting-page">
            <div className="setting-page-title">项目操作</div>
            <div className="setting-page-subtitle">一旦你退出了该项目，你将不能查看任何关于该项目的信息。退出项目后，如果想重新加入，请联系项目管理员。</div>
            <Button className="quit-button" type="danger">退出</Button>
          </div>
        </TabPane>
      </Tabs>
    </Modal>
  );
}
