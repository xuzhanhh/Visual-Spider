import React from 'react'
import { Input, Button } from 'antd'
export default class SleepProp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: props.originProps.time ? props.originProps.time : ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.setState({
                time: nextProps.originProps.time ? nextProps.originProps.time : ''
            })
        }
    }
    render() {
        const {  time } = this.state
        return (
            <div>
                <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
                请输入演示(ms):    <Input onChange={this.changeXpath} value={time} placeholder="Basic usage" />
            </div>
        )
    }
    changeXpath = (e) => {
        this.setState({
            time: e.target.value
        })
    }
    handleSave = () => {
        this.props.onSave({ ...this.state })
    }
}