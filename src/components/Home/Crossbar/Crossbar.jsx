import { useState, useEffect } from 'react';
import {
  CrossbarBox,
  CrossbarBoxRange,
  CrossbarInput,
  CrossbarProcentSpan,
  CrossbarSpanEnd,
  CrossbarSpanStart,
  CrossbarText,
  DarkOverlay,
  CrossbarButton,
  CrossbarSpanMiddle,
} from './Crossbar.styled';
import CrossbarButtonIcon from './CrossbarIcons/CrossbarButtonIcon';
import CrossbarModal from './CrossbarModal';
import { useAuth } from '../../../hooks/useAuth.js';
import { useWater } from '../../../hooks/useWater.js';

const Crossbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waterAmount, setWaterAmount] = useState(0);
  const [waterIntakePercentage, setWaterIntakePercentage] = useState(0);
  const authUser = useAuth().authUser;
  const {percentageOfWaterConsumption} = useWater().waterRecords;


  // useEffect(() => {
  //   const percentage = Math.round(
  //     (waterAmount / authUser?.waterRate) * 100 +
  //       waterRecords?.percentageOfWaterConsumption
  //   );
  //   setWaterIntakePercentage(percentage);
  // }, [waterAmount, waterRecords]);

  const handleSaveWaterAmount = (newWaterAmount) => {
    setWaterAmount((prevWaterAmount) => prevWaterAmount + newWaterAmount);
  };

  const handleCrossbarButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CrossbarBox>
      {isModalOpen && <DarkOverlay onClick={closeModal} />}
      <CrossbarBoxRange>
        <CrossbarText>Today</CrossbarText>
        <CrossbarInput
          type="range"
          min={0}
          max={100}
          value={percentageOfWaterConsumption? percentageOfWaterConsumption : 0} 
          style={{ backgroundSize: `${percentageOfWaterConsumption}% 100%` }}
          readOnly
        />

        <CrossbarProcentSpan>
          <CrossbarSpanStart>0%</CrossbarSpanStart>
          {percentageOfWaterConsumption > 1 && percentageOfWaterConsumption < 99 && (
            <CrossbarSpanMiddle
              style={{ left: `calc(${percentageOfWaterConsumption}% + 2px)` }}
              id="WaterMark"
            >
              {percentageOfWaterConsumption}%
            </CrossbarSpanMiddle>
          )}
          <CrossbarSpanEnd>100%</CrossbarSpanEnd>
        </CrossbarProcentSpan>
      </CrossbarBoxRange>
      <CrossbarButton onClick={handleCrossbarButtonClick}>
        <CrossbarButtonIcon />
        Add Water
      </CrossbarButton>
      <CrossbarModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveWaterAmount}
      />
    </CrossbarBox>
  );
};

export default Crossbar;
