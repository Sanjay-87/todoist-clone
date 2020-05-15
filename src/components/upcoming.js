import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Typography, Calendar } from "antd";
import "./calender.css";
import Task from "./task";

const { Title } = Typography;

const todaysDate = new Date();

class Upcoming extends Component {
  state = {
    Upcomingtasks: [],
    value: moment(todaysDate.toISOString().slice(0, 10)),
    selectedValue: moment(todaysDate.toISOString().slice(0, 10)),
  };

  getListData = value => {
    Object.entries(this.props.tasks).forEach(project => {
      project[1].forEach(task => {
        if (task.due !== undefined && !this.state.Upcomingtasks.includes(task.due.date)) {
          task.due.date > todaysDate.toISOString().slice(0, 10) &&
            this.state.Upcomingtasks.push(task.due.date);
        }
      });
    });
    let listData = [];
    if (this.state.Upcomingtasks.includes(value.format("YYYY-MM-DD"))) {
      Object.entries(this.props.tasks).forEach(project => {
        project[1].forEach(task => {
          if (task.due !== undefined && value.format("YYYY-MM-DD") === task.due.date) {
            listData.push({ content: task.content });
          }
        });
      });
    }
    return listData;
  };
  dateCellRender = value => {
    const listData = this.getListData(value);
    return (
      <ul className='events'>
        {listData.map(item => (
          <li key={item.content}>
            <span className={`event-${item.type}`}>●</span>
            {item.content}
          </li>
        ))}
      </ul>
    );
  };
  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };
  onPanelChange = value => {
    this.setState({ value });
  };
  render() {
    const overduetasks = [];
    Object.entries(this.props.tasks).forEach(project => {
      project[1].forEach(task => {
        if (task.due !== undefined) {
          task.due.date < todaysDate.toISOString().slice(0, 10) && overduetasks.push(task);
        }
      });
    });
    let Upcomingtasks = this.state.Upcomingtasks;
    const { value, selectedValue } = this.state;
    var newdate = new Date(selectedValue.format("YYYY-MM-DD"));
    return (
      <div>
        <Title level={4}>Upcoming</Title>
        <div>
          <Calendar
            dateCellRender={this.dateCellRender}
            onSelect={this.onSelect}
            onPanelChange={this.onPanelChange}
            value={value}
          />
        </div>
        ​<Title level={4}>Overdue</Title>
        {overduetasks.map(task => (
          <Task type='today' taskData={task} />
        ))}
        {Upcomingtasks.map(date => {
          var dateString = new Date(date);
          return <Title level={4} style={{ fontSize: 15 }}>{`${dateString.toDateString()}`}</Title>;
        })}
        {<Title level={4} style={{ fontSize: 15 }}>{`${newdate.toDateString()}`}</Title>}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tasks: state.taskReducer.tasks,
  projects: state.projectReducer.projects,
});
export default connect(mapStateToProps, {})(Upcoming);
