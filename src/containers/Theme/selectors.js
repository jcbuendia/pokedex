import _ from 'lodash';
import { id } from './constants';

export const themeSelector = (state) => _.get(state, id);
