import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    //for user auth, the redirect will be handled with protected routes but this is going to be immensely useful for when i create modals that allow me to create a playlist - i can then use history.push to directly redirect users to their newly create playlist
    // this.props.processForm(user).then(() => this.props.history.push('/'));
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    let formType;
    // const { password, username} = this.state;
    if (this.props.formType === 'login') {
      formType = 'signup';
    } else {
      formType = 'login';
    }

    let errors = this.props.errors.map(error => (<li>{error}</li>));

    return (
      <div>
        <h2>{this.props.formType}</h2>

        <form onSubmit={this.handleSubmit}>
          Username:
          <br />
          <input type='text' value={this.state.username} onChange={this.update('username')} />
          <br />

          Password:
          <br />
          <input type='password' value={this.state.password} onChange={this.update('password')} />
          
          <br />
          <input type='submit' value={this.props.formType} />
        </form>

        <br />

        <ul>
          { errors }
        </ul>
        <Link to={`/${formType}`}>{formType}</Link>
        
      </div>
    )
  }
}

export default SessionForm;