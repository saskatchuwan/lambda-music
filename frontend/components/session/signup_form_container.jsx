import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    errors: state.errors.session,
    formType: 'signup',
    titlelizedFormType: 'Sign up',
    inverseFormType: 'login',
    titlelizedInverseFormType: 'Log in',
    formTypePrefix: "Already have an account?",
    signUpPrompt: 'Sign up with a username'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    demoLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);