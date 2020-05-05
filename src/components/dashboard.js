import React, { Component } from "react";

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
                            defaultSelectedKeys={["Today"]}
                            defaultOpenKeys={["Projects"]}
                            style={{ backgroundColor: "#eaff8f" }}
                        >
                            <Menu.Item key='Inbox' icon={<ContainerTwoTone />}>
                                Inbox
                            </Menu.Item>
                            <Menu.Item key='Today' icon={<CarryOutTwoTone />}>
                                Today
                            </Menu.Item>
                            <Menu.Item key='Upcoming' icon={<ScheduleTwoTone />}>
                                Upcoming
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
                    <Content style={{ backgroundColor: "#f4ffb8" }}>content</Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;
