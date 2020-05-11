import { Form, Input, Button,DatePicker,Modal,Row,Col} from 'antd';
import React, { Component } from "react";
import "./quicktask.css";
import {ProjectIcon,LabelIcon,PriorityIcon,ReminderIcon } from "../svgImages";


class QuickAddTask extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div>
        <Modal
          title="Quick Add Task"
          style={{ top: 50}}
          visible={this.props.modalOfTask}
          onCancel={this.props.handleCancelTask}
          footer={null}
        >
           <Form>
              <Row style={{margin:"5px"}}>
                  <Col md={18}>
                  <Input style={{lineHeight:"30px"}}/>
                  </Col>
                  <Col md={6}>
                  <DatePicker onChange={this.onChange} style={{lineHeight:"30px"}}/>
                  </Col>
              </Row>

              <Row >
              <Col md={14}>  
              <Button htmlType="submit" className="addbtn" style={{margin:"5px"}}onClick={this.props.handleCancelTask}>
                  Add task
                </Button>
              <Button className="cancelbtn"  onClick={this.props.handleCancelTask}>
                  Cancel
              </Button>
              </Col>
              <Col md={10} >
                  <Button className="btn-icon"><ProjectIcon/></Button>
                  <Button className="btn-icon"><LabelIcon/></Button>
                  <Button className="btn-icon"><PriorityIcon/></Button>
                  <Button className="btn-icon"><ReminderIcon/></Button>
              </Col>
              </Row>
              </Form>
        </Modal>
      </div>
    );
  }
}

export default QuickAddTask;



