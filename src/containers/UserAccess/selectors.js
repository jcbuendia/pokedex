import _ from 'lodash';
import { createSelector } from 'reselect';
import { id } from './constants';

export const userAccessState = (state) => _.get(state, id);

export const valueSelector = createSelector(userAccessState, (state) =>
  _.get(state, 'value')
);
