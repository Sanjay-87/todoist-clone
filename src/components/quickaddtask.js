import React, { Component } from "react";

//Add design components
import { Modal } from "antd";

//Components
import TaskForm from "./taskForm";

class QuickAddTask extends Component {
  render() {
    return (
      <div>
        <Modal
          title='Quick Add Task'
          style={{ top: 100 }}
          visible={this.props.modalOfTask}
          onCancel={this.props.handleCancelTask}
          footer={null}
        >
          <TaskForm type='add/today' handleCancelTask={this.props.handleCancelTask} />
        </Modal>
      </div>
    );
  }
}

export default QuickAddTask;
