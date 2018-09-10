import React from 'react'
import PropPaneBase from './proppaneBase'

export default class ForProp extends PropPaneBase {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        value: {
            key: 'value',
            type: 'textArea',
            desc: '请输入判断条件',
            data: ''
        },
        after: {
            key: 'after',
            type: 'textArea',
            desc: 'after语句',
            data: ''
        },
    }
}