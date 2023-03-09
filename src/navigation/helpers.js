import { objectStatus } from '@containers/Auth/helpers';

export const screens = {
  [objectStatus.loggedIn]: {
    home: {
      path: 'home',
      screens: {
        home: {
          path: ''
        },
        productDetails: {
          path: 'productDetails'
        }
      }
    },
    discover: {
      path: 'discover',
      screens: {
        discover: {
          path: ''
        },
        productDetails: {
          path: 'productDetails'
        }
      }
    },
    historical: {
      path: 'historical',
      screens: {
        historical: {
          path: ''
        },
        productDetails: {
          path: 'productDetails'
        }
      }
    }
  },
  [objectStatus.loggedOut]: {
    splash: 'splash',
    intro: 'intro',
    login: 'login',
    register: 'register'
  }
};
