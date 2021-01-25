import React, { Component } from 'react';


class Home extends Component {
    go(){
        console.log(this.props)
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
                    <h1>Welcome to Trainee Home Page</h1>
            </div>
        );
    }
}

export default Home;