import { objectStatus } from './helpers';

export const initialState = {
  session: null,
  token: null,
  status: objectStatus.waiting
};
