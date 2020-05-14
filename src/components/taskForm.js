import React, { Component } from "react";
import { connect } from "react-redux";

//Ant design components
import { Form, Input, Button, DatePicker, Row, Col, Menu, Dropdown } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

//Components
import { ProjectIcon, PriorityIcon } from "../svgImages";
import colors from "../colors";

//Actions
import { createTask } from "../actions/taskActions";

class TaskForm extends Component {
  state = { projectId: "", sectionId: "", taskId: "", taskName: "", dueDate: "" };

  onTaskNameChange = event => this.setState({ taskName: event.target.value });

  onProjectSelect = project => this.setState({ projectId: project.key });

  onDateSelect = (date, dateString) => this.setState({ dueDate: dateString });

  onCancelTask = () => this.props.handleCancelTask();

  onAddOrSaveTask = () => {
    const taskData = { content: this.state.taskName };
    if (this.state.dueDate !== "") taskData.due_date = this.state.dueDate;
    if (this.state.sectionId !== "") {
      taskData.section_id = parseInt(this.state.sectionId);
    } else if (this.state.projectId !== "") {
      taskData.project_id = parseInt(this.state.projectId);
    }
    this.props.createTask(taskData);
    this.props.handleCancelTask();
  };

  render() {
    const projectMenu = (
      <Menu selectedKeys={[this.state.projectId]} onClick={this.onProjectSelect}>
        {this.props.projects.map(project => (
          <Menu.Item key={`${project.id}`}>
            <CheckCircleFilled style={{ color: colors[`${project.color}`].colorId }} />
            {project.name}
          </Menu.Item>
        ))}
      </Menu>
    );

    const priorityMenu = (
      <Menu>
        <Menu.Item>priority-1</Menu.Item>
      </Menu>
    );

    return (
      <Form>
        <Row style={{ margin: "5px 0" }}>
          <Col flex='auto'>
            <Input size='large' value={`${this.state.taskName}`} onChange={this.onTaskNameChange} />
          </Col>
          <Col>
            <DatePicker size='large' onChange={this.onDateSelect} />
          </Col>
        </Row>

        <Row style={{ margin: "5px 0", display: "flex", justifyContent: "space-between" }}>
          <div>
            <Button
              htmlType='submit'
              style={{ marginRight: "5px", backgroundColor: "#db4035", color: "white" }}
              onClick={this.onAddOrSaveTask}
              disabled={this.state.taskName === ""}
            >
              Add task
            </Button>
            <Button onClick={this.onCancelTask}>Cancel</Button>
          </div>
          <div>
            <Dropdown.Button
              overlay={projectMenu}
              trigger={["click"]}
              icon={<ProjectIcon />}
            ></Dropdown.Button>

            <Dropdown.Button
              overlay={priorityMenu}
              trigger={["click"]}
              icon={<PriorityIcon />}
            ></Dropdown.Button>
          </div>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = state => ({ projects: state.projectReducer.projects });
export default connect(mapStateToProps, { createTask })(TaskForm);
