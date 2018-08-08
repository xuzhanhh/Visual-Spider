import React from 'react'
import ErrorType from './index'
export default class Node1Wrapper extends React.Component {
    render() {
        const { click, cKey, id } = this.props
        // console.log(key)
        return (
            <div onClick={()=>click(id, cKey)}>
                <ErrorType {...this.props}></ErrorType>
            </div>
        )
    }
}