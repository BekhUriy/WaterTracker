import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Crossbar from '../../components/Home/Crossbar/Crossbar.jsx';
import DailyNorma from '../../components/Home/DailyNorma/DailyNorma.jsx';
import MonthStatsTable from '../../components/Home/MonthStatsTable/MonthStatsTable.jsx';
import { AddWaterList } from '../../components/Home/AddWater/addWaterList.jsx';

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

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userThunk());
  }, []);

  useEffect(() => {
    dispatch(getWaterPortionsThunk());
  }, []);

  return (
    <BubblesContainer>
      <HomeSection>
        <HomeContainer>
          <DailyNormaContainer>
            {<DailyNorma />}
            <DailyNormaBackground />
            {/* DailyNorma */}
            {/* <Crossbar /> */}
            {/* //WaterRatioPanel */}
          </DailyNormaContainer>
          <StatisticsContainer>
            {/* {water && <AddWaterList water={water} />} */}
            {/* //TodayWaterList  */}
            {/* <MonthStatsTable /> */}
            {/* //MonthStatsTable */}
          </StatisticsContainer>
        </HomeContainer>
      </HomeSection>
    </BubblesContainer>
  );
};

export default HomePage;
