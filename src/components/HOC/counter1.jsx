import React, { Component } from 'react'
import UpdatedComponent from './hocCounter'
import {UserConsumer} from './../userContext'
class Counter1 extends Component {

    
    render() {
        
        const {count, incrementCount} = this.props
        return (
            <>
            <UserConsumer>
                {    name=>{
                    return(
<div>
                        <button onClick={incrementCount}>{name} clicked {count} times</button>
                    </div>
                    )
                        
                    }
                }

            </UserConsumer>
          </>
        )
    }
}

export default UpdatedComponent(Counter1,1)
