import React from 'react'
import { Input, Button } from 'antd'
const { TextArea } = Input;
export default class IfProp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.originProps.value ? props.originProps.value : ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.setState({
                value: nextProps.originProps.value ? nextProps.originProps.value : ''
            })
        }
    }
    render() {
        const { value, xpath } = this.state
        return (
            <div>
                <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
                请输入条件(JS语句):    <TextArea rows={6} onChange={this.changeValue} value={value} placeholder="Basic usage" />
            </div>
        )
    }
    changeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSave = () => {
        // tslint:disable-next-line:no-console
        console.log('handleSave')
        this.props.onSave({ ...this.state })
    }
}