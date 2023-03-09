import _ from 'lodash';
import { id } from './constants';

export const permissionsSelector = (state) => _.get(state, id);
