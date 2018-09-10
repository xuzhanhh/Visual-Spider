import React from 'react'
import PropPaneBase from './proppaneBase'
export default class InputProp extends PropPaneBase {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        value: {
            key: 'value',
            type: 'input',
            desc: '请输入value',
            data: ''
        },
        xpath: {
            key: 'xpath',
            type: 'input',
            desc: '请输入xpath',
            data: ''
        },
    }
}