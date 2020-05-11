import React, { Component } from "react";
import "./addProject.css";

import { Modal, Button, Input, Switch, Typography, Select, Badge } from "antd";
const { Title } = Typography;

const children = [];
const { Option } = Select;
const color = [
  "Berry Red",
  "Red",
  "Orange",
  "Yellow",
  "Olive Green",
  "Lime Green",
  "Green",
  "Mint Green",
  "Teal",
  "Sky Blue",
  "Light Blue",
  "Blue",
  "Grape",
  "Violet",
  "Lavender",
  "Megenta",
  "Salmon",
  "Charcoal",
  "Grey",
  "Taupe",
];
const colorCode = [
  "#b93d5f",
  "#db4035",
  "#f99833",
  "#FAD039",
  "#afb83b",
  "#9ad672",
  "#469538",
  "#6accbb",
  "#258fad",
  "#14aaf5",
  "#96c3eb",
  "#4270FC",
  "#8d6dfa",
  "#b36beb",
  "#eb96eb",
  "#e05494",
  "#f68c84",
  "#808080",
  "#b8b8b8",
  "#ccac93",
];
for (let i = 0; i < color.length; i++) {
  children.push(
    <Option key={colorCode[i]}>
      <Badge color={colorCode[i]} text={color[i]} />
    </Option>
  );
}

class AddProject extends Component {
  state = {
    size: "default",
  };

  addProject = () => {
    console.log("added");
  };

  handleChange = value => {
    console.log(`Selected: ${value}`);
  };
  onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  render() {
    const { size } = this.state;
    return (
      <Modal
        title={<Title level={4}>Add project</Title>}
        visible={this.props.modalOfProject}
        style={{ top: 100 }}
        onCancel={this.props.handleCancelProject}
        footer={[
          <Button onClick={this.props.handleCancelProject} className='cancelbtn'>
            Cancel
          </Button>,
          <Button onClick={this.props.handleCancelProject} className='addbtn'>
            Add
          </Button>,
        ]}
      >
        <div className='project-modal-body'>
          <div className='project-input'>
            <Title level={4}> Project name</Title>
            <Input />
          </div>

          <div className='project-color'>
            <Title level={4}>Project color</Title>
            <Select
              size={size}
              defaultValue='Charcoal'
              onChange={this.handleChange}
              style={{ width: "100%" }}
            >
              {children}
            </Select>
          </div>

          <div className='add-to-favorate'>
            <Switch onChange={this.onChange} />
            <span>Add to favorities</span>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddProject;
