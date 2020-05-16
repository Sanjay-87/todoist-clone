import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Typography, Calendar, DatePicker } from 'antd';
import './calender.css';
import Task from './task';
import TaskButton from './taskButton';
import { updateTask } from '../actions/taskActions';
const { Title } = Typography;
const todaysDate = new Date();
class Upcoming extends Component {
  state = {
    Upcomingtasks: [],
    value: moment(todaysDate.toISOString().slice(0, 10)),
    selectedValue: moment(todaysDate.toISOString().slice(0, 10)),
    RescheduleDate: '',
  };
  getListData = (value) => {
    let listData = [];
    if (this.state.Upcomingtasks.includes(value.format('YYYY-MM-DD'))) {
      Object.entries(this.props.tasks).forEach((project) => {
        project[1].forEach((task) => {
          if (
            task.due !== undefined &&
            value.format('YYYY-MM-DD') === task.due.date
          ) {
            listData.push({ content: task.content });
          }
        });
      });
    }
    return listData;
  };
  dateCellRender = (value) => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <span className={`event-${item.type}`}>●</span>
            {item.content}
          </li>
        ))}
      </ul>
    );
  };
  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
    window.location.href = '#movehere';
  };
  onPanelChange = (value) => {
    this.setState({ value });
  };
  onChange = (date, dateString) => {
    // console.log(date, dateString);
    this.setState({ RescheduleDate: dateString });
  };
  render() {
    console.log(this.state.RescheduleDate);
    const overduetasks = [];
    Object.entries(this.props.tasks).forEach((project) => {
      project[1].forEach((task) => {
        if (task.due !== undefined) {
          task.due.date < todaysDate.toISOString().slice(0, 10) &&
            overduetasks.push(task);
        }
      });
    });
    const Upcomingdates = [];
    Object.entries(this.props.tasks).forEach((project) => {
      project[1].forEach((task) => {
        if (task.due !== undefined) {
          task.due.date > todaysDate.toISOString().slice(0, 10) &&
            Upcomingdates.push(task);
          task.due.date > todaysDate.toISOString().slice(0, 10) &&
            !this.state.Upcomingtasks.includes(task.due.date) &&
            this.state.Upcomingtasks.push(task.due.date);
        }
      });
    });
    const { value, selectedValue, Upcomingtasks } = this.state;
    var newdate = new Date(selectedValue.format('YYYY-MM-DD'));
    const selectedtasks = [];
    Object.entries(this.props.tasks).forEach((project) => {
      project[1].forEach((task) => {
        if (task.due !== undefined) {
          task.due.date === selectedValue.format('YYYY-MM-DD') &&
            selectedtasks.push(task);
        }
      });
    });
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
        {/* <div>
          {overduetasks.length !== 0 ? (
            <Title level={4} className="overdue">
              Overdue
              <span style={{ float: 'right' }}>
                <DatePicker onChange={this.onChange} placeholder="Reschedule" />
              </span>
            </Title>
          ) : null}
        </div> */}
        {this.state.RescheduleDate === '' ? (
          <div>
            {overduetasks.length !== 0 ? (
              <Title level={4} className="overdue">
                Overdue
                <span style={{ float: 'right' }}>
                  <DatePicker
                    onChange={this.onChange}
                    placeholder="Reschedule"
                  />
                </span>
              </Title>
            ) : null}
            {overduetasks.map((task) => (
              <Task type="today" taskData={task} date={task.due.date} />
            ))}
          </div>
        ) : (
          overduetasks.map((task) => {
            task.due.date = this.state.RescheduleDate;
            console.log(task.due.date);
            this.props.updateTask(
              task.project_id,
              task.id,
              task.content,
              task.due.date
            );
            return null;
          })
        )}
        {Upcomingtasks.map((date) => {
          var dateString = new Date(date);
          return (
            <div>
              <Title
                level={4}
                style={{ fontSize: 15, marginTop: '50px' }}
              >{`${dateString.toDateString()}`}</Title>
              <div>
                {Upcomingdates.filter((task) => task.due.date === date).map(
                  (task) => {
                    return <Task type="today" taskData={task} date={date} />;
                  }
                )}
              </div>
              <TaskButton type={`add/upcoming/${date}`} date={date} />
            </div>
          );
        })}
        {
          <div id="movehere">
            <Title
              level={4}
              style={{ fontSize: 15, marginTop: '50px' }}
            >{`${newdate.toDateString()}`}</Title>
            {selectedtasks.map((task) => (
              <Task type="today" taskData={task} />
            ))}
            <TaskButton
              type="add/today"
              date={selectedValue.format('YYYY-MM-DD')}
            />
          </div>
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  tasks: state.taskReducer.tasks,
  projects: state.projectReducer.projects,
});
export default connect(mapStateToProps, { updateTask })(Upcoming);