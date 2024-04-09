import { useContext } from 'react';
import {
    DailyNormaBackground,
  DailyNormaBtn,
  DailyNormaContainer,
  MyDailyNormaContainer,
  Title,
  WaterNorma,
  WaterNormaContainer,
} from './DailyNorma.styled';
import { ModalContext } from './DailyNormaModal/ModalProvider/ModalProvider';
import DailyNormaModal from './DailyNormaModal/DailyNormaModal';

import { useUser } from '../../../hooks/useUser';

const DailyNorma = () => {
  const { waterRate } = useUser().user;

  const toggleModal = useContext(ModalContext);

  const dailyNorma = (waterRate / 1000).toFixed(1);

  const openDailyNormalModal = () => {
    toggleModal(<DailyNormaModal />);
  };

  return (
     <DailyNormaContainer>
      <MyDailyNormaContainer>
        <Title>My daily norma</Title>
        <WaterNormaContainer>
          <WaterNorma>{`${dailyNorma}`}</WaterNorma>
          <DailyNormaBtn onClick={openDailyNormalModal}>Edit</DailyNormaBtn>
        </WaterNormaContainer>
      </MyDailyNormaContainer>
      <DailyNormaBackground/>
    </DailyNormaContainer>
  );
};

export default DailyNorma;
