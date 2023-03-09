import _ from 'lodash';
import { id } from './constants';

export const languageSelector = (state) => _.get(state, id);
