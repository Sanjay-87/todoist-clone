import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import color from "../color";
import Project from "./project";
import Today from "./today";
import Upcoming from "./upcoming";
import QuickAddTask from "./quickaddtask";
import AddProject from "./addProject";
import { InboxIcon, TodayIcon, UpcomingIcon } from "../svgImages";

import { fetchProjects } from "../actions/projectActions";

import { Layout, Menu, Button, Dropdown } from "antd";
import {
  MenuOutlined,
  ProjectTwoTone,
  SettingTwoTone,
  CheckCircleFilled,
  PlusOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  EditOutlined,
  BookTwoTone,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class Dashboard extends Component {
  state = {
    collapsed: false,
    modalOfTask: false,
    modalOfProject: false,
  };

  showPopupTask = () => {
    this.setState({
      modalOfTask: true,
    });
  };

  showPopupProject = () => {
    this.setState({ modalOfProject: true });
  };

  handleCancelTask = () => {
    this.setState({ modalOfTask: false });
  };

  handleCancelProject = () => {
    this.setState({ modalOfProject: false });
  };

  onCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  onDeleteProject = e => {
    console.log(e);
    console.log("deleted");
  };

  componentDidMount() {
    if (window.innerWidth <= 1200) this.setState({ collapsed: !this.state.collapsed });
    this.props.fetchProjects();
  }

  render() {
    const menu = (
      <Menu style={{ width: 200 }}>
        <Menu.Item key='Edit Project' onClick={this.onDeleteProject}>
          <EditOutlined style={{ fontSize: 18 }} />
          <span>Edit Project</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='Delete Project' onClick={this.onDeleteProject}>
          <DeleteOutlined style={{ fontSize: 18 }} />
          <span>Delete Project</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Menu style={{ backgroundColor: "#db4c3f" }}>
          <div
            style={{
              height: 40,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: 40 }}>
              <MenuOutlined
                className='menu-icon'
                style={{ color: "#fff", fontSize: 25 }}
                onClick={this.onCollapsed}
              />
            </div>
            <div style={{ display: "flex", marginRight: 40 }}>
              <PlusOutlined
                className='menu-icon'
                style={{ color: "#fff", fontSize: 25, margin: "auto 10px" }}
                onClick={this.showPopupTask}
              />
              {this.state.modalOfTask ? (
                <QuickAddTask
                  modalOfTask={this.state.modalOfTask}
                  handleCancelTask={this.handleCancelTask}
                />
              ) : null}

              <SettingTwoTone twoToneColor='#fff' style={{ margin: "auto 10px", fontSize: 25 }} />
            </div>
          </div>
        </Menu>

        <Layout>
          <Sider
            style={{ backgroundColor: "#fafafa" }}
            trigger={null}
            collapsed={this.state.collapsed}
            width={300}
            collapsedWidth={window.innerWidth <= 992 ? 0 : 80}
          >
            <Menu
              mode='inline'
              defaultSelectedKeys={["/"]}
              defaultOpenKeys={["Projects"]}
              style={{ backgroundColor: "#fafafa" }}
            >
              <Menu.Item key='/inbox'>
                <Link to='/project/inbox'>
                  <InboxIcon style={{ color: "#4073ff" }} />
                  <span>Inbox</span>
                </Link>
              </Menu.Item>
              <Menu.Item key='/'>
                <Link to='/'>
                  <TodayIcon style={{ color: "#299438" }} />
                  <span>Today</span>
                </Link>
              </Menu.Item>
              <Menu.Item key='/upcoming'>
                <Link to='/upcoming'>
                  <UpcomingIcon style={{ color: "#af38eb" }} />
                  <span>Upcoming</span>
                </Link>
              </Menu.Item>
              <SubMenu key='Projects' icon={<ProjectTwoTone />} title='Projects'>
                {this.props.projects
                  .filter(project => project.name !== "Inbox")
                  .map(project => (
                    <Menu.Item key={project.id} className='project-menu-item'>
                      <Link to={`/project/${project.id}/name/${project.name}`}>
                        <CheckCircleFilled style={{ color: color[`${project.color}`] }} />
                        <span>{project.name}</span>
                        <Dropdown overlay={menu} placement='bottomLeft' trigger={["click"]}>
                          <Button
                            ghost
                            size='small'
                            className='project-update-btn'
                            style={{ borderStyle: "none", float: "right" }}
                            onClick={e => e.stopPropagation()}
                          >
                            <EllipsisOutlined
                              style={{ fontSize: 25, color: "#808080" }}
                              // onClick={e => e.stopPropagation()}
                            />
                          </Button>
                        </Dropdown>
                      </Link>
                    </Menu.Item>
                  ))}
                <Button block onClick={this.showPopupProject}>
                  <PlusOutlined />
                  <span>Add Project</span>
                </Button>
                {this.state.modalOfProject ? (
                  <AddProject
                    modalOfProject={this.state.modalOfProject}
                    handleCancelProject={this.handleCancelProject}
                  />
                ) : null}
              </SubMenu>
              <SubMenu key='Filters' title='Filters' icon={<BookTwoTone />}>
                <Menu.Item key='Filter-1'>filter-1</Menu.Item>
                <Menu.Item key='Filter-2'>filter-2</Menu.Item>
                <Menu.Item key='Filter-3'>filter-3</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "80px 55px 84px", backgroundColor: "#fff" }}>
            <Route path='/' exact component={Today} />
            <Route path='/upcoming' exact component={Upcoming} />
            <Route path='/project/:id/name/:name' exact component={Project}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ projects: state.projectReducer.projects });
export default connect(mapStateToProps, { fetchProjects })(Dashboard); 