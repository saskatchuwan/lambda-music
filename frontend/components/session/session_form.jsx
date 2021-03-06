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

  componentDidMount () {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
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

    let renderedErrors = errors.map((error, idx) => (<li key={idx}>{error}</li>));

    return (
      <div className='session-form-page'>

        <header className='session-form-header'>
          <a className='session-form-logo' href='/#/'><img id='session-form-lambda-logo' src={window.images.doppler_logo_w} />lambda</a>
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


            <ul className='session-form-errors'>
              {renderedErrors}
            </ul>

            <input 
                type='submit' 
                className='user-account-submit-button' 
                value={titlelizedFormType} />

          </form>
          
        </main>
        <br />
        <br />
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