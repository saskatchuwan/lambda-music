import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

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
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);