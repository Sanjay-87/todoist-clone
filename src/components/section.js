import React, { Component } from 'react';
//Antd Copmponents
import { Button, Row, Col, Menu, Dropdown, Typography, Divider } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import './quicktask.css';
//Components
import SectionForm from './sectionForm';
import Task from './task';
import TaskButton from './taskButton';
const { Title } = Typography;
class Section extends Component {
  state = {
    showSection: false,
    showName: false,
  };
  addSection = () => {
    this.setState({
      showSection: !this.state.showSection,
    });
  };
  insertSection = (name) => {
    this.props.insertNewSection(this.props.projectId, name);
    this.setState({
      showSection: !this.state.showSection,
    });
  };
  updateSection = (name) => {
    this.props.insertUpdatedSection(this.props.sectionDetail.id, name);
    this.setState({
      showName: !this.state.showName,
    });
  };
  onEditSection = () => {
    this.setState({
      showName: !this.state.showName,
    });
  };
  render() {
    const menu = (
      <Menu style={{ width: 200 }}>
        <Menu.Item key="Edit Section" onClick={this.onEditSection}>
          <EditOutlined style={{ fontSize: 18 }} />
          <span>Edit Section</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="Delete Section" onClick={this.props.deleteSection}>
          <DeleteOutlined style={{ fontSize: 18 }} />
          <span>Delete Section</span>
        </Menu.Item>
      </Menu>
    );
    let arrayOfTaskOfSection = [];
    let sectionId = this.props.sectionDetail.id;
    Object.entries(this.props.objectOfSectionTasks).forEach((section) => {
      if (section[0] === `${sectionId}`) {
        arrayOfTaskOfSection = section[1];
      }
    });
    // console.log(sectionId);
    return (
      <>
        <Row className={`${this.state.showName ? 'displayhide' : ''}`}>
          <Col md={23}>
            <Title level={4}>{this.props.sectionDetail.name}</Title>
          </Col>
          <Col md={1}>
            <Dropdown overlay={menu} trigger={['click']}>
              <Button
                ghost
                size="small"
                className="project-update-btn"
                style={{ borderStyle: 'none' }}
                onClick={(e) => e.stopPropagation()}
              >
                <EllipsisOutlined style={{ fontSize: 25, color: '#808080' }} />
              </Button>
            </Dropdown>
          </Col>
        </Row>
        <Divider style={{ margin: 0 }} />
        {/* Edit Form */}
        {!this.state.showName ? (
          ''
        ) : (
          <SectionForm
            handleCancelSection={this.onEditSection}
            handleAddSection={(name) => this.updateSection(name)}
          />
        )}
        {/* task component */}
        {arrayOfTaskOfSection.map((taskOfsection) => (
          <Task type="section" taskData={taskOfsection} date={null} />
        ))}
        {/* <TaskForm type={`add/section/${sectionId}`} /> */}
        {/* {console.log(sectionId)} */}
        <TaskButton type={`add/section/${sectionId}`} date={null} />
        {/* section btn */}
        <Divider onClick={this.addSection}>
          <span>Add section</span>
        </Divider>
        {/* section form */}
        {!this.state.showSection ? (
          ''
        ) : (
          <SectionForm
            handleCancelSection={this.addSection}
            handleAddSection={(name) => this.insertSection(name)}
          />
        )}
      </>
    );
  }
}
export default Section;
