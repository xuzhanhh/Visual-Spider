import React from 'react'
import PropPaneBase from './proppaneBase'

export default class OpenPageProp extends PropPaneBase {
    constructor(props){
        super(props)
    }

    static defaultProps = {
        url: {
            key: 'url',
            type: 'input',
            desc: '请输入url',
            data: ''
        },
    }


}