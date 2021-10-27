import React, { Component } from "react";

export class dynamicClass extends Component {
    state = {
        count : 0
    };
    color(){

        let classes = "btn btn-";
        classes+= this.state.count === 0 ? "primary" : "danger";
        return classes;
    }
    incrementCount = ()=>{
        this.setState( prevState =>{
            if(prevState.count===0){
                return { count : 1}
            }
            else{
                return { count :  0}
            }
        })
    }
  render() {

    return (
      <div>
        <button className={this.color()} onClick={this.incrementCount}>Primary</button>
      </div>
    );
  }
}

export default dynamicClass;
