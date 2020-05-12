import React, { Component } from "react";
import {ProjectIcon,LabelIcon,PriorityIcon,ReminderIcon ,PlusIcon,EditIcon,ScheduleIcon,CommentIcon,
  MenuIcon} from "../svgImages";
  import { Form, Input, Button,DatePicker,Typography,Row,Col,Checkbox} from 'antd';
import { connect } from "react-redux";
import { fetchSections ,onDeleteSection,insertSection} from "../actions/sectionActions";

import Section from './section';


const { Title } = Typography;

class Project extends Component {
  state = { 
    showform:false,
    showSection:false,
};

onFinish =(values)=>{
    // console.log(values);
}
onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  addTask=()=>{
    this.setState({
         showform:!this.state.showform,
    })
  }
  checkbox=(e) =>{
    console.log(`checked = ${e.target.checked}`)
  }
  addSection=()=>{
    this.setState({
        showSection:!this.state.showSection,
   })
  }
    componentDidMount() {
      this.props.fetchSection();
    }
     
    render() {  

        return (
            <>
           {console.log(this.props.listofsection)}
            <Col md={24}>
              <Title level={3}> {this.props.match.params.name}</Title>
              </Col>
             
              <Row>
                <Col  md={15} >
                <Checkbox onChange={this.checkbox} style={{marginRight:"20px"}}/>
                <span style={{color:"#333"}}>task name</span>
                
                </Col>
                
                <Col md={4} offset={5}>
                   <Button className="btn-icon"> <EditIcon/></Button>
                  <Button className="btn-icon"><ScheduleIcon/></Button>
                  <Button className="btn-icon"><CommentIcon/></Button>
                  <Button className="btn-icon"><MenuIcon/></Button>       
                </Col>
              </Row>
            <Row>
            <Button  type="link" onClick={this.addTask} 
            className={`${this.state.showform ? "displayhide" : ""}` }>
             <PlusIcon  className="plus-icon"/>   
            <span className="plus-btn-content">Add task</span>
            </Button>
            </Row> 
            <Form
            onFinish={this.onFinish()} className={`${!this.state.showform ? "displayhide" : ""}`}
          >
            <Row style={{margin:"5px"}}>
                <Col md={20}>
                <Input style={{lineHeight:"30px"}}/>
                </Col>
                <Col md={4}>
                <DatePicker onChange={this.onChange} style={{lineHeight:"30px"}}/>
                </Col>
            </Row>
      
            <Row >
            <Col md={8}>
            <Button htmlType="submit" className="addbtn" style={{margin:"8px"}}>
                Add task
              </Button>
            <Button className="cancelbtn" onClick={this.addTask}>
                Cancel
            </Button>
            </Col>
            <Col md={4} offset={12}>
                 <Button className="btn-icon"><ProjectIcon/></Button>
                 <Button className="btn-icon"><LabelIcon/></Button>
                 <Button className="btn-icon"><PriorityIcon/></Button>
                 <Button className="btn-icon"><ReminderIcon/></Button>
             </Col>
             </Row>
          </Form>
          <div className="add-section" onClick={this.addSection}>
          <hr />
          <span className="add-section-text">Add section</span>
          <hr/>
          </div>
          <Form className={`${!this.state.showSection ? "displayhide" : ""}` }>
          <Row style={{margin:"5px"}}>
                <Input style={{lineHeight:"30px"}}/>
            </Row>
            <Row >
            <Col md={8}>
            <Button htmlType="submit" className="addbtn" style={{margin:"8px"}}>
                Add task
              </Button>
            <Button className="cancelbtn"  onClick={this.addSection}>
                Cancel
            </Button>
            </Col>
            </Row>
            </Form>

           {
           this.props.listofsection
                .filter(sectionData => `${sectionData.project_id}` === (this.props.match.params.id))
                .map((sectionData) => (
              <Section  sectionDetail={sectionData}
               deleteSection={()=>this.props.onDeleteSection(sectionData.id)}
               insertNewSection={this.props.insertSection}
               projectId={sectionData.project_id} />
             )
             )}
          </>
        );
    }
}

const mapStateToProps = (state)=> ({ 
             listofsection: state.sectionReducer.section,

            });
            const mapDispatchToProps =(dispatch)=>{
              return {
                  fetchSection: ()=> dispatch(fetchSections()),
                  onDeleteSection: (id)=> dispatch(onDeleteSection(id)),
                  insertSection: (projectId,name)=>dispatch(insertSection(projectId,name))
              };
          };
export default connect(mapStateToProps, mapDispatchToProps)(Project);