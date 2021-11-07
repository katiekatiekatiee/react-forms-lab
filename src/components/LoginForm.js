import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      // username: event.target.value,
      // password: event.target.value
      [event.target.name]: event.target.value
    })
  }
  
  // handleSubmit = event => {
  //   event.preventDefault();
  //   let formData = {
  //     username: this.state.username,
  //     password: this.state.password,
  //   };
  // }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  //   handleSubmit = event => {
  //   event.preventDefault()

  //   if (this.state.username !== "" && this.state.password !== "") {
  //     this.props.handleLogin(this.state)
  //   }    
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            value={this.state.password}
            onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
