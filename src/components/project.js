import React, { Component } from "react";
import { connect } from "react-redux";
import SectionForm from "./sectionForm";

//Action Creators
import { fetchSections, onDeleteSection,insertSection,updateSection} from "../actions/sectionActions";
import {fetchTasks} from "../actions/taskActions";
import Section from "./section";


//Design Components
import {
  ProjectIcon,
  LabelIcon,
  PriorityIcon,
  ReminderIcon,
  PlusIcon,
  EditIcon,
  ScheduleIcon,
  CommentIcon,
  MenuIcon,
} from "../svgImages";
import { Form, Input, Button, DatePicker, Typography, Row, Col, Checkbox,Divider} from "antd";
import "./quicktask.css";


const { Title } = Typography;

class Project extends Component {
  state = {
    showform: false,
    showSection: false,
  };

  // onFinish = values => {
  //   // console.log(values);
  // };
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  addTask = () => {
    this.setState({
      showform: !this.state.showform,
    });
  };
  checkbox = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  
  addSection = () => {
    this.setState({
      showSection: !this.state.showSection,
    });
  };

  componentDidMount() {
    this.props.fetchSection();
  }
 

  insertFirstSection = (name) => {
    this.props.insertSection(this.props.match.params.id, name);
    this.setState({
      showSection: !this.state.showSection,
    });
  };

  render() {

    let arrayOfTask = []
    Object.entries(this.props.tasks).forEach(project=>{
      if(project[0] === this.props.match.params.id){ 
        arrayOfTask = project[1];
      }
    })
console.log(arrayOfTask);
    return (
      <>
      {/* project name */}
        <Col md={24}>
          <Title level={3}> {this.props.match.params.name}</Title>
        </Col>
        {/* Task component */}  
        {arrayOfTask.map(task=>(
            <Row style={{ margin: "10px 0px 5px 0px" }}>
            <Col md={15}>
              <Checkbox onChange={this.checkbox} style={{ marginRight: "20px" }} />
              <span style={{ fontSize: 15, color: "black" }}>{task.content}</span>
            </Col>
  
            <Col md={4} offset={5}>
              <Button className='btn-icon'>
                <EditIcon />
              </Button>
              <Button className='btn-icon'>
                <ScheduleIcon />
              </Button>
              <Button className='btn-icon'>
                <CommentIcon />
              </Button>
              <Button className='btn-icon'>
                <MenuIcon />
              </Button>
            </Col>
            <Divider style={{ margin: 0 }} />
          </Row>
           
    ))
        }
       
        <Row>
          <Button
            type='link'
            onClick={this.addTask}
            className={`${this.state.showform ? "displayhide" : ""}`}
          >
            <PlusIcon className='plus-icon' />
            <span className='plus-btn-content'>Add task</span>
          </Button>
        </Row>
        <Form onFinish={this.onFinish()} className={`${!this.state.showform ? "displayhide" : ""}`}>
          <Row style={{ margin: "5px" }}>
            <Col md={20}>
              <Input style={{ lineHeight: "30px" }} />
            </Col>
            <Col md={4}>
              <DatePicker onChange={this.onChange} style={{ lineHeight: "30px" }} />
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <Button htmlType='submit' className='addbtn' 
              style={{ backgroundColor: "#db4035", color: "white", margin: "8px" }}>
                Add task
              </Button>
              <Button className='cancelbtn' onClick={this.addTask}>
                Cancel
              </Button>
            </Col>
            <Col md={4} offset={12} >
              <Button className='btn-icon'>
                <ProjectIcon />
              </Button>
              <Button className='btn-icon'>
                <LabelIcon />
              </Button>
              <Button className='btn-icon'>
                <PriorityIcon />
              </Button>
              <Button className='btn-icon'>
                <ReminderIcon />
              </Button>
            </Col>
          </Row>
        </Form>
        
         {/* <div  onClick={this.addSection}  */}
           <Divider  onClick={this.addSection} >
          <span >Add section</span>
          </Divider>
       {/* Section Form */}
      { !this.state.showSection ? 
        "":<SectionForm  handleCancelSection={this.addSection}
        handleAddSection={(name)=>this.insertFirstSection(name)}/>
      }
  
           {
           this.props.listofsection
                .filter(sectionData => `${sectionData.project_id}` === (this.props.match.params.id))
                .map((sectionData) => (
              <Section  sectionDetail={sectionData}
               deleteSection={()=>this.props.onDeleteSection(sectionData.id)}
               insertNewSection={this.props.insertSection}
               projectId={sectionData.project_id}
               insertUpdatedSection={this.props.updateSection} 
               taskDetail={this.props.tasks}/>
             )
             )}
      </>
    );
  }
}

const mapStateToProps = (state)=> ({ 
             listofsection: state.sectionReducer.section,
             tasks: state.taskReducer.tasks,

            });
            const mapDispatchToProps =(dispatch)=>{
              return {
                  fetchSection: ()=> dispatch(fetchSections()),
                  onDeleteSection: (id)=> dispatch(onDeleteSection(id)),
                  insertSection: (projectId,name)=>dispatch(insertSection(projectId,name)),
                  updateSection: (sectionId,updatedName)=>dispatch(updateSection(sectionId,updatedName)),
                  fetchTasks: ()=> dispatch(fetchTasks()),
                };
          };

export default connect(mapStateToProps, mapDispatchToProps)(Project);
