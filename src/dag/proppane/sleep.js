import React from 'react'
import PropPaneBase from './proppaneBase'

export default class SleepProp extends PropPaneBase {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        time: {
            key: 'value',
            type: 'input',
            desc: '请输入延时(ms)',
            data: ''
        }
    }
}