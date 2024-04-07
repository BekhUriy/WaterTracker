import XMarkOutlineIcon from "../Crossbar/CrossbarIcons/XMarkOutlineIcon"
import { useDispatch} from "react-redux";
import { CrossbarAddWaterButton } from "../Crossbar/CrossbarModal.styled"
import { CancelButtonText, DeleteButtonCancel, DeleteButtonSubmit, DeleteButtonText, DeleteButtonsBox, DeleteModalHeaderText, DeleteModalStyled, Overlay,  StyledDeleteModalText,  StyledModalHeader } from "./StyledEditWaterModal"
import { deletePortionThunk } from "../../../redux/water/waterThunk";

export const DeleteModal = ({isOpen, onClose, id})=>{
    const dispatch = useDispatch();
    if(isOpen===false) return null
    return(
        <div>
<Overlay >
   <DeleteModalStyled>
         <StyledModalHeader>
             <DeleteModalHeaderText>Delete entry</DeleteModalHeaderText>
             <CrossbarAddWaterButton onClick={onClose}>
         <XMarkOutlineIcon />
        </CrossbarAddWaterButton>         
        </StyledModalHeader>
       <StyledDeleteModalText>Are you sure you want to delete the entry?</StyledDeleteModalText> 
       <DeleteButtonsBox>
<DeleteButtonSubmit>
  <DeleteButtonText onClick={() => dispatch(deletePortionThunk(id))}> Delete</DeleteButtonText></DeleteButtonSubmit>
<DeleteButtonCancel onClick={onClose}><CancelButtonText>Cancel</CancelButtonText></DeleteButtonCancel>
       </DeleteButtonsBox>
</DeleteModalStyled>
   </Overlay>
        </div>
    )
}