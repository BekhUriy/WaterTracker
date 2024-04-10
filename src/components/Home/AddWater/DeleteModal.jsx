import XMarkOutlineIcon from '../Crossbar/CrossbarIcons/XMarkOutlineIcon';
import { useDispatch } from 'react-redux';
import { CrossbarAddWaterButton } from '../Crossbar/CrossbarModal.styled';
import {
  CancelButtonText,
  DeleteButtonCancel,
  DeleteButtonSubmit,
  DeleteButtonText,
  DeleteButtonsBox,
  DeleteModalHeaderText,
  DeleteModalStyled,
  Overlay,
  StyledDeleteModalText,
  StyledModalHeader,
} from './StyledEditWaterModal';
import { deletePortionThunk } from '../../../redux/water/waterThunk';
import { forceRender } from '../../../redux/water/waterSlice';
import { useEffect } from 'react';

export const DeleteModal = ({ isOpen, onClose, recordData }) => {

  const dispatch = useDispatch();

    useEffect(() => {
  const handleEscKeyPress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyPress);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isOpen, onClose]);

  if (isOpen === false) return null;

  const handleDeleteClick = () => {
    const id = recordData._id;
    dispatch(deletePortionThunk(id));
    dispatch(forceRender(true));
    onClose();
  };

  return (
    <div>
      <Overlay >
        <DeleteModalStyled>
          <StyledModalHeader>
            <DeleteModalHeaderText>Delete entry</DeleteModalHeaderText>
            <CrossbarAddWaterButton onClick={onClose}>
              <XMarkOutlineIcon />
            </CrossbarAddWaterButton>
          </StyledModalHeader>
          <StyledDeleteModalText>
            Are you sure you want to delete the entry?
          </StyledDeleteModalText>
          <DeleteButtonsBox>
            <DeleteButtonSubmit>
              <DeleteButtonText onClick={handleDeleteClick}>
                Delete
              </DeleteButtonText>
            </DeleteButtonSubmit>
            <DeleteButtonCancel onClick={onClose}>
              <CancelButtonText>Cancel</CancelButtonText>
            </DeleteButtonCancel>
          </DeleteButtonsBox>
        </DeleteModalStyled>
      </Overlay>
    </div>
  );
};
