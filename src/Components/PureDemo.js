import React from "react";

class PureDemo extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    changeCount=()=>{
        this.setState({
            count:this.state.count +1
        })
    }

    render(){
        console.log("Pure Component re-rendered");
        return(
            <div>
                <h1> This is Pure Class Component</h1>
                <button onClick={this.changeCount}>Button</button>
                <span>{this.state.count}</span>
            </div>
        );
    }
}

export default PureDemo;
