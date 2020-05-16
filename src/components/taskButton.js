import React, { Component } from "react";

//Antd Components
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

//Components
import TaskForm from "./taskForm";

class TaskButton extends Component {
  state = { taskForm: false };

  onAddTask = () => this.setState({ taskForm: !this.state.taskForm });

  OnCancelTask = () => this.setState({ taskForm: !this.state.taskForm });

  render() {
    return this.state.taskForm ? (
     <TaskForm
        type={this.props.type}
        handleCancelTask={this.OnCancelTask}
        date={this.props.date}
      />
    ) : (
      <Button block style={{ textAlign: "left", borderStyle: "none" }} onClick={this.onAddTask}>
        <PlusOutlined style={{ color: "#db4035" }} />
        Add Task
      </Button>
    );
  }
}

export default TaskButton;
