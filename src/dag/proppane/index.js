import React from 'react'
import OpenPageProp from './openPage'
import GetDataProp from './getData'
import InputProp from './input'
import ClickProp from './click'
import SleepProp from './sleep'
import IfProp from './if'
import ForProp from './for'
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
        let proppaneProp = {
            id: id,
            onSave: this.handleSave,
            originProps: config.data ? config.data : undefined,
            // config: config
        }
        switch (actualType) {
            case 'openPage':
                if (!proppaneProp.originProps) {
                    proppaneProp.originProps = JSON.parse(JSON.stringify(OpenPageProp.defaultProps))
                }
                return <OpenPageProp {...proppaneProp} />
            case 'getData':
                //填充默认数据
                if (!proppaneProp.originProps) {
                    proppaneProp.originProps = JSON.parse(JSON.stringify(GetDataProp.defaultProps))
                }
                return <GetDataProp {...proppaneProp} />
            case 'input':
                if (!proppaneProp.originProps) {
                    proppaneProp.originProps = JSON.parse(JSON.stringify(InputProp.defaultProps))
                }
                <InputProp {...proppaneProp} />
            case 'click':
                //填充默认数据
                if (!proppaneProp.originProps) {
                    proppaneProp.originProps = JSON.parse(JSON.stringify(ClickProp.defaultProps))
                }
                return <ClickProp {...proppaneProp} />
            case 'sleep':
                //填充默认数据
                if (!proppaneProp.originProps) {
                    proppaneProp.originProps = JSON.parse(JSON.stringify(SleepProp.defaultProps))
                }
                return <SleepProp {...proppaneProp} />
            case 'if':
            case 'evaluate':
                if (!proppaneProp.originProps) {
                    proppaneProp.originProps = JSON.parse(JSON.stringify(IfProp.defaultProps))
                }
                return <IfProp {...proppaneProp} />
            case 'for':
                //填充默认数据
                if (!proppaneProp.originProps) {
                    proppaneProp.originProps = JSON.parse(JSON.stringify(ForProp.defaultProps))
                }
                return <ForProp {...proppaneProp} />
            default:
                return null
        }
    }
    handleSave = (data) => {
        const { id } = this.props
        this.props.onSave(id, data)
        // onSave&&onSave(id, data)
    }
}