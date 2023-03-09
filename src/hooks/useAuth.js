import { useDispatch, useSelector } from 'react-redux';
import { authSelector, handleLogoutAction } from '@containers/Auth';
import { handleLoginAction } from '@containers/Auth';
import { useApi } from '@hooks/useApi';
import { getToken, setToken } from '@services/storage/user';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(authSelector);
  const [_handleLogin] = useApi({
    endpoint: 'auth/mobile-login',
    method: 'post'
  });
  const [_handleLogout] = useApi({
    endpoint: '/auth/logout',
    method: 'post'
  });

  const handleLogin = async (data) => {
    try {
      const {
        headerResponse: { status },
        payload
      } = await _handleLogin({
        body: data
      });

      if (status === 200 && payload) {
        setToken(payload.token);
        dispatch(handleLoginAction(payload));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleLogout = async () => {
    try {
      await _handleLogout({ ignoreValidation: true });
    } catch {
    } finally {
      dispatch(handleLogoutAction());
    }
  };

  const handleRetrieveToken = async () => {
    const token = await getToken();

    if (token) {
      dispatch(handleLoginAction({ token }));
    } else {
      dispatch(handleLogoutAction());
    }
  };

  return {
    status,
    handleLogin,
    handleLogout,
    handleRetrieveToken
  };
};
