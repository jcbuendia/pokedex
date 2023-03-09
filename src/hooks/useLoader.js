import { useDispatch, useSelector } from 'react-redux';
import { loaderSelector } from '@containers/Loader/selectors';
import {
  handleShowLoaderAction,
  handleHideLoaderAction
} from '@containers/Loader/actions';

export const useLoader = () => {
  const dispatch = useDispatch();
  const { visible } = useSelector(loaderSelector);

  const handleShow = () => dispatch(handleShowLoaderAction());
  const handleHide = () => dispatch(handleHideLoaderAction());

  return {
    visible: !!visible,
    handleShow,
    handleHide
  };
};
