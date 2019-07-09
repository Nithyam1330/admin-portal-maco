import React, { Component } from "react";
import "./Login.scss";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateToDashboard() {
    this.props.history.push('/dashboard');
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
              <p class="forgot-password" onClick={() => this.props.history.push('/forgot-password')}>Forgot Password?</p>
              <div class="custom-button">
                <button class="buttonstyles" onClick={() => this.navigateToDashboard()}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
