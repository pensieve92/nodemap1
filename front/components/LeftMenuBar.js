import React from 'react';
import {Menu, Button} from 'antd';
import { PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined, AppstoreOutlined } from '@ant-design/icons';

const LeftMenuBar = ({callapse}) => {
    return (
        <div style={{width:"10rem"}}>
            <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={callapse}
            
            >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
            </Menu.Item>
            <Menu.Item key="4" icon={<ContainerOutlined />}>
                Option 3
            </Menu.Item>
            <Menu.Item key="5" icon={<ContainerOutlined />}>
                Option 3
            </Menu.Item>
            <Menu.Item key="6" icon={<ContainerOutlined />}>
                Option 3
            </Menu.Item>
            <Menu.Item key="7" icon={<ContainerOutlined />}>
                Option 3
            </Menu.Item>
            <Menu.Item key="8" icon={<ContainerOutlined />}>
                Option 3
            </Menu.Item>
            <Menu.Item key="9" icon={<ContainerOutlined />}>
                Option 3
            </Menu.Item>
            <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
            </Menu>
        </div>
    )
}

export default LeftMenuBar;