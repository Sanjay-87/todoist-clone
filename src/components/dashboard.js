import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Project from "./project";
import Today from "./today";
import Upcoming from "./upcoming";

import { Layout, Menu, Button, Row, Col, Icon } from "antd";
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
                            style={{ backgroundColor: "#eaff8f" }}
                        >
                            <Menu.Item key='/inbox'>
                                <Link to='/inbox'>
                                    <span>Inbox</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='/'>
                                <Link>
                                    <span>Today</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='/upcoming'>
                                <Link>
                                    <span>Upcoming</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu key='Projects' icon={<ProjectTwoTone />} title='Projects'>
                                <Menu.Item key='5'>project 1</Menu.Item>
                                <Menu.Item key='6'>Project 2</Menu.Item>
                                <Menu.Item key='7'>Project 2</Menu.Item>
                            </SubMenu>
                            <SubMenu key='Labels' icon={<BookTwoTone />} title='Labels'></SubMenu>
                            <SubMenu
                                key='Filters'
                                icon={<LayoutTwoTone />}
                                title='Filters'
                            ></SubMenu>
                        </Menu>
                    </Sider>

                    <Content style={{ backgroundColor: "#f4ffb8" }}>
                        <Route key='/' path='/' exact component={Today} />
                        <Route key='/inbox' path='/inbox' exact component={Project} />
                        <Route key='/upcoming' path='/upcoming' exact component={Upcoming} />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;
