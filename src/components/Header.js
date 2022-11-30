import React, { Component } from 'react';
import '../css/header.css';
import Api from '../dhis/api'

class Header extends Component{
    async componentDidMount(){
        
    }
    render(){
        return ( 
            <div className="navbar">
                <a href="#" className = 'appname'>                        
                </a>
                <span className = "appname"> Feedback    </span>
            </div>
        )
    }
}
export default Header;