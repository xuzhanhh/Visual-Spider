import React from 'react'
import { Input, Button, Select } from 'antd'
const Option = Select.Option;
export default class GetDataProp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key:props.originProps.key ? props.originProps.key : 'innerHTML',
            varible: props.originProps.varible ? props.originProps.varible : '',
            xpath: props.originProps.xpath ? props.originProps.xpath : '',
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.setState({
                varible: nextProps.originProps.varible ? nextProps.originProps.varible : '',
                xpath: nextProps.originProps.xpath ? nextProps.originProps.xpath : ''
            })
        }
    }
    render() {
        const { varible, xpath,key } = this.state
        return (
            <div>
                <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
                变量名:    <Input onChange={this.changeVal} value={varible} placeholder="Basic usage" />
                XPath:    <Input onChange={this.changeXpath} value={xpath} placeholder="Basic usage" />
                domKey:       <Select defaultValue="innerHTML" value={key} style={{ width: 120 }} onChange={this.changeKey}>
                    <Option value="innerHTML">innerHTML</Option>
                    <Option value="innerText">innerText</Option>
                    <Option value="href" >href</Option>
                    {/* <Option value="Yiminghe">yiminghe</Option> */}
                </Select>
            </div>
        )
    }
    changeKey = (e)=>{
        // tslint:disable-next-line:no-console
        // console.log(e)git config --global user.name "username"
        this.setState({
            key: e
        })
    }
    changeVal = (e) => {
        this.setState({
            varible: e.target.value
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