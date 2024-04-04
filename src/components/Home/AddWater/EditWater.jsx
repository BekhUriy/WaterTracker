import { Overlay, StyledCounter, StyledModal, StyledModalHeader } from "./StyledEditWaterModal";

export const EditWaterModal = ({ isOpen, onClose })=>{
  if (isOpen===false) return null
    return (
   <Overlay >
     <StyledModal>
         <StyledModalHeader>
             <h2>Edit the entered amount of water</h2>
         <button type="button"onClick={onClose}>x</button>
         </StyledModalHeader>
         <div>visualization</div>

<p>Correct entered data:</p>
<p>Amount of water:</p>
<StyledCounter>
<button type="button"></button>

<button type="button"></button>
</StyledCounter>
{/* <Form> */}


<p>Recording time:</p>
Enter the value of the water used:
{/* </Form> */}
     </StyledModal>
   </Overlay>
 );
}

