import React from 'react'
import NodeType1 from './index'
export default class Node1Wrapper extends React.Component {
    render() {
        const { click, cKey, id } = this.props
        // console.log(key)
        return (
            <div onClick={()=>click(id, cKey)}>
                <NodeType1 {...this.props}></NodeType1>
            </div>
        )
    }
}