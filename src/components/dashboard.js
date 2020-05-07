import React, { Component } from "react";
import QuickAddTask from "./quickaddtask";
import AddProject from "./addProject";
import InboxTask from "./inboxTask";

import { Layout, Menu, Button, Row, Col } from "antd";
import {
    MenuOutlined,
    InboxOutlined,
    DesktopOutlined,
    ContainerOutlined,
    ProjectOutlined,
    SettingFilled,
    PlusOutlined,
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
        this.setState({
          modalOfProject: true,
        });
      };


  handleCancelTask = e => {
    console.log(e);
    this.setState({
        modalOfTask: false,
    });
  };

  handleCancelProject = e => {
    console.log(e);
    this.setState({
        modalOfProject: false,
    });
  };

  onCollapsed = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
};

    render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Menu style={{ backgroundColor: "#d3f261" }}>
                    <Row style={{ margin: 5 }}>
                        <Col span={1} offset={1}>
                            <Button type='primary' onClick={this.onCollapsed} ghost>
                                <MenuOutlined />
                            </Button>
                        </Col>
                        <Col span={1} offset={20}>
                            <PlusOutlined 
                                style={{
                                    color: "#613400",
                                    fontSize: "30px",
                                }}
                                onClick={this.showPopupTask}
                            />
                                   {this.state.modalOfTask ? (<QuickAddTask modalOfTask={this.state.modalOfTask} 
                                   handleCancelTask={this.handleCancelTask} />) : ("")}
                        </Col>
                        <Col span={1}>
                            <SettingFilled
                                style={{
                                    color: "#613400",
                                    fontSize: "30px",
                                }}
                            />
                        </Col>
                    </Row>
                </Menu>
                <Layout>
                    <Sider
                        style={{ backgroundColor: "#eaff8f" }}
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        width={250}
                    >
                        <Menu
                            mode='inline'
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["Projects"]}
                            style={{ backgroundColor: "#eaff8f" }}
                        >
                            <Menu.Item key='Inbox' icon={<InboxOutlined />}>
                                Inbox
                            </Menu.Item>
                            <Menu.Item key='Today' icon={<DesktopOutlined />}>
                                Today
                            </Menu.Item>
                            <Menu.Item key='Upcoming' icon={<ContainerOutlined />}>
                                Upcoming
                            </Menu.Item>
                            <SubMenu key='Projects' icon={<ProjectOutlined />} title='Projects' >
                                <Menu.Item key='5'>project 1 </Menu.Item>
                                <Menu.Item key='6'>Project 2</Menu.Item>
                                <Menu.Item key='7'>Project 2</Menu.Item>
                                <Menu.Item icon={<PlusOutlined />} 
                                onClick={this.showPopupProject}> Add Project</Menu.Item>
                                {this.state.modalOfProject ? (<AddProject modalOfProject={this.state.modalOfProject} 
                                    handleCancelProject={this.handleCancelProject} />):""}
                            </SubMenu>
                            <SubMenu
                                key='Labels'
                                icon={<ProjectOutlined />}
                                title='Labels'
                            ></SubMenu>
                            <SubMenu key='Filters' icon={<ProjectOutlined />} title='Filters'>
                                <Menu.Item key='5'>Option 5</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ backgroundColor: "#f4ffb8" }}>
                        <InboxTask/>
                        </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;
