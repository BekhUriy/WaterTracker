import { useEffect, useState } from 'react';
import XMarkOutlineIcon from '../Crossbar/CrossbarIcons/XMarkOutlineIcon';
import {
  AmountWaterBox,
  AmountWaterDecrementButton,
  AmountWaterIncrementButton,
  AmountWaterMlBox,
  AmountWaterMlDiv,
  ChooseValueSaveButton,
  ChooseValueSaveSpan,
  CrossbarAddWaterButton,
  CrossbarChooseValueSaveDiv,
  EnterValueInput,
  RecordingTimeInput,
} from '../Crossbar/CrossbarModal.styled';
import { Icon } from './IconButtons';
import { GlassIcon } from './Icons/GlassIcon';
import {
  AmountWaterText,
  CorrectDataText,
  DeleteModalHeaderText,
  Overlay,
  StyledDataBar,
  StyledEditWaterBox,
  StyledModal,
  StyledModalHeader,
} from './StyledEditWaterModal';
import {
  IconFramTwo,
  StyledDataContainer,
  StyledTime,
  StyledWater,
} from './StyledaddWaterList';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import {
  EditPortionThunk,
  getWaterPortionByIdThunk,
} from '../../../redux/water/waterThunk';
import MinusSmallSolidIcon from '../Crossbar/CrossbarIcons/MinusSmallSolidIcon';
import PlusSmallSolidIcon from '../Crossbar/CrossbarIcons/PlusSmallSolidIcon';
import { forceRender } from '../../../redux/water/waterSlice';

export const EditWaterModal = ({ isOpen, onClose, recordData }) => {
  const { amountWater: amW, date: dFromDate, _id } = recordData;
  const dispatch = useDispatch();

  const [amountWater, setAmountWater] = useState(amW);

  // time
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

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

    dispatch(EditPortionThunk({ id: _id, amountWater, date: isoDate }));
    dispatch(forceRender());
    onClose();
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

  // close/open modal
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

  const time = recordData.date;
  const localDate = time.toLocaleString();
  const dateStr = localDate;
  const date = new Date(dateStr);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return (
    <Overlay>
      <StyledModal>
        <StyledModalHeader>
          <DeleteModalHeaderText>
            Edit the entered amount of water
          </DeleteModalHeaderText>
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
              <StyledWater>{amW}</StyledWater>
              <StyledTime>
                {hours}:{formattedMinutes}
              </StyledTime>
            </StyledDataContainer>
          </StyledDataBar>
          <div>
            <CorrectDataText>Correct entered data:</CorrectDataText>
            <AmountWaterText>Amount of water:</AmountWaterText>
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
          <div>
            <AmountWaterText>Recording time:</AmountWaterText>
            <RecordingTimeInput
              type="time"
              step={300}
              value={currentTime}
              onChange={(e) => setCurrentTime(e.target.value)}
            ></RecordingTimeInput>
          </div>
          <div>
            <AmountWaterText>
              Enter the value of the water used:
            </AmountWaterText>
            <EnterValueInput
              type="number"
              value={amountWater}
              onChange={handleEnterValueChange}
            ></EnterValueInput>
          </div>
          <CrossbarChooseValueSaveDiv>
            <ChooseValueSaveSpan>{amountWater} ml</ChooseValueSaveSpan>
            <ChooseValueSaveButton onClick={handleSaveButtonClick}>
              Save
            </ChooseValueSaveButton>
          </CrossbarChooseValueSaveDiv>
        </StyledEditWaterBox>
      </StyledModal>
    </Overlay>
  );
};
