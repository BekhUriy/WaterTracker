import { useEffect, useState } from 'react';
import MinusSmallSolidIcon from './CrossbarIcons/MinusSmallSolidIcon';
import PlusSmallSolidIcon from './CrossbarIcons/PlusSmallSolidIcon';
import XMarkOutlineIcon from './CrossbarIcons/XMarkOutlineIcon';
import {
  AmountWaterBox,
  AmountWaterDecrementButton,
  AmountWaterIncrementButton,
  AmountWaterMlBox,
  AmountWaterMlDiv,
  AmountWaterTitle,
  ChooseValueSaveButton,
  ChooseValueSaveSpan,
  CrossbarAddWaterButton,
  CrossbarAddWaterDiv,
  CrossbarChooseValueDiv,
  CrossbarChooseValueSaveDiv,
  CrossbarRootDiv,
  EnterValueInput,
  EnterValueTitle,
  RecordingTimeInput,
  RecordingTimeTitle,
} from './CrossbarModal.styled';
import { useDispatch } from 'react-redux';
import { addPortionThunk } from '../../../redux/water/waterThunk.js';

const CrossbarModal = ({ isOpen, onClose, onSave }) => {
  const [amountWater, setAmountWater] = useState(0);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const dispatch = useDispatch();

  const incrementWaterAmount = () => {
    setAmountWater((prevAmount) => prevAmount + 50);
  };

  const decrementWaterAmount = () => {
    if (amountWater >= 50) {
      setAmountWater((prevAmount) => prevAmount - 50);
    }
  };

  const handleSaveButtonClick = () => {
    const [hours, minutes] = currentTime.split(':');
    const currentDate = new Date();
    currentDate.setUTCHours(hours, minutes);
    const isoDate = currentDate.toISOString();
    dispatch(addPortionThunk({ amountWater, date: isoDate }));

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

  const handleChangeTime = (e) => {
    const selectedTime = e.target.value;
    setCurrentTime(selectedTime);
  };

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

  if (!isOpen) return null;
  return (
    <CrossbarRootDiv>
      <CrossbarAddWaterDiv>
        <h2>Add water</h2>
        <CrossbarAddWaterButton onClick={onClose}>
          <XMarkOutlineIcon />
        </CrossbarAddWaterButton>
      </CrossbarAddWaterDiv>
      <div>
        <CrossbarChooseValueDiv>
          <h3 style={{ marginBottom: '16px' }}>Choose a value:</h3>

          <div style={{ marginBottom: '24px' }}>
            <AmountWaterTitle>Amount of water:</AmountWaterTitle>
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
          </div>

          <div style={{ marginBottom: '24px' }}>
            <RecordingTimeTitle>Recording time:</RecordingTimeTitle>
            <RecordingTimeInput
              type="time"
              step={300}
              value={currentTime}
              onChange={handleChangeTime}
            ></RecordingTimeInput>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <EnterValueTitle>
              Enter the value of the water used:
            </EnterValueTitle>
            <EnterValueInput
              type="number"
              value={amountWater}
              onChange={handleEnterValueChange}
            />
          </div>

          <CrossbarChooseValueSaveDiv>
            <ChooseValueSaveSpan>{amountWater} ml</ChooseValueSaveSpan>
            <ChooseValueSaveButton onClick={handleSaveButtonClick}>
              Save
            </ChooseValueSaveButton>
          </CrossbarChooseValueSaveDiv>
        </CrossbarChooseValueDiv>
      </div>
    </CrossbarRootDiv>
  );
};

export default CrossbarModal;
