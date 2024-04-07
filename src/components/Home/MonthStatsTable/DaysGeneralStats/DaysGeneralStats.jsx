import { format } from 'date-fns';
import {
  DateWrap,
  ModalContainer,
  TextWrap,
} from './DaysGeneralStats.styled.jsx';

const DaysGeneralStats = ({ dayInfo }) => {
  const { data, dailyNorma, percentage, totalRecords } = dayInfo;

  return (
    <ModalContainer>
      <DateWrap>{format(data, 'dd, MMMM')}</DateWrap>
      <TextWrap>
        Daily norma:<span>{dailyNorma} L</span>
      </TextWrap>
      <TextWrap>
        Fulfillment of the daily norm:<span>{percentage}%</span>
      </TextWrap>
      <TextWrap>
        How many servings of water:<span>{totalRecords}</span>
      </TextWrap>
    </ModalContainer>
  );
};

export default DaysGeneralStats;
