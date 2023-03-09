import _ from 'lodash';
import { id } from './constants';

export const authSelector = (state) => _.get(state, id);
