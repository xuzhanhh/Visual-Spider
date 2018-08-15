import React from 'react'
import OpenPageProp from './openPage'
import GetDataProp from './getData'
import InputProp from './input'
import ClickProp from './click'
import SleepProp from './sleep'
import IfProp from './if'
import * as PropTypes from 'prop-types'
import { Button, message } from 'antd'
export default class PropPane extends React.Component {
    render() {
        // tslint:disable-next-line:no-console
        console.log(this.props) // tslint:disable-next-line:no-console
        const { id } = this.props
        if (this.props.config) {
            return (
                <div>
                    <div className="proppane-title">{id}</div>
                    {this.props.config ? this.renderForm() : null}
                </div>
            )
        } else {
            return null
        }
    }
    renderForm = () => {
        const { id, config } = this.props
        // tslint:disable-next-line:no-console
        // console.log('config', config)
        const actualType = config.actualType
        const proppaneProp = {
            id: id,
            onSave:this.handleSave,
            originProps: config.data? config.data: {},
            // config: config
        }
        switch (actualType) {
            case 'openPage':
                return <OpenPageProp {...proppaneProp}/>
            case 'getData':
                return <GetDataProp {...proppaneProp}/>
            case 'input':
                return <InputProp {...proppaneProp}/>
           case 'click':
                return <ClickProp {...proppaneProp}/> 
           case 'sleep':
                return <SleepProp {...proppaneProp}/> 
           case 'if':
                return <IfProp {...proppaneProp}/> 
            default:
                return null
        }
    }
    handleSave = (data)=>{
        const { id } = this.props
        this.props.onSave(id,data)
        // onSave&&onSave(id, data)
    }
}