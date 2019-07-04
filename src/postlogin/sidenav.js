import React, { Component } from 'react';
import '../postlogin/sidenav.css';
import monkey from '../assets/images/monkey.png';
class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
       
    }
    render(){
        return(
                 <div className="side-nav">
                     <div class="maco-logo">
                         <img src={monkey}/>
                         <span class="icon-maco"></span>
                     </div>
                   <span class="icon-settings"></span>
                   <span class="icon-myorders"></span>
                   <span class="icon-website"></span>
                   <span class="icon-about"></span>
                 </div>
           
        );
    }
}
export default SideNav
