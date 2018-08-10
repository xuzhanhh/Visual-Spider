import React from 'react'
import { Input, Button } from 'antd'
export default class ClickProp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            xpath: props.originProps.xpath ? props.originProps.xpath : ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.setState({
                xpath: nextProps.originProps.xpath ? nextProps.originProps.xpath : ''
            })
        }
    }
    render() {
        const { value, xpath } = this.state
        return (
            <div>
                <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
                请输入xPath:    <Input onChange={this.changeXpath} value={xpath} placeholder="Basic usage" />
            </div>
        )
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