import _ from 'lodash';
import { id } from './constants';

export const loaderSelector = (state) => _.get(state, id);
