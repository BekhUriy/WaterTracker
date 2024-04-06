import { Overlay, StyledModal, StyledModalHeader } from "./StyledEditWaterModal"

export const DeleteModal = ({isOpen, onClose})=>{
    if(isOpen===false) return null
    return(
        <div>
<Overlay >
     <StyledModal>
         <StyledModalHeader>
             <h2>Edit the entered amount of water</h2>
         <button type="button"onClick={onClose}>x</button>
         </StyledModalHeader>

</StyledModal>
   </Overlay>
        </div>
    )
}