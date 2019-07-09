import React, { Component } from 'react'
import { searchFilterArrayOfJson } from '../../shared/services/custom-search/CustomSearch';
import Pagination from '../../shared/components/pagination/Pagination';
import './register.scss';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
       
    }
    render(){
        return(
        <div class="Register-page">
            <div class="main">
            <span class="icon-maco"></span>
            <div className="signup-text">
            <h1> Sign Up </h1>
                <p>If you have account <a href="">Login</a></p>
            </div>

               
                <div className="row">
                    <div className="col-md-6 input-fields">
                        <label>First Name</label>
                        <input type="text"></input>
                    </div>
                    <div className="col-md-6 input-fields">
                    <label>Last Name</label>
                        <input type="text"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 input-fields">
                    <label>Email</label>
                        <input type="text"></input>
                    </div>
                    <div className="col-md-6 input-fields">
                    <label>Contact</label>
                        <input type="text"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 input-fields">
                    <label>Password</label>
                        <input type="text"></input>
                    </div>
                    <div className="col-md-6 input-fields">
                    <label>Confirm Password </label>
                        <input type="text"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 input-fields">
                    <label>DOB</label>
                        <input type="text"></input>
                    </div>
                    <div className="col-md-6 input-fields">
                        <label>Location</label>
                        <input type="text"></input>
                    </div>
                </div>
               
             </div>
        </div>
        )
    }
}
export default Register