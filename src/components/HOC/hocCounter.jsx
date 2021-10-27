import React from 'react'

const UpdatedComponent = (OriginalComponent, number) => {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
        incrementCount = ()=>{
            this.setState( prevState =>{
                return { count : prevState.count + number}
            })
        }

        render(){
            return <OriginalComponent  count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return NewComponent

}
export default UpdatedComponent