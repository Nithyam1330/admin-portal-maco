import React, { Component } from 'react';
import '../postlogin/header.css';
// import '../assets/images/backgroudBg.png'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
       
    }
    render(){
        return(
            <div>
                <div className="header">
                <span class="icon-left-arrow"></span>
                <h1>User List</h1>
                <span class="icon-bell"></span>
                 </div>
            </div>
           
        );
    }
}
export default Header
