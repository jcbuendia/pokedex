import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { Navigation as StackNavigation } from '@navigation';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = (state) => ({
  isLoading: selectors.loadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions.bindActions, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const AppContainer = compose(withConnect)(StackNavigation);
