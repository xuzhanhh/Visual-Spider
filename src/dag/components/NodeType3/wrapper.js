import React from 'react'
import NodeType3 from './index'
export default class Node1Wrapper extends React.Component {
    render() {
        const { click, cKey, id } = this.props
        // console.log(key)
        return (
            <div onClick={()=>click(id, cKey)}>
                <NodeType3 {...this.props}></NodeType3>
            </div>
        )
    }
}