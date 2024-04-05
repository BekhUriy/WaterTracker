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

const Crossbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waterAmount, setWaterAmount] = useState(0);
  const [waterIntakePercentage, setWaterIntakePercentage] = useState(0);

  const WaterNormaValue = '2.0 L'; // temporarily instead of import 'WaterNormaValue'

  useEffect(() => {
    const waterNormaInML = parseFloat(WaterNormaValue) * 1000;
    const percentage = Math.round((waterAmount / waterNormaInML) * 100);
    setWaterIntakePercentage(percentage);
  }, [waterAmount]);

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
          percentage={waterIntakePercentage}
        />

        <CrossbarProcentSpan>
          <CrossbarSpanStart>0%</CrossbarSpanStart>
          {waterIntakePercentage > 1 && waterIntakePercentage < 99 && (
            <CrossbarSpanMiddle
              percentage={waterIntakePercentage}
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
