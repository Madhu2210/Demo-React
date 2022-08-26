import React from 'react';

const HOC = (Component,data) => {

return class HOC extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            count: 0
        };
    }
    
    handleClick= () => {
       this.setState({
        count : this.state.count +1
       });
    }
    
    render() {
        return (
            <Component handleClick={this.handleClick} count={this.state.count} />
        );
    }
    }
}

export default HOC;