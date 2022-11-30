import React, { Component } from 'react';

// import components
import SMSDashboard from  './SMSDashboard';


class MainBody extends Component{ 
    constructor(props,context){  
        super(props,context);
        this.state = {
            data : {},
            loading : true,
            userRole:''
        }
    } 
         
    render(){        
        return( 
            <div className = 'body-content'>
                <div className = 'row'>                    
                    <div className = 'col-sm-12'> <SMSDashboard/></div>
                    {/* <div className = 'col-sm-12'> <PrDashboard/></div> */}
                </div>
                <br></br>
            </div>
        )
    }
}
export default MainBody;