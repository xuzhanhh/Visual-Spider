import { Menu, Icon } from 'antd';
import React from 'react'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Sider extends React.Component {
  handleClick = (e) => {
    // console.log('click ', e);
    // alert(e.key)
    const { onClick } = this.props
    switch(e.key){
        case 'openPage':
            // alert('openPage')
            onClick('transform',e.key)
            break
        case 'evaluate':
            onClick('transform', e.key)
            break
        case 'getData':
            onClick('transform', e.key)
        case 'input':
            onClick('transform',e.key)
            break
        case 'click':
            onClick('transform',e.key)
        case 'sleep':
            onClick('transform',e.key)
            break
    }

  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1','sub2']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>基本配置</span></span>}>
          {/* <MenuItemGroup key="g1" title="Item 1"> */}

          {/* </MenuItemGroup> */}
          {/* <MenuItemGroup key="g2" title="Item 2"> */}
            <Menu.Item key="openPage">打开页面</Menu.Item>
            <Menu.Item key="click">点击</Menu.Item>
            <Menu.Item key="getData">获取数据</Menu.Item>
            <Menu.Item key="input">输入</Menu.Item>
            <Menu.Item key="sleep">延时</Menu.Item>
            <Menu.Item key="2">滚动事件</Menu.Item>
            <Menu.Item key="evaluate">执行代码</Menu.Item>
          {/* </MenuItemGroup> */}
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>浏览器设置</span></span>}>
          <Menu.Item key="userAgent">userAgent</Menu.Item>
          <Menu.Item key="cookie">cookie</Menu.Item>
          {/* <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu> */}
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>流程</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
