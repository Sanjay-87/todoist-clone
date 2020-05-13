import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import colors from "../colors";
import Project from "./project";
import Today from "./today";
import Upcoming from "./upcoming";
import QuickAddTask from "./quickaddtask";
import AddProject from "./projectPopUp";
import { InboxIcon, TodayIcon, UpcomingIcon } from "../svgImages";

//Actions Creatrors
import { fetchProjects, deleteProject } from "../actions/projectActions";
import { fetchTasks } from "../actions/taskActions";

//Antd components
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
  HomeOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class Dashboard extends Component {
  state = {
    inboxId: "",
    collapsed: false,
    modalOfTask: false,
    projectModalVisible: false,
    projectModalData: {},
    menuSelectedItem: "today",
  };

  showPopupTask = () => this.setState({ modalOfTask: true });

  handleCancelTask = () => this.setState({ modalOfTask: false });

  showPopupProject = () =>
    this.setState({ projectModalVisible: true, projectModalData: { type: "addProject" } });

  handleCancelProject = () => this.setState({ projectModalVisible: false });

  onSideBarCollapse = () => this.setState({ collapsed: !this.state.collapsed });

  onUpdateProject = data => {
    const type = data.key.split("/")[0];
    const projectId = parseInt(data.key.split("/")[1]);
    type === "deleteProject"
      ? this.props.deleteProject(projectId)
      : this.setState({ projectModalVisible: true, projectModalData: { type, projectId } });
  };

  onMenuItemSelect = key => this.setState({ menuSelectedItem: key });

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.inboxId === "") {
      this.setState({ inboxId: this.props.projects[0].id });
    }
  }

  componentDidMount() {
    // if (window.innerWidth <= 1200) this.setState({ collapsed: !this.state.collapsed });
    this.props.fetchProjects();
    this.props.fetchTasks();
  }

  render() {
    return (
      <Layout style={{ maxHeight: "100vh", color: "black" }}>
        {/* Menu Bar */}
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
                style={{ color: "#fff", fontSize: 25 }}
                onClick={this.onSideBarCollapse}
              />
              <Link to='/' onClick={() => this.onMenuItemSelect("today")}>
                <HomeOutlined style={{ color: "#fff", fontSize: 25, marginLeft: 15 }} />
              </Link>
            </div>
            <div style={{ display: "flex", marginRight: 40 }}>
              <PlusOutlined
                className='menu-icon'
                style={{ color: "#fff", fontSize: 25, marginRight: 15 }}
                onClick={this.showPopupTask}
              />
              {this.state.modalOfTask ? (
                <QuickAddTask
                  modalOfTask={this.state.modalOfTask}
                  handleCancelTask={this.handleCancelTask}
                />
              ) : null}
              <SettingTwoTone twoToneColor='#fff' style={{ fontSize: 25 }} />
            </div>
          </div>
        </Menu>

        {/* Side Bar */}
        <Layout>
          <Sider
            style={{ backgroundColor: "#fafafa" }}
            trigger={null}
            collapsed={this.state.collapsed}
            width={300}
            collapsedWidth={0}
          >
            <Menu
              mode='inline'
              defaultSelectedKeys={["today"]}
              defaultOpenKeys={["projects"]}
              selectedKeys={[this.state.menuSelectedItem]}
              style={{ backgroundColor: "#fafafa" }}
            >
              <Menu.Item key='inbox'>
                <Link
                  to={`/project/${this.state.inboxId}/name/Inbox`}
                  onClick={() => this.onMenuItemSelect("inbox")}
                >
                  <InboxIcon style={{ color: "#4073ff" }} />
                  <span>Inbox</span>
                </Link>
              </Menu.Item>
              <Menu.Item key='today'>
                <Link to='/' onClick={() => this.onMenuItemSelect("today")}>
                  <TodayIcon style={{ color: "#299438" }} />
                  <span>Today</span>
                </Link>
              </Menu.Item>
              <Menu.Item key='upcoming'>
                <Link to='/upcoming' onClick={() => this.onMenuItemSelect("upcoming")}>
                  <UpcomingIcon style={{ color: "#af38eb" }} />
                  <span>Upcoming</span>
                </Link>
              </Menu.Item>

              {/* Projects SubMenu */}
              <SubMenu key='projects' icon={<ProjectTwoTone />} title='Projects'>
                {this.props.projects
                  .filter(project => project.name !== "Inbox")
                  .map(project => (
                    <Menu.Item key={project.id} className='project-menu-item'>
                      <Link
                        to={`/project/${project.id}/name/${project.name}`}
                        onClick={() => this.onMenuItemSelect(`${project.id}`)}
                      >
                        <CheckCircleFilled style={{ color: colors[`${project.color}`].colorId }} />
                        <span>{project.name}</span>
                      </Link>

                      {/* Project Update Dropdown */}
                      <Dropdown
                        overlay={
                          <Menu style={{ width: 200 }} onClick={this.onUpdateProject}>
                            <Menu.Item key={`editProject/${project.id}`}>
                              <EditOutlined style={{ fontSize: 18 }} />
                              <span>Edit Project</span>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item key={`deleteProject/${project.id}`}>
                              <DeleteOutlined style={{ fontSize: 18 }} />
                              <span>Delete Project</span>
                            </Menu.Item>
                          </Menu>
                        }
                        placement='bottomLeft'
                        trigger={["click"]}
                      >
                        <Button
                          ghost
                          size='small'
                          className='project-update-btn'
                          style={{ borderStyle: "none", float: "right" }}
                          onClick={e => e.stopPropagation()}
                        >
                          <EllipsisOutlined style={{ fontSize: 25, color: "#808080" }} />
                        </Button>
                      </Dropdown>
                    </Menu.Item>
                  ))}
                {/* Add project button */}
                <Button block onClick={this.showPopupProject}>
                  <PlusOutlined />
                  <span>Add Project</span>
                </Button>
                {this.state.projectModalVisible ? (
                  <AddProject
                    projectModalVisible={this.state.projectModalVisible}
                    handleCancelProject={this.handleCancelProject}
                    projectModalData={this.state.projectModalData}
                  />
                ) : null}

                {/* Filters SubMenu */}
              </SubMenu>
              <SubMenu key='Filters' title='Filters' icon={<BookTwoTone />}>
                <Menu.Item key='Filter-1'>filter-1</Menu.Item>
                <Menu.Item key='Filter-2'>filter-2</Menu.Item>
                <Menu.Item key='Filter-3'>filter-3</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          {/* Content */}
          <Content style={{ padding: "15px 10%", backgroundColor: "#fff" }}>
            <Route path='/' exact component={Today} />
            <Route path='/upcoming' exact component={Upcoming} />
            <Route path='/project/:id/name/:name' exact component={Project} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ projects: state.projectReducer.projects });
export default connect(mapStateToProps, { fetchProjects, deleteProject, fetchTasks })(Dashboard);
