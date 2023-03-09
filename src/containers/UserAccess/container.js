import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { SignUpScreen } from '@screens/SignUpScreen';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = (state) => ({
  currentValue: selectors.valueSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions.bindActions, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const UserAccessContainer = compose(withConnect)(SignUpScreen);
