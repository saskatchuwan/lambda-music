import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    errors: state.errors.session,
    formType: 'login',
    titlelizedFormType: 'Log in',
    inverseFormType: 'signup',
    titlelizedInverseFormType: 'Sign up',
    formTypePrefix: "Don't have an account?",
    signUpPrompt: 'Log in with an existing account'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);