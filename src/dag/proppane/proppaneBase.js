import React from 'react'
import { Button, Input, Select } from 'antd'
const { TextArea } = Input;
const { Option } = Select;

export default class PropPaneBase extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            ...props.originProps
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps)
        if (nextProps.id !== this.props.id) {
            this.setState({
                ...nextProps.originProps
            })
        }
    }

    changeValueDirect = (key, e) => {
        let data = this.state[key]
        data.data = e
        this.setState({
            [key]: data
        })
    }
    changeValue = (key, e) => {
        let data = this.state[key]
        data.data = e.target.value

        this.setState({
            [key]: data
        })
    }
    handleSave = () => {
        this.props.onSave({ ...this.state })
    }
    render() {
        return (
            <div>
                <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
                {this.renderProps()}
            </div>
        )
    }

    renderProps = () => {
        return (
            Object.keys(this.state).map((item, index) => {
                return this.renderEachProps(this.state[item], index)
            })
        )
    }

    renderEachProps = (params, index) => {
        switch (params.type) {
            case 'input':
                return this.renderInput(params, index)
            case 'textArea':
                return this.renderTextArea(params, index)
            case 'select':
                return this.renderSelect(params, index)
        }
    }
    renderSelect = (params, index) => {
        const { key, desc, data, placeholder = "", options } = params
        return <div key={index}>
            {desc}:    <Select value={data} style={{ width: 150 }} onChange={(e) => this.changeValueDirect(key, e)}>
                {
                    options.map(item => <Option key={item.value} value={item.value}>{item.name}</Option>)
                }
            </Select>
        </div>

    }

    renderInput = (params, index) => {
        const { key, desc, data, placeholder = "" } = params
        return <div key={index}>
            {desc}:    <Input onChange={(e) => this.changeValue(key, e)} value={data} placeholder={placeholder} />
        </div>
    }

    renderTextArea = (params, index) => {
        const { key, desc, data, placeholder = "" } = params
        return <div key={index}>
            {desc}:    <TextArea rows={2} onChange={(e) => this.changeValue(key, e)} value={data} placeholder={placeholder} />
        </div>
    }
}