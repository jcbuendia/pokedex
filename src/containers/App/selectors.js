import _ from 'lodash';
import { createSelector } from 'reselect';
import { id } from './constants';

export const appState = (state) => _.get(state, id);

export const loadingSelector = createSelector(appState, (state) =>
  _.get(state, 'isLoading')
);
