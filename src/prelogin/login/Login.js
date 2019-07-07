import React, { Component } from "react";
import { searchFilterArrayOfJson } from "../../shared/services/custom-search/CustomSearch";
import Pagination from "../../shared/components/pagination/Pagination";
import "./Login.scss";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="login-page">
        <div class="main">
          <div class="custom-logo" />
          <div class="custom-inputfields">
            <div class="inputs-content">
              <p class="Login-text">Please Login</p>
              <label>Username:</label>
              <div class="input-username">
                <input type="text" />
              </div>
              <label>Password:</label>
              <div class="input-username">
                <input type="password" />
              </div>
              <p class="forgot-password">Forgot Password?</p>
              <div class="custom-button">
                <button class="buttonstyles">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
