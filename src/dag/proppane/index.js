import React from 'react'

export default class PropPane extends React.Component{
    render(){
        const { id } = this.props
        return (
            <div>
                <div className="propPane-title">{id}</div>
            </div>
        )
    }
}