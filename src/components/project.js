import React, { Component } from "react";
import { connect } from "react-redux";
import SectionForm from "./sectionForm";
import Task from "./task";
import TaskButton from "./taskButton";
//Action Creators
import {
  fetchSections,
  onDeleteSection,
  insertSection,
  updateSection,
} from "../actions/sectionActions";
import Section from "./section";
import { Typography, Col, Divider } from "antd";
import "./quicktask.css";
const { Title } = Typography;
class Project extends Component {
  state = {
    showform: false,
    showSection: false,
  };
  addSection = () => {
    this.setState({
      showSection: !this.state.showSection,
    });
  };
  componentDidMount() {
    this.props.fetchSection();
  }
  insertFirstSection = name => {
    this.props.insertSection(this.props.match.params.id, name);
    this.setState({
      showSection: !this.state.showSection,
    });
  };
  render() {
    const projectId = this.props.match.params.id;
    const arrayOfTask = [];
    const objectOfSectionTasks = {};
    this.props.tasks[projectId] !== undefined &&
      this.props.tasks[projectId].forEach(task => {
        if (task.section_id === 0) {
          arrayOfTask.push(task);
        } else {
          if (objectOfSectionTasks[`${task.section_id}`] === undefined) {
            objectOfSectionTasks[`${task.section_id}`] = [];
            objectOfSectionTasks[`${task.section_id}`].push(task);
          } else {
            objectOfSectionTasks[`${task.section_id}`].push(task);
          }
        }
      });
    return (
      <>
        {/* project name */}
        <Col md={24}>
          <Title level={3}> {this.props.match.params.name}</Title>
        </Col>
        {/* Task component */}
        {arrayOfTask.map(task => (
          <Task type='project' taskData={task} />
        ))}
        {/* <TaskForm type={`add/project/${projectId}`} /> */}
        <TaskButton type={`add/project/${projectId}`} />
        {/* <div  onClick={this.addSection}  */}
        <Divider onClick={this.addSection}>
          <span>Add section</span>
        </Divider>
        {/* Section Form */}
        {!this.state.showSection ? (
          ""
        ) : (
          <SectionForm
            handleCancelSection={this.addSection}
            handleAddSection={name => this.insertFirstSection(name)}
          />
        )}
        {this.props.listofsection
          .filter(sectionData => `${sectionData.project_id}` === this.props.match.params.id)
          .map(sectionData => (
            <Section
              sectionDetail={sectionData}
              deleteSection={() => this.props.onDeleteSection(sectionData.id)}
              insertNewSection={this.props.insertSection}
              projectId={sectionData.project_id}
              insertUpdatedSection={this.props.updateSection}
              taskDetail={this.props.tasks}
              objectOfSectionTasks={objectOfSectionTasks}
            />
          ))}
      </>
    );
  }
}
const mapStateToProps = state => ({
  listofsection: state.sectionReducer.section,
  tasks: state.taskReducer.tasks,
});
const mapDispatchToProps = dispatch => {
  return {
    fetchSection: () => dispatch(fetchSections()),
    onDeleteSection: id => dispatch(onDeleteSection(id)),
    insertSection: (projectId, name) => dispatch(insertSection(projectId, name)),
    updateSection: (sectionId, updatedName) => dispatch(updateSection(sectionId, updatedName)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Project);
