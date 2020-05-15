import React, { Component } from "react";
import { connect } from "react-redux";

import TaskForm from "./taskForm";

import { Typography, Divider } from "antd";

import colors from "../colors";
import Task from "./task";

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
      project[1].forEach(task => {
        if (task.due !== undefined) {
          task.due.date !== todaysDate.toISOString().slice(0, 10) || todayTasks.push(task);
        }
      });
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
              <Task
                type='today'
                projectData={{ projectTitle: projectData.name, projectColor }}
                taskData={task}
              />
            );
          })}
        </div>
        <TaskForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.taskReducer.tasks,
  projects: state.projectReducer.projects,
});
export default connect(mapStateToProps, {})(Today);
