import React, { Component } from "react";
import {ProjectIcon,LabelIcon,PriorityIcon,ReminderIcon ,PlusIcon} from "../svgImages";
import { Form, Input, Button,DatePicker,Typography,Row,Col} from 'antd';
import "./quicktask.css";

const { Title } = Typography;

class Today extends Component {
    state = {
        showform:false,
    };
    onFinish =(values)=>{
        console.log(values);
    }
    onChange = (date, dateString) => {
        console.log(date, dateString);
      };

      addTask=()=>{
        this.setState({
             showform:!this.state.showform,
        })
      }

    render() {  
        return (
            <>
            <Col md={24}>
              <Title level={3}> Today</Title>
              </Col>
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
          </>
        );
    }
}

export default Today;
