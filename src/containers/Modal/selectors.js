import _ from 'lodash';
import { id } from './constants';

export const modalSelector = (state) => _.get(state, id);
