import React, { Component } from "react";
import { connect } from "react-redux";
import "./task.css";

//Antd Copmponents
import { Checkbox, Divider, Modal } from "antd";
import { CheckCircleFilled, DeleteOutlined } from "@ant-design/icons";

//Components
import { EditIcon, ScheduleIcon } from "../svgImages";

//Components
import colors from "../colors";
import TaskForm from "./taskForm";

import { deleteTask, closeTask } from "../actions/taskActions";

const { confirm } = Modal;
const todaysDate = new Date();

class Task extends Component {
  state = { taskEditForm: false };

  onTaskStatusChange = () => this.props.closeTask(this.props.taskData);

  onTaskEdit = () => this.setState({ taskEditForm: !this.state.taskEditForm });

  OnCancelTask = () => this.setState({ taskEditForm: !this.state.taskEditForm });

  onTaskDelete = () =>
    this.props.deleteTask(this.props.taskData.project_id, this.props.taskData.id);

  render() {
    const taskData = this.props.taskData;
    const { id, content, project_id } = taskData;

    const projectData = this.props.projects.filter(project => project.id === project_id)[0];
    const projectColor = colors[`${projectData.color}`].colorId;
    const projectTitle = projectData.name;

    const status =
      taskData.due !== undefined && taskData.due.date === todaysDate.toISOString().slice(0, 10);
    const message = status ? <span style={{ marginLeft: 20, color: "#299438" }}>Today</span> : null;

    return (
      <React.Fragment>
        {!this.state.taskEditForm ? (
          <div className='task'>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                lineHeight: "20px",
              }}
            >
              <Checkbox
                style={{ margin: "8px 0px 5px 0px" }}
                key={`${project_id}/${id}`}
                onClick={this.onTaskStatusChange}
              >
                <span style={{ fontSize: 15, color: "black" }}>{content}</span>
              </Checkbox>
              <div className='task-update-icon'>
                <EditIcon style={{ margin: "0 10px" }} onClick={this.onTaskEdit} />
                <ScheduleIcon style={{ margin: "0 10px" }} />
                <DeleteOutlined style={{ fontSize: 18 }} onClick={this.onTaskDelete} />
              </div>
            </div>
            <div>
              {this.props.type === "today" ? (
                <span style={{ float: "right", marginBottom: 5 }}>
                  <span style={{ marginRight: 10, color: "#808080" }}>{projectTitle}</span>
                  <CheckCircleFilled style={{ color: `${projectColor}` }} />
                </span>
              ) : (
                message
              )}
            </div>
          </div>
        ) : (
          <TaskForm type='edit' taskData={taskData} handleCancelTask={this.OnCancelTask} />
        )}
        <Divider style={{ margin: 0 }} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.taskReducer.tasks,
  projects: state.projectReducer.projects,
});
export default connect(mapStateToProps, { deleteTask, closeTask })(Task);
