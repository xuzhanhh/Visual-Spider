import { Menu, Icon } from 'antd';
// import React from 'react'
import * as React from 'react'
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

interface MenuProps {
  onClick: Function,
  onAddData: Function
}

interface testInterface {
  key: string
}


//baidu nodes  [{ "config": { "actualType": "start", "label": "Start Here", "type": "start", "style": { "left": "50px", "top": "145px" } }, "id": "start" }, { "config": { "actualType": "openPage", "data": { "url": "http://www.baidu.com" }, "label": "Open Page", "type": "transform", "style": { "left": "200px", "top": "145px" } }, "id": "2" }, { "config": { "actualType": "end", "label": "spider finish", "type": "end", "style": { "left": "1250px", "top": "145px" } }, "id": "end" }, { "config": { "label": "input", "type": "transform", "actualType": "input", "data": { "value": "${index}", "xpath": "#kw" }, "style": { "left": "500px", "top": "145px" } }, "id": "565396c5005520454f09efe0c7c8e5b8f02f" }, { "config": { "label": "click", "type": "transform", "actualType": "click", "data": { "xpath": "#su" }, "style": { "left": "800px", "top": "170px" } }, "id": "5797ef8a0fe5a042830a123072cc2d112824" }, { "config": { "label": "sleep", "type": "transform", "actualType": "sleep", "data": { "time": "3000" }, "style": { "left": "800px", "top": "50px" } }, "id": "2fd560a203bb504e1e08420027cf9ad882ac" }, { "config": { "label": "getData", "type": "transform", "actualType": "getData", "data": { "varible": "h3", "xpath": "h3 a", "key": "innerText" }, "style": { "left": "950px", "top": "110px" } }, "id": "213131a6055e10447d0a8410831871e8f8ea" }, { "config": { "label": "if", "type": "condition", "actualType": "if", "data": { "value": "false" }, "style": { "left": "650px", "top": "110px" } }, "id": "10df04f40e7ee04e2709c3709e68f307338f" }, { "config": { "label": "evaluate", "type": "transform", "actualType": "evaluate", "data": { "value": "myData.hello = 'thinking js';\nmyData.index = 0;" }, "style": { "left": "350px", "top": "145px" } }, "id": "22bb67590d61d047af09d8d0f2ac65f1c83f" }, { "config": { "label": "for", "type": "for", "actualType": "for", "style": { "left": "1100px", "top": "145px" }, "data": { "after": "myData.index = myData.index+1;", "value": "myData.index >5;" } }, "id": "4fc68ad9012d5040780a8eb001549597062d" }, { "config": { "label": "sleep", "type": "transform", "actualType": "sleep", "data": { "time": "2000" } }, "id": "3855a84f07e0e045fd0be9a0b844f803cda7" }]
//baidu connections [{ "sourceId": "start", "targetId": "2" }, { "sourceId": "2fd560a203bb504e1e08420027cf9ad882ac", "targetId": "213131a6055e10447d0a8410831871e8f8ea" }, { "data": { "condition": "true" }, "sourceId": "10df04f40e7ee04e2709c3709e68f307338f", "targetId": "2fd560a203bb504e1e08420027cf9ad882ac" }, { "sourceId": "565396c5005520454f09efe0c7c8e5b8f02f", "targetId": "10df04f40e7ee04e2709c3709e68f307338f" }, { "data": { "condition": "false" }, "sourceId": "10df04f40e7ee04e2709c3709e68f307338f", "targetId": "5797ef8a0fe5a042830a123072cc2d112824" }, { "sourceId": "2", "targetId": "22bb67590d61d047af09d8d0f2ac65f1c83f" }, { "sourceId": "22bb67590d61d047af09d8d0f2ac65f1c83f", "targetId": "565396c5005520454f09efe0c7c8e5b8f02f" }, { "data": { "condition": "false" }, "sourceId": "4fc68ad9012d5040780a8eb001549597062d", "targetId": "565396c5005520454f09efe0c7c8e5b8f02f" }, { "data": { "condition": "true" }, "sourceId": "4fc68ad9012d5040780a8eb001549597062d", "targetId": "end" }, { "sourceId": "213131a6055e10447d0a8410831871e8f8ea", "targetId": "4fc68ad9012d5040780a8eb001549597062d" }, { "sourceId": "5797ef8a0fe5a042830a123072cc2d112824", "targetId": "3855a84f07e0e045fd0be9a0b844f803cda7" }, { "sourceId": "3855a84f07e0e045fd0be9a0b844f803cda7", "targetId": "213131a6055e10447d0a8410831871e8f8ea" }]

