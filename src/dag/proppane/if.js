import React from 'react'
import PropPaneBase from './proppaneBase'

export default class IfProp extends PropPaneBase {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        value: {
            key: 'value',
            type: 'textArea',
            desc: '请输入条件(JS语句):',
            data: ''
        }
    }

}