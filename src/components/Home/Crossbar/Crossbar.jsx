import { useState } from 'react';

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
import { useWater } from '../../../hooks/useWater.js';

const Crossbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [WaterAmount, setWaterAmount] = useState(0);
  const { percentageOfWaterConsumption } = useWater().waterRecords;

  // const handleSaveWaterAmount = (newWaterAmount) => {
  //   setWaterAmount((prevWaterAmount) => prevWaterAmount + newWaterAmount);
  // };

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
          value={
            percentageOfWaterConsumption ? percentageOfWaterConsumption : 0
          }
          style={{ backgroundSize: `${percentageOfWaterConsumption}% 100%` }}
          readOnly
        />

        <CrossbarProcentSpan>
          <CrossbarSpanStart>0%</CrossbarSpanStart>
          {percentageOfWaterConsumption > 1 &&
            percentageOfWaterConsumption < 99 && (
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
      {isModalOpen && (
        <CrossbarModal
          isOpen={isModalOpen}
          onClose={closeModal}
          // onSave={handleSaveWaterAmount}
        />
      )}
    </CrossbarBox>
  );
};

export default Crossbar;
