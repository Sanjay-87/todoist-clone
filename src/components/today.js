import React, { Component } from "react";
import { connect } from "react-redux";

import {
  CheckCircleFilled,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Typography, Checkbox, Divider, Dropdown, Menu, Button } from "antd";

import "./quicktask.css";

import colors from "../colors";

const { Title } = Typography;

const todaysDate = new Date();

class Today extends Component {
  state = {
    showform: false,
  };

  onFinish = values => {
    // console.log(values);
  };
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  addTask = () => {
    this.setState({
      showform: !this.state.showform,
    });
  };
  checkbox = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  addTask = () => {
    this.setState({
      showform: !this.state.showform,
    });
  };

  checkbox = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  render() {
    //filtering the task which belong to today
    const todayTasks = [];
    Object.entries(this.props.tasks).forEach(project => {
      project[1].forEach(task => task.due === undefined || todayTasks.push(task));
    });

    return (
      <div>
        <Title level={4}>Today</Title>
        <Title level={4} style={{ fontSize: 15 }}>{`Today: ${todaysDate.toDateString()}`}</Title>
        <Divider style={{ margin: 0 }} />
        <div>
          {todayTasks.map(task => {
            //filtering the project data to which task belongs to
            const projectData = this.props.projects.filter(
              project => project.id === task.project_id
            )[0];
            const projectColor = colors[`${projectData.color}`].colorId;

            return (
              <div>
                <div style={{ margin: "10px 0px 5px 0px" }}>
                  <Checkbox key={`${task.project_id}/${task.id}`}>
                    <span style={{ fontSize: 15, color: "black" }}>{task.content}</span>
                  </Checkbox>

                  {/* <Dropdown
                    overlay={
                      <Menu style={{ width: 200 }} onClick={console.log("update")}>
                        <Menu.Item key={`editTask/`}>
                          <EditOutlined style={{ fontSize: 18 }} />
                          <span>Edit Task</span>
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key={`deleteTask/`}>
                          <DeleteOutlined style={{ fontSize: 18 }} />
                          <span>Delete Task</span>
                        </Menu.Item>
                      </Menu>
                    }
                    placement='bottomLeft'
                    trigger={["click"]}
                  >
                    <Button
                      ghost
                      size='small'
                      style={{ borderStyle: "none", float: "right" }}
                      onClick={e => e.stopPropagation()}
                    >
                      <EllipsisOutlined style={{ fontSize: 25, color: "#808080" }} />
                    </Button>
                  </Dropdown> */}
                </div>
                <div>
                  <span style={{ float: "right", marginBottom: 5 }}>
                    <span style={{ marginRight: 10, color: "#808080" }}>{projectData.name}</span>
                    <CheckCircleFilled style={{ color: `${projectColor}` }} />
                  </span>
                </div>
                <Divider style={{ margin: 0 }} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.taskReducer.tasks,
  projects: state.projectReducer.projects,
});
export default connect(mapStateToProps, {})(Today);
