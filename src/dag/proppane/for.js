import React from 'react'
import { Input, Button } from 'antd'
const { TextArea } = Input;
export default class ForProp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            after: props.originProps.after ? props.originProps.after : '',
            value: props.originProps.value ? props.originProps.value : '',
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.setState({
                after: nextProps.originProps.after ? nextProps.originProps.after : '',
                value: nextProps.originProps.value ? nextProps.originProps.value : '',
            })
        }
    }
    render() {
        const { value, after } = this.state
        return (
            <div>
                <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
                请输入判断条件:    <TextArea rows={2} onChange={(e)=>this.changeValue('value', e)} value={value} placeholder="Basic usage" />
                after语句:    <TextArea rows={2} onChange={(e)=>this.changeValue('after', e)} value={after} placeholder="Basic usage" />
            </div>
        )
    }
    changeValue = (key,e) => {
        this.setState({
            [key]: e.target.value
        })
    }
    handleSave = () => {
        // tslint:disable-next-line:no-console
        console.log('handleSave')
        this.props.onSave({ ...this.state })
    }
}