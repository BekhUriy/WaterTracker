import { DeleteModalStyled, Overlay,  StyledModalHeader } from "./StyledEditWaterModal"

export const DeleteModal = ({isOpen, onClose})=>{
    if(isOpen===false) return null
    return(
        <div>
<Overlay >
   <DeleteModalStyled>
         <StyledModalHeader>
             <h2>Edit the entered amount of water</h2>
         <button type="button"onClick={onClose}>x</button>
         </StyledModalHeader>

</DeleteModalStyled>
   </Overlay>
        </div>
    )
}