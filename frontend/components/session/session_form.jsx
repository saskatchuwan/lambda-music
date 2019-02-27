import React from 'react';
import { Link } from 'react-router-dom';
import DemoLoginItem from './demo_login_item';

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

    const { errors,
            titlelizedFormType,
            inverseFormType,
            titlelizedInverseFormType,
            formTypePrefix,
            signUpPrompt,
            demoLogin
          } = this.props;

    let renderedErrors = errors.map(error => (<li>{error}</li>));

    return (
      <div className='session-form-page'>

        <header className='session-form-logo'>
          <h1>lambda</h1>
        </header>

        <main className='session-form-container'>
          <DemoLoginItem
            demoLogin={demoLogin}
          />
          
          <br />
          <h2 id='line-thru'><span id='line-thru-text'>or</span></h2>
       
          <div id='signup-prompt'>{signUpPrompt}</div>
          <br />

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
                value={titlelizedFormType} />

          </form>

          <br />

          <ul className='session-form-errors'>
            {renderedErrors}
          </ul>
        </main>

        <p className='session-form-bottom-links'>
          {formTypePrefix} <Link className='session-form-alt-opt react-link' 
                                            to={`/${inverseFormType}`}>
                                            {titlelizedInverseFormType}
                                      </Link>
        </p>
      </div>
    )
  }
}

export default SessionForm;