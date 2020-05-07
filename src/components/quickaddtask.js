import { Modal, Form, Input, DatePicker } from "antd";
import React, { Component } from "react";
import "./quicktask.css";
import { TagOutlined, UnorderedListOutlined } from "@ant-design/icons";

class QuickAddTask extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div>
        <Modal
          title="Quick Add Task"
          style={{ top: 60 }}
          visible={this.props.modalOfTask}
          onCancel={this.props.handleCancelTask}
          footer={null}
        >
          <Form>
            <div className="add-quick-task">
              <Input className="input-fild" />
              <DatePicker onChange={this.onChange} />
            </div>
            <div className="add-quick-task-footer">
              <button
                type="submit"
                className="add-task-btn"
                onClick={this.props.handleCancelTask}
              >
                Add Task
              </button>
              <button
                className="cancle-task-btn"
                onClick={this.props.handleCancelTask}
              >
                Cancle
              </button>
              <UnorderedListOutlined
                style={{ fontSize: "23px", marginRight: "10px" }}
              />
              <TagOutlined style={{ fontSize: "23px" }} />
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default QuickAddTask;
