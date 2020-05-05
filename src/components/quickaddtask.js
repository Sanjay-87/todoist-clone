import { Modal, Button, Form,Input, DatePicker  } from 'antd';
import React,{Component} from 'react'
import "./quicktask.css";

class QuickAddTask extends Component {
  state = { 
      visible: true,
      date:"",
     };

//  onChange =(date,dateString)=>{
//      console.log(date,dateString);
//     //  this.setState({
//     //      date:date,
//     //  })

//  }
 
  onChange=(date, dateString)=> {
    console.log(date, dateString);
  }
  render() {
    return (
      <div>
        <Modal
          title="Quick Add Task"
          style={{ top: 60 }}
          visible={this.props.model}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
          footer = {null}>
              <Form>
                  <div className="add-quick-task">
                  <Input className="input-fild"/>
                  <DatePicker onChange={this.onChange} /><br /> 
                  </div>
                  <div>

                  </div>

              </Form>

        </Modal>
      </div>
    );
  }
}

export default QuickAddTask;





