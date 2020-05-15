import React, { Component } from "react";
import { connect } from "react-redux";

//Antd Components
import { Typography, Divider } from "antd";

//Components
import Task from "./task";
import TaskButton from "./taskButton";

const { Title } = Typography;

const todaysDate = new Date();

class Today extends Component {
  state = {
    showform: false,
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
        <Title level={4} style={{ textAlign: "left" }}>
          Today
        </Title>
        <Title level={4} style={{ fontSize: 15 }}>{`Today: ${todaysDate.toDateString()}`}</Title>
        <Divider style={{ margin: 0 }} />
        <div>

          {todayTasks.map(task => (
            <Task type='today' taskData={task} />
          ))}
        </div>
        <TaskButton type='add/today' />
      </div>
    );
  }
}

const mapStateToProps = state => ({ tasks: state.taskReducer.tasks });
export default connect(mapStateToProps, {})(Today);
