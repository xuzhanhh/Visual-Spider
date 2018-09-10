import React from 'react'
import { Input, Button, Select } from 'antd'
import PropPaneBase from './proppaneBase'

const Option = Select.Option;

export default class GetDataProp extends PropPaneBase {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        varible: {
            key: 'varible',
            type: 'input',
            desc: '变量名',
            data: ''
        },
        xpath: {
            key: 'xpath',
            type: 'input',
            desc: 'XPath',
            data: ''
        },
        key: {
            key: 'key',
            type: 'select',
            desc: 'domKey',
            data: 'innerHTML',
            options: [{ name: 'innerHTML', value: 'innerHTML' },
            { name: 'innerText', value: 'innerText' },
            { name: 'href', value: 'href' },]
        }
    }

}