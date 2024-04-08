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
  const waterRecords = useWater().waterRecords;

  useEffect(() => {
    const percentage = Math.round(
      (waterAmount / authUser?.waterRate) * 100 +
        waterRecords?.percentageOfWaterConsumption
    );
    setWaterIntakePercentage(percentage);
  }, [waterAmount, waterRecords]);

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
          value={waterIntakePercentage}
          style={{ backgroundSize: `${waterIntakePercentage}% 100%` }}
        />

        <CrossbarProcentSpan>
          <CrossbarSpanStart>0%</CrossbarSpanStart>
          {waterIntakePercentage > 1 && waterIntakePercentage < 99 && (
            <CrossbarSpanMiddle
              style={{ left: `calc(${waterIntakePercentage}% + 2px)` }}
              id="WaterMark"
            >
              {waterIntakePercentage}%
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
