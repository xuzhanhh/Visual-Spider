import React from 'react'
import ForType from './index'
export default class Node1Wrapper extends React.Component {
    render() {
        const { click, cKey, id } = this.props
        // console.log(key)
        return (
            <div onClick={()=>click(id, cKey)}>
                <ForType {...this.props}></ForType>
            </div>
        )
    }
}