let baiduConnections = [{ "sourceId": "start", "targetId": "2" }, { "sourceId": "2fd560a203bb504e1e08420027cf9ad882ac", "targetId": "213131a6055e10447d0a8410831871e8f8ea" }, { "data": { "condition": "true" }, "sourceId": "10df04f40e7ee04e2709c3709e68f307338f", "targetId": "2fd560a203bb504e1e08420027cf9ad882ac" }, { "sourceId": "565396c5005520454f09efe0c7c8e5b8f02f", "targetId": "10df04f40e7ee04e2709c3709e68f307338f" }, { "data": { "condition": "false" }, "sourceId": "10df04f40e7ee04e2709c3709e68f307338f", "targetId": "5797ef8a0fe5a042830a123072cc2d112824" }, { "sourceId": "2", "targetId": "22bb67590d61d047af09d8d0f2ac65f1c83f" }, { "sourceId": "22bb67590d61d047af09d8d0f2ac65f1c83f", "targetId": "565396c5005520454f09efe0c7c8e5b8f02f" }, { "data": { "condition": "false" }, "sourceId": "4fc68ad9012d5040780a8eb001549597062d", "targetId": "565396c5005520454f09efe0c7c8e5b8f02f" }, { "data": { "condition": "true" }, "sourceId": "4fc68ad9012d5040780a8eb001549597062d", "targetId": "end" }, { "sourceId": "213131a6055e10447d0a8410831871e8f8ea", "targetId": "4fc68ad9012d5040780a8eb001549597062d" }, { "sourceId": "5797ef8a0fe5a042830a123072cc2d112824", "targetId": "3855a84f07e0e045fd0be9a0b844f803cda7" }, { "sourceId": "3855a84f07e0e045fd0be9a0b844f803cda7", "targetId": "213131a6055e10447d0a8410831871e8f8ea" }]
let baiduNodes = [{ "config": { "actualType": "start", "label": "Start Here", "type": "start", "style": { "left": "50px", "top": "145px" } }, "id": "start" }, { "config": { "actualType": "openPage", "data": { "url": "http://www.baidu.com" }, "label": "Open Page", "type": "transform", "style": { "left": "200px", "top": "145px" } }, "id": "2" }, { "config": { "actualType": "end", "label": "spider finish", "type": "end", "style": { "left": "1250px", "top": "145px" } }, "id": "end" }, { "config": { "label": "input", "type": "transform", "actualType": "input", "data": { "value": "${index}", "xpath": "#kw" }, "style": { "left": "500px", "top": "145px" } }, "id": "565396c5005520454f09efe0c7c8e5b8f02f" }, { "config": { "label": "click", "type": "transform", "actualType": "click", "data": { "xpath": "#su" }, "style": { "left": "800px", "top": "170px" } }, "id": "5797ef8a0fe5a042830a123072cc2d112824" }, { "config": { "label": "sleep", "type": "transform", "actualType": "sleep", "data": { "time": "3000" }, "style": { "left": "800px", "top": "50px" } }, "id": "2fd560a203bb504e1e08420027cf9ad882ac" }, { "config": { "label": "getData", "type": "transform", "actualType": "getData", "data": { "varible": "h3", "xpath": "h3 a", "key": "innerText" }, "style": { "left": "950px", "top": "110px" } }, "id": "213131a6055e10447d0a8410831871e8f8ea" }, { "config": { "label": "if", "type": "condition", "actualType": "if", "data": { "value": "false" }, "style": { "left": "650px", "top": "110px" } }, "id": "10df04f40e7ee04e2709c3709e68f307338f" }, { "config": { "label": "evaluate", "type": "transform", "actualType": "evaluate", "data": { "value": "myData.hello = 'thinking js';\nmyData.index = 0;" }, "style": { "left": "350px", "top": "145px" } }, "id": "22bb67590d61d047af09d8d0f2ac65f1c83f" }, { "config": { "label": "for", "type": "for", "actualType": "for", "style": { "left": "1100px", "top": "145px" }, "data": { "after": "myData.index = myData.index+1;", "value": "myData.index >5;" } }, "id": "4fc68ad9012d5040780a8eb001549597062d" }, { "config": { "label": "sleep", "type": "transform", "actualType": "sleep", "data": { "time": "2000" } }, "id": "3855a84f07e0e045fd0be9a0b844f803cda7" }]


export default class Sider extends React.Component<MenuProps, object> {
  constructor(props: MenuProps) {
    super(props)
  }

  handleClick = (e: testInterface) => {
    const { onClick, onAddData } = this.props
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
        onClick('for', e.key)
      case 'demo-baidu':
        onAddData(baiduConnections, baiduNodes)
        break
      case 'demo-reset':
        onAddData()
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
        defaultOpenKeys={['sub1', 'sub5']}
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
        <SubMenu key="sub5" title={<span><Icon type="car" /><span>demos</span></span>}>
          <Menu.Item key="demo-baidu">百度搜索</Menu.Item>
          <Menu.Item key="demo-reset">恢复默认</Menu.Item>
          {/* <Menu.Item key="for">for</Menu.Item> */}

        </SubMenu>
      </Menu>
    );
  }
}
