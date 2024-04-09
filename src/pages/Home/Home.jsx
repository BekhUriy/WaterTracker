import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Crossbar from '../../components/Home/Crossbar/Crossbar.jsx';
import DailyNorma from '../../components/Home/DailyNorma/DailyNorma.jsx';
import MonthStatsTable from '../../components/Home/MonthStatsTable/MonthStatsTable.jsx';
import { TodayWaterList } from '../../components/Home/AddWater/TodayWaterList.jsx';

import {
  BubblesContainer,
  DailyNormaBackground,
  DailyNormaContainer,
  HomeContainer,
  HomeSection,
  StatisticsContainer,
} from './Home.styled.js';

import { getWaterPortionsThunk } from '../../redux/water/waterThunk.js';
import { userThunk } from '../../redux/user/thunk.js';
import { useWater } from '../../hooks/useWater.js';

const HomePage = () => {
  const dispatch = useDispatch();

  const forceRender = useWater().forceRender;

  useEffect(() => {
    dispatch(userThunk());
    dispatch(getWaterPortionsThunk());
  }, [forceRender]);

  return (
    <BubblesContainer>
      <HomeSection>
        <HomeContainer>
          <DailyNormaContainer>
            {<DailyNorma />}
            <DailyNormaBackground />
            <Crossbar />
          </DailyNormaContainer>
          <StatisticsContainer>
            <TodayWaterList />
            {/* <MonthStatsTable /> */}
          </StatisticsContainer>
        </HomeContainer>
      </HomeSection>
    </BubblesContainer>
  );
};

export default HomePage;
