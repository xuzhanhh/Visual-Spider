import React from 'react'
import PropPaneBase from './proppaneBase'
export default class ClickProp extends PropPaneBase {
    constructor(props){
        super(props)
    }

    static defaultProps = {
        xpath: {
            key: 'xpath',
            type: 'input',
            desc: '请输入xpath',
            data: '',
        }
    }

}