import React, { Component } from 'react'
import UpdatedComponent from './hocCounter'
 class Counter2 extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div onMouseOver={incrementCount}>
                Hover {count} times
            </div>
        )
    }
}

export default UpdatedComponent(Counter2,2)
