import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import colors from "../colors";

//Antd Components
import { CheckCircleFilled, CloseOutlined } from "@ant-design/icons";
import { Modal, Button, Input, Select, Switch } from "antd";

//Action Creators
import { addProject, editProject } from "../actions/projectActions";
const { Option } = Select;

class AddProject extends Component {
  state = {
    title: "",
    colorId: 47,
    addToFavorite: false,
    type: "",
  };

  onTitleChange = event => this.setState({ title: event.target.value });

  onColorChange = value => this.setState({ colorId: value });

  onAddToFavorite = value => this.setState({ addToFavorite: value });

  onAddOrSavepoject = () => {
    this.state.type === "addProject"
      ? this.props.addProject(this.state.title)
      : this.props.editProject(this.state.projectId, this.state.title);
    this.props.handleCancelProject();
  };

  onCancelProject = () => this.props.handleCancelProject();

  componentDidMount = () => {
    const { type } = this.props.projectModalData;
    if (type === "addProject") {
      this.setState({ type });
    } else {
      const { projectId } = this.props.projectModalData;
      const project = this.props.projects.filter(project => project.id === projectId)[0];
      this.setState({ type, projectId, title: project.name });
    }
  };

  render() {
    return (
      <Modal
        title={
          <span style={{ fontSize: 20, fontWeight: 800, color: "black" }}>
            {this.state.type === "addProject" ? "Add project" : "Edit Project"}
          </span>
        }
        visible={this.props.projectModalVisible}
        bodyStyle={{ padding: "20px 24px" }}
        style={{ top: 100 }}
        width={400}
        onCancel={this.onCancelProject}
        closeIcon={<CloseOutlined style={{ fontSize: 20 }} />}
        footer={[
          <Button key='cancel-btn' onClick={this.onCancelProject} className='cancelbtn'>
            Cancel
          </Button>,
          <Button
            key='add-save-btn'
            style={{ backgroundColor: "#db4035", color: "white" }}
            onClick={this.onAddOrSavepoject}
            disabled={this.state.title === ""}
          >
            {this.state.type === "addProject" ? "Add" : "Save"}
          </Button>,
        ]}
      >
        {/* Project Title */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: "black", marginBottom: 10 }}>
            Project name
          </div>
          <Input
            value={this.state.title}
            placeholder='Enter Project Title.....'
            onChange={this.onTitleChange}
            size='middle'
            style={{ borderRadius: 5 }}
          />
        </div>

        {/* Color Selector */}
        <div className='project-color' style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: "black", marginBottom: 10 }}>
            Project color
          </div>
          <Select
            size='middle'
            defaultValue='47'
            onChange={this.onColorChange}
            style={{ width: "100%", borderRadius: 5 }}
          >
            {Object.entries(colors).map(color => (
              <Option key={color[1].colorId} value={color[0]}>
                <CheckCircleFilled style={{ color: color[1].colorId }} />
                <span style={{ marginLeft: 10 }}>{color[1].name}</span>
              </Option>
            ))}
          </Select>
        </div>

        {/* Add to favorite switch */}
        <div>
          <Switch
            onChange={this.onAddToFavorite}
            style={{ backgroundColor: this.state.addToFavorite ? "#db4035" : "#b8b8b8" }}
          />
          <span style={{ fontWeight: 800, color: "black", marginLeft: 10 }}>Add to favorities</span>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({ projects: state.projectReducer.projects });
export default connect(mapStateToProps, { addProject, editProject })(AddProject);
  