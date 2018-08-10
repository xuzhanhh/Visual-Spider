import React from 'react'
import { Input, Button } from 'antd'
export default class InputProp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.originProps.value ? props.originProps.value : '',
            xpath: props.originProps.xpath ? props.originProps.xpath : ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.setState({
                value: nextProps.originProps.value ? nextProps.originProps.value : '',
                xpath: nextProps.originProps.xpath ? nextProps.originProps.xpath : ''
            })
        }
    }
    render() {
        const { value, xpath } = this.state
        return (
            <div>
                <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
                请输入value:    <Input onChange={this.changeVal} value={value} placeholder="Basic usage" />
                请输入xPath:    <Input onChange={this.changeXpath} value={xpath} placeholder="Basic usage" />
            </div>
        )
    }
    changeVal = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    changeXpath = (e) => {
        this.setState({
            xpath: e.target.value
        })
    }
    handleSave = () => {
        this.props.onSave({ ...this.state })
    }
}