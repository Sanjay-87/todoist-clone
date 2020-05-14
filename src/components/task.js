import React, { Component } from "react";
import "./task.css";

//Antd Copmponents
import { Checkbox, Divider } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

//Components
import { EditIcon, ScheduleIcon, MenuIcon } from "../svgImages";

const todaysDate = new Date();

class Task extends Component {
  state = { type: "" };

  ontaskStatusChange = event => console.log(event.target.key);

  componentDidMount = () => this.setState({ type: this.props.type });

  render() {
    const taskData = this.props.taskData;
    const { id, content, project_id } = taskData;
    const { projectTitle, projectColor } = this.props.projectData;

    const status =
      taskData.due !== undefined && taskData.due.date === todaysDate.toISOString().slice(0, 10);

    const message = status ? <span style={{ marginLeft: 20, color: "#299438" }}>Today</span> : null;

    return (
      <div className='task'>
        <div
          style={{
            margin: "10px 0px 10px 0px",
            display: "flex",
            justifyContent: "space-between",
            lineHeight: "20px",
          }}
        >
          <Checkbox key={`${project_id}/${id}`} onChange={this.ontaskStatusChange}>
            <span style={{ fontSize: 15, color: "black" }}>{content}</span>
          </Checkbox>
          <div className='task-update-icon'>
            <EditIcon style={{ margin: "0 5px" }} />
            <ScheduleIcon style={{ margin: "0 5px" }} />
            <MenuIcon style={{ margin: "0 5px" }} />
          </div>
        </div>
        <div>
          {this.state.type === "today" ? (
            <span style={{ float: "right", marginBottom: 5 }}>
              <span style={{ marginRight: 10, color: "#808080" }}>{projectTitle}</span>
              <CheckCircleFilled style={{ color: `${projectColor}` }} />
            </span>
          ) : (
            message
          )}
        </div>
        <Divider style={{ margin: 0 }} />
      </div>
    );
  }
}

export default Task;
