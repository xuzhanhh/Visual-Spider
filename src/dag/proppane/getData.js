import React from 'react'
import { Input, Button, Select } from 'antd'
import PropPaneBase from './proppaneBase'

const Option = Select.Option;

export default class GetDataProp extends PropPaneBase {
    constructor(props) {
        super(props)
        this.state = {
            key: props.originProps.key ? props.originProps.key : 'innerHTML',
            varible: props.originProps.varible ? props.originProps.varible : '',
            xpath: props.originProps.xpath ? props.originProps.xpath : '',
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.setState({
                key: props.nextProps.key ? props.nextProps.key : 'innerHTML',
                varible: nextProps.originProps.varible ? nextProps.originProps.varible : '',
                xpath: nextProps.originProps.xpath ? nextProps.originProps.xpath : ''
            })
        }
    }
    renderProps = () => {
        const { varible, xpath, key } = this.state
        return (
            <div>
                变量名:    <Input onChange={(e) => this.changeValue('varible', e)} value={varible} placeholder="Basic usage" />
                XPath:    <Input onChange={(e) => this.changeValue('xpath', e)} value={xpath} placeholder="Basic usage" />
                domKey:       <Select defaultValue="innerHTML" value={key} style={{ width: 120 }} onChange={(e) => this.changeValueDirect('key', e)}>
                    <Option value="innerHTML">innerHTML</Option>
                    <Option value="innerText">innerText</Option>
                    <Option value="href" >href</Option>
                </Select>
            </div>
        )
    }
    // render() {
    //     const { varible, xpath,key } = this.state
    //     return (
    //         <div>
    //             <div><Button type="primary" onClick={this.handleSave}>保存</Button></div>
    //            
    //         </div>
    //     )
    // }
    // changeKey = (e)=>{
    //     // tslint:disable-next-line:no-console
    //     // console.log(e)git config --global user.name "username"
    //     this.setState({
    //         key: e
    //     })
    // }
    // changeVal = (e) => {
    //     this.setState({
    //         varible: e.target.value
    //     })
    // }
    // changeXpath = (e) => {
    //     this.setState({
    //         xpath: e.target.value
    //     })
    // }
}