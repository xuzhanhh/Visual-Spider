import React from 'react'
import { Input, Button } from 'antd'
export default class GetDataProp extends React.Component {
    state={
        varible:'',
        xpath: '',
    }
    render() {
        const { varible, xpath } = this.state
        return (
            <div>
                <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
                请输入变量名:    <Input onChange={this.changeVal} value={varible} placeholder="Basic usage" />
                请输入xPath:    <Input onChange={this.changeXpath} value={xpath} placeholder="Basic usage" />
            </div>
        )
    }
    changeVal = (e)=>{
        // tslint:disable-next-line:no-console
        // console.log(e.target.value)
        this.setState({
            varible: e.target.value
        })
    }
    changeXpath = (e)=>{
        // tslint:disable-next-line:no-console
        // console.log(e.target.value)
        this.setState({
            xpath: e.target.value
        })
    }
    handleSave = ()=> {
        // console.log
        // const { url } = this.state
        this.props.onSave({...this.state})
        // onSave({
        //     url
        // })
    }
}