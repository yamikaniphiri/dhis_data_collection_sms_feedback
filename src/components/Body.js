import React, { Component } from 'react';
// import '../css/main.css';
class Body extends Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            // data: this.props.data, 
        }
    }
    async componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            this.setState({data: this.props.data})
        }
    }
    render(){
        return( 
            <div className = 'body-content'>
                <p>Content</p>
            </div>
        )
    }
}
export default Body;