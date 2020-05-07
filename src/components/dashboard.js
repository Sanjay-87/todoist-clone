import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import color from "../color";
import Project from "./project";
import Today from "./today";
import Upcoming from "./upcoming";

import { fetchProjects } from "../actions/projectActions";

import { Layout, Menu, Button, Row, Col } from "antd";
import {
    MenuOutlined,
    ContainerTwoTone,
    CarryOutTwoTone,
    ScheduleTwoTone,
    ProjectTwoTone,
    BookTwoTone,
    SettingTwoTone,
    PlusCircleTwoTone,
    LayoutTwoTone,
    CheckCircleFilled,
    PlusOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class Dashboard extends Component {
    state = {
        collapsed: false,
    };

    onCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentDidMount() {
        this.props.fetchProjects();
    }

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
                            <PlusCircleTwoTone twoToneColor='#fa541c' style={{ fontSize: 30 }} />
                        </Col>
                        <Col span={1}>
                            <SettingTwoTone twoToneColor='#fa541c' style={{ fontSize: 30 }} />
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
                            defaultSelectedKeys={["/"]}
                            defaultOpenKeys={["Projects"]}
                            // selectedKeys={[window.location.pathname]}
                            style={{ backgroundColor: "#eaff8f" }}
                        >
                            <Menu.Item key='/inbox'>
                                <Link to='/project/inbox'>
                                    <ContainerTwoTone />
                                    <span>Inbox</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='/'>
                                <Link to='/'>
                                    <CarryOutTwoTone />
                                    <span>Today</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='/upcoming'>
                                <Link to='/upcoming'>
                                    <ScheduleTwoTone />
                                    <span>Upcoming</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu key='Projects' icon={<ProjectTwoTone />} title='Projects'>
                                {this.props.projects
                                    .filter(project => project.name !== "Inbox")
                                    .map(project => (
                                        <Menu.Item key={project.id}>
                                            <Link to={`/project/${project.name}`}>
                                                <CheckCircleFilled
                                                    style={{ color: color[`${project.color}`] }}
                                                />
                                                <span>{project.name}</span>
                                            </Link>
                                        </Menu.Item>
                                    ))}
                                <Button block>
                                    <PlusOutlined />
                                    Add Project
                                </Button>
                            </SubMenu>
                            <SubMenu key='labels' icon={<BookTwoTone />} title='Labels'></SubMenu>
                            <SubMenu
                                key='filters'
                                icon={<LayoutTwoTone />}
                                title='Filters'
                            ></SubMenu>
                        </Menu>
                    </Sider>

                    <Content style={{ backgroundColor: "#f4ffb8" }}>
                        <Route path='/' exact component={Today} />
                        <Route path='/upcoming' exact component={Upcoming} />
                        <Route path='/project/:title' exact component={Project} />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({ projects: state.projectReducer.projects });
export default connect(mapStateToProps, { fetchProjects })(Dashboard);
