import React, { useState } from 'react';
import _ from 'lodash';
import { useModal } from './useModal';
import { useLoader } from './useLoader';
import { InfoModal } from '@components/InfoModal';
import { instance } from '@providers/api';
import { toQueryString } from '@utils/http';
import { useAuth } from './useAuth';
import { useDispatch } from 'react-redux';
import { handleLogoutAction } from '@containers/Auth';

const useApi = ({ endpoint, method, showLoader = true }) => {
  const dispatch = useDispatch();
  const modal = useModal();
  const loader = useLoader();

  const handleFetch = async ({
    body = {},
    urlParams = null,
    queryString = null,
    ignoreValidation = false
  } = {}) => {
    let url = `${endpoint}${urlParams ? `/${urlParams}` : ''}`;

    if (_.isObject(queryString)) {
      url = `${url}?${toQueryString(queryString)}`;
    }

    try {
      showLoader && loader.handleShow();

      const response = await instance[method](url, body);

      if (!ignoreValidation) {
        const headerResponse = _.get(response, ['data', 'headerResponse']);
        const hasError = _.get(headerResponse, 'status', 0) !== 200;

        if (hasError) {
          throw { response };
        }
      }

      return response.data;
    } catch (error) {
      if (_.get(error, 'response.data.headerResponse.status') === 401) {
        dispatch(handleLogoutAction());
      } else {
        modal.handleOpen({
          content: (
            <InfoModal
              color="error.500"
              buttonText={'Aceptar'}
              title={'Ha ocurrido un error inesperado'}
              description={_.get(error, 'response.data.headerResponse.message')}
            />
          )
        });
      }

      return _.get(error, 'response.data');
    } finally {
      showLoader && loader.handleHide();
    }
  };

  return [handleFetch];
};

export { useApi };
