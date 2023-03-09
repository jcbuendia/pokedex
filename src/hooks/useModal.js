import { useDispatch, useSelector } from 'react-redux';
import { modalSelector } from '@containers/Modal/selectors';
import {
  handleCloseModalAction,
  handleOpenModalAction
} from '@containers/Modal';

export const useModal = () => {
  const dispatch = useDispatch();
  const { visible, content, options } = useSelector(modalSelector);

  const handleOpen = ({ content, options }) =>
    dispatch(handleOpenModalAction({ content, options }));

  const handleClose = () => dispatch(handleCloseModalAction());

  return {
    visible,
    content,
    options,
    handleOpen,
    handleClose
  };
};
