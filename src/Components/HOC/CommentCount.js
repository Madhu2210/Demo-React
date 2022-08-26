import React, { Component } from 'react';
import HOC from './HOC';

class CommentCount extends Component {
    
    render() {
        return (
            <div>
               <span> Hello {this.props.count}</span>
               <button onClick={this.props.handleClick}>Add Comment</button> 
            </div>
        );
    }
}

const Comment = HOC(CommentCount);
export default Comment;