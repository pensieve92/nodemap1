import React from 'react';

import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, Input } from 'antd';
import { EllipsisOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
};

const IndexHeader = () => {
    return (
        <PageHeader
            title="Title"
            className="site-page-header"
            subTitle="This is a subtitle"
            tags={<Tag color="blue">Running</Tag>}
            extra={[
                <Input.Search 
                    placeholder="input search text"                                 
                    onSearch={value => console.log(value)} 
                    style={{ width: 200 }} 
                    enterButton
                    key="search" 
                />,
                <DropdownMenu key="more" />,
                <Button key="btn-search"><AppstoreOutlined style={{fontsize:30}} width="4" height="4"/></Button>,
            ]}
            avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
        />
    );
}

export default IndexHeader;