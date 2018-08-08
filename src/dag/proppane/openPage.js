import React from 'react'
import { Input, Button } from 'antd'
export default class OpenPageProp extends React.Component {
    constructor(props){
        super(props)
        // tslint:disable-next-line:no-console
        console.log(props)
        this.state = {
            url: props.originProps.url?props.originProps.url: ''
        }
    }
    render() {
        const { url } = this.state
        return (
            <div>
                <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
                请输入url:    <Input onChange={this.changeVal}value={url} placeholder="Basic usage" />
            </div>
        )
    }
    changeVal = (e)=>{
        // tslint:disable-next-line:no-console
        console.log(e.target.value)
        this.setState({
            url: e.target.value
        })
    }
    handleSave = ()=> {
        // console.log
        const { url } = this.state
        this.props.onSave({url})
        // onSave({
        //     url
        // })
    }
}