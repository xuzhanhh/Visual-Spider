import { Menu, Icon } from 'antd';
import React from 'react'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Sider extends React.Component {
  handleClick = (e) => {
    // console.log('click ', e);
    // alert(e.key)
    const { onClick } = this.props
    switch (e.key) {
      case 'openPage':
        // alert('openPage')
        onClick('transform', e.key)
        break
      case 'evaluate':
        onClick('transform', e.key)
        break
      case 'getData':
        onClick('transform', e.key)
      case 'input':
        onClick('transform', e.key)
        break
      case 'click':
        onClick('transform', e.key)
      case 'sleep':
        onClick('transform', e.key)
        break
      case 'if':
        onClick('condition', e.key)
        break
      case 'for':
        onClick('transform', e.key)
        break
    }

  }
  //test
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1', 'sub4']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>基本配置</span></span>}>
          <Menu.Item key="openPage">打开页面</Menu.Item>
          <Menu.Item key="click">点击</Menu.Item>
          <Menu.Item key="getData">获取数据</Menu.Item>
          <Menu.Item key="input">输入</Menu.Item>
          <Menu.Item key="sleep">延时</Menu.Item>
          <Menu.Item key="2">滚动事件</Menu.Item>
          <Menu.Item key="evaluate">执行代码</Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>浏览器设置</span></span>}>
          <Menu.Item key="userAgent">userAgent</Menu.Item>
          <Menu.Item key="cookie">cookie</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>流程</span></span>}>
          <Menu.Item key="if">if</Menu.Item>
          <Menu.Item key="for">for</Menu.Item>

        </SubMenu>
      </Menu>
    );
  }
}
