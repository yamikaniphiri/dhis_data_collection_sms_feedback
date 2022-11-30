import React, { Component } from 'react';
import '../css/footer.css';
class Footer extends Component{
    render(){
        return (    
            <footer className="page-footer font-small blue">
                <div className="footer-copyright text-center py-3">© { new Date().getFullYear() } Copyright:
                </div>
            </footer>
        )
    }
}
export default Footer;
 