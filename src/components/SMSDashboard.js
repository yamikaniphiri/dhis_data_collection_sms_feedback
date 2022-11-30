import React, { Component } from 'react';
import Api from '../dhis/api'

class SMSDashboard extends Component{ 
    constructor(props,context){  
        super(props,context);
        this.state = {
            data : {},
            loading : true
        }

    }  
    async componentDidMount(){  

        let usersData = await Api.getUserGroup() 

        for (let user of usersData.users) {
            // get ou for every user
            let usersOuData = await Api.getUserOU(user.id) 
            // TODO: add funtion/ loop  to get the programs dynamically
            let programId ="sXzdrtXMink"
            let evenData = await Api.getAnalytictsevenData(programId,usersOuData.organisationUnits[0].id) 
            debugger
            


        }

        


    }    
    render(){ 
        return(
            <div classname = "container" >
                <div class="container">
                    <p>feed bck</p>
                    
                
                </div>  
            </div>
        )
    }
}
export default SMSDashboard;