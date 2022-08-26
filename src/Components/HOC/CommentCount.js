import React, { Component } from 'react';

class CommentCount extends Component {
    constructor(props){
        super(props);

        this.state={
            count: 0
        }
    }

    handleClick=()=> {
        this.setState({
            count: this.state.count +1
        });
    }
    render() {
        return (
            <div>
               <span> Hello {this.state.count}</span>
               <button onClick={this.handleClick}>Add Comment</button> 
            </div>
        );
    }
}

export default CommentCount;