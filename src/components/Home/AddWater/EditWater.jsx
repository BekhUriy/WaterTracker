import { useEffect, useState } from "react";
import XMarkOutlineIcon from "../Crossbar/CrossbarIcons/XMarkOutlineIcon";
import { AmountWaterBox, AmountWaterDecrementButton, AmountWaterIncrementButton, AmountWaterMlBox, AmountWaterMlDiv, CrossbarAddWaterButton, EnterValueInput, RecordingTimeInput } from "../Crossbar/CrossbarModal.styled";
import { Icon } from "./IconButtons";
import { GlassIcon } from "./Icons/GlassIcon";
import {  Overlay, StyledCounter, StyledDataBar, StyledEditWaterBox, StyledModal, StyledModalHeader } from "./StyledEditWaterModal";
import { IconFramTwo, StyledDataContainer, StyledTime, StyledWater } from "./StyledaddWaterList";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { EditPortionThunk, getWaterPortionByIdThunk } from "../../../redux/water/waterThunk";
import { useWater } from "../../../hooks/useWater";
import MinusSmallSolidIcon from "../Crossbar/CrossbarIcons/MinusSmallSolidIcon";
import PlusSmallSolidIcon from "../Crossbar/CrossbarIcons/PlusSmallSolidIcon";

export const EditWaterModal = ({ isOpen, onClose, onSave,id })=>{
  const [amountWater, setAmountWater] = useState(0);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const dispatch = useDispatch();
  const curruntDate = new Date();
  const formatedDate = format(curruntDate, 'yyyy-MM-dd-HH:m:ss');

  useEffect(() => {
    dispatch(getWaterPortionByIdThunk(id));
  }, []);
  const waterRecords = useWater().waterRecords;
  console.log(waterRecords);
  const incrementWaterAmount = () => {
    setAmountWater((prevAmount) => prevAmount + 50);
  };

  const decrementWaterAmount = () => {
    if (amountWater >= 50) {
      setAmountWater((prevAmount) => prevAmount - 50);
    }
  };

  const handleSaveButtonClick = () => {
    dispatch(EditPortionThunk({ amountWater, date: formatedDate }));
    onClose();
    onSave(amountWater);
    setCurrentTime(getCurrentTime());
  };

  const handleEnterValueChange = (event) => {
    const newValue = parseInt(event.target.value);
    setAmountWater(newValue);
  };

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

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
  if (isOpen===false) return null
    return (
   <Overlay >
     <StyledModal>
         <StyledModalHeader>
             <h2>Edit the entered amount of water</h2>
         <CrossbarAddWaterButton onClick={onClose}>
         <XMarkOutlineIcon />
        </CrossbarAddWaterButton>
         </StyledModalHeader>

         <StyledEditWaterBox>
          <StyledDataBar>
       <Icon>
            <IconFramTwo>
              <GlassIcon />
            </IconFramTwo>
          </Icon> 
          <StyledDataContainer>
            <StyledWater>200ml</StyledWater>
            <StyledTime>11:00 AM</StyledTime>
          </StyledDataContainer>
         </StyledDataBar>
         <AmountWaterBox>
              <AmountWaterDecrementButton onClick={decrementWaterAmount}>
                <MinusSmallSolidIcon />
              </AmountWaterDecrementButton>
              <AmountWaterMlDiv>
                <AmountWaterMlBox>{amountWater} ml</AmountWaterMlBox>
              </AmountWaterMlDiv>
              <AmountWaterIncrementButton onClick={incrementWaterAmount}>
                <PlusSmallSolidIcon />
              </AmountWaterIncrementButton>
            </AmountWaterBox>
         <RecordingTimeInput
              type="time"
              step={300}
              value={currentTime}
            ></RecordingTimeInput>
             <EnterValueInput
              type="number"
              value={amountWater}
              onChange={handleEnterValueChange}
            ></EnterValueInput>
<p>Correct entered data:</p>
<p>Amount of water:</p>
<StyledCounter>
<button type="button"></button>

<button type="button"></button>
</StyledCounter>



<p>Recording time:</p>
Enter the value of the water used:

</StyledEditWaterBox>
     </StyledModal>
   </Overlay>
 );
}

