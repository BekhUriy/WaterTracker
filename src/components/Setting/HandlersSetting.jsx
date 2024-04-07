import { modalClose } from '../../redux/setingModalSlicer';

export const handleBackdropClick = (dispatch) => (e) => {
  if (e.target === e.currentTarget) {
    handleCloseModal(dispatch)();
  }
};

export const handleCloseModal = (dispatch) => () => {
  console.log('Closing modal');
  dispatch(modalClose());
};

export const handleKeyPress = (dispatch) => (e) => {
  if (e.key === 'Escape') {
    handleCloseModal(dispatch)();
  }
};
