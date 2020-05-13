import React, { Component } from "react";
import {
  ProjectIcon,
  LabelIcon,
  PriorityIcon,
  ReminderIcon,
  PlusIcon,
} from "../svgImages";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Row,
  Col,
  Menu,
  Dropdown,
  Typography
} from "antd";

import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import "./quicktask.css";

const { Title } = Typography;
class Section extends Component {
  state = {
    showform: false,
    showSection: false,
    input:"",
    showName: false,
    newInput:"",
  };

  onFinish = (values) => {
    // console.log(values);
  };
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  addTask = () => {
    this.setState({
      showform: !this.state.showform,
    });
  };

  addSection = () => {
    this.setState({
      showSection: !this.state.showSection,
    });
  };

  updateInput = (e)=>{
    //   console.log(e.target.value)
    //   console.log("jhsd");
      this.setState({
          input: e.target.value,
      });
  };
  
  updateNewInput = (e)=>{
      // console.log(e.target.value)
      // console.log("jhsd");
      this.setState({
        newInput: e.target.value,
      });
  };

  insertSection =()=>{
   
        let sectionName = this.state.input;
        this.setState({
          input:''
        });
      console.log(sectionName);
      this.props.insertNewSection(this.props.projectId,sectionName);

      this.setState({
        showSection: !this.state.showSection,
      });

  }
  updateSection =()=>{
   
    let editSectionName = this.state.newInput;
  console.log(editSectionName);
  this.props.insertUpdatedSection(this.props.sectionDetail.id,editSectionName);

  this.setState({
    showName: !this.state.showName,
  });

}

  onEditSection=()=>{
   this.setState({
    showName:!this.state.showName,
   }) 
  }

  render() {
      
    const menu = (
      <Menu style={{ width: 200 }}>
        <Menu.Item key="Edit Section" onClick={this.onEditSection}>
          <EditOutlined style={{ fontSize: 18 }} />
          <span>Edit Section</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="Delete Section" onClick={this.props.deleteSection}>
          <DeleteOutlined style={{ fontSize: 18 }} />
          <span>Delete Section</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <>
      <Row className={`${this.state.showName?"displayhide": ""}`}>
          <Col md={23} >
          <Title level={4} >
            {this.props.sectionDetail.name}</Title>
          </Col>
          <Col md={1}>
          <Dropdown overlay={menu} trigger={["click"]}>
          <Button
            ghost
            size="small"
            className="project-update-btn"
            style={{ borderStyle: "none"}}
            onClick={(e) => e.stopPropagation()}
          >
            <EllipsisOutlined
              style={{ fontSize: 25, color: "#808080" }}
            />
          </Button>
        </Dropdown>
          </Col>
      </Row>
      <Form className={`${!this.state.showName ? "displayhide" : ""}`}
        >
          <Row style={{ margin: "5px" }}>
            <Input style={{ lineHeight: "30px" }} 
             value={this.state.newInput}
              onChange={this.updateNewInput} />
          </Row>
          <Row>
            <Col md={8}>
              <Button
                htmlType="submit"
                style={{ backgroundColor: "#db4035", color: "white", margin: "8px" }}
                disabled={this.state.newInput === ""}
                onClick={this.updateSection}
              >
                Save
              </Button>
              <Button className="cancelbtn" onClick={this.onEditSection}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>

        <Row>
          <Button
            type="link"
            onClick={this.addTask}
            className={`${this.state.showform ? "displayhide" : ""}`}
          >
            <PlusIcon className="plus-icon" />
            <span className="plus-btn-content">Add task</span>
          </Button>
        </Row>
        <Form
          onFinish={this.onFinish()}
          className={`${!this.state.showform ? "displayhide" : ""}`}
        > 
          <Row style={{ margin: "5px" }}>
            <Col md={20}>
              <Input style={{ lineHeight: "30px" }} />
            </Col>
            <Col md={4}>
              <DatePicker
                onChange={this.onChange}
                style={{ lineHeight: "30px" }}
              />
            </Col>
          </Row>    

          <Row>
            <Col md={8}>
              <Button
                htmlType="submit"
                style={{ backgroundColor: "#db4035", color: "white", margin: "8px" }}
              >
                Add task
              </Button>
              <Button className="cancelbtn" onClick={this.addTask}>
                Cancel
              </Button>
            </Col>
            <Col md={4} offset={12}>
              <Button className="btn-icon">
                <ProjectIcon />
              </Button>
              <Button className="btn-icon">
                <LabelIcon />
              </Button>
              <Button className="btn-icon">
                <PriorityIcon />
              </Button>
              <Button className="btn-icon">
                <ReminderIcon />
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="add-section" onClick={this.addSection}>
          <hr />
          <span className="add-section-text">Add section</span>
          <hr />
        </div>
        <Form className={`${!this.state.showSection ? "displayhide" : ""}`}
        >
          <Row style={{ margin: "5px" }}>
            <Input style={{ lineHeight: "30px" }} 
             value={this.state.input}
              onChange={this.updateInput} />
          </Row>
          <Row>
            <Col md={8}>
              <Button
                htmlType="submit"
                onClick={this.insertSection}
                disabled={this.state.input === ""}
                style={{ backgroundColor: "#db4035", color: "white", margin: "8px" }}
              >
                Add Section
              </Button>
              <Button className="cancelbtn" onClick={this.addSection}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default Section;
