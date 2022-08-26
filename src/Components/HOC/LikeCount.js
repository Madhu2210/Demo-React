import React, { Component } from 'react';
import HOC from './HOC';

class LikeCount extends Component {

    render() {
        return (
            <div>
                <span> Hello {this.props.count}</span>
                <button onClick={this.props.handleClick}> Add Like</button>
            </div>
        );
    }
}

const Like = HOC(LikeCount);
export default Like;