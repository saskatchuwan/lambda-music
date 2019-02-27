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
    let formTypePrefix;
    // const { password, username} = this.state;
    if (this.props.formType === 'LOG IN') {
      formType = 'SIGN UP';
      formTypePrefix = "Don't have an account?";
    } else {
      formType = 'LOG IN';
      formTypePrefix = "Already have an account?";
    }

    let errors = this.props.errors.map(error => (<li>{error}</li>));

    return (
      <div className='session-form-page'>
        <header className='session-form-logo'>
          <h1>lambda</h1>
        </header>

        <main className='session-form-container'>

          <h2 className='session-form-type'>{this.props.formType}</h2>

          <form className='session-form' onSubmit={this.handleSubmit}>
    
            <input type='text' 
                  className='account-input'
                  placeholder="Username" 
                  value={this.state.username} 
                  onChange={this.update('username')} />
            <br />


            <input type='password' 
                  className='account-input'
                  placeholder="Password" 
                  value={this.state.password} 
                  onChange={this.update('password')} />

            <br />
            <br />

            <input 
                type='submit' 
                className='user-account-submit-button' 
                value={this.props.formType} />

          </form>

          <br />

          <ul className='session-form-errors'>
            { errors }
          </ul>
          
          {formTypePrefix}
          <br />
          <Link className='session-form-alt-opt' to={`/${formType}`}>{formType}</Link>
        </main>
      </div>
    )
  }
}

export default SessionForm;