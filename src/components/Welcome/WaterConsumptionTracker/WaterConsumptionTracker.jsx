import { useNavigate } from 'react-router';
import {
  Button,
  CalendarIcon,
  Container,
  Item,
  ItemText,
  List,
  ListTittle,
  SettingIcon,
  StatisticsIcon,
  SubTittle,
  Tittle,
} from './WaterConsumptionTracker.styled';

const WaterConsumptionTracker = () => {
  const navigate =useNavigate()
 
  const handlerClick = () => {
    navigate('/signup')
  }
  return (

    <>
      <Container>
        <Tittle>Water consumption tracker</Tittle>
        <SubTittle>Record daily water intake and track</SubTittle>
        <ListTittle>Tracker Benefits</ListTittle>
        <List>
          <Item>
            <CalendarIcon />
            <ItemText>Habit drive</ItemText>
          </Item>
          <Item>
            <StatisticsIcon />
            <ItemText>View statistics</ItemText>
          </Item>
          <Item>
            <SettingIcon />
            <ItemText>Personal rate setting</ItemText>
          </Item>
        </List>
        <Button type="button" onClick={handlerClick}>Try tracker</Button>
      </Container>
    </>
  );
};

export default WaterConsumptionTracker;