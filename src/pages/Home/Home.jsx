import Crossbar from '../../components/Home/Crossbar/Crossbar.jsx';
import DailyNorma from '../../components/Home/DailyNorma/DailyNorma.jsx';
import MonthStatsTable from '../../components/Home/MonthStatsTable/MonthStatsTable.jsx';
import {
  BubblesContainer,
  DailyNormaBackground,
  DailyNormaContainer,
  HomeContainer,
  HomeSection,
  StatisticsContainer,
} from './Home.styled.js';
import { useAuth } from '../../hooks/useAuth.js';
import { useEffect } from 'react';
import { useWater } from '../../hooks/useWater.js';
import { useDispatch } from 'react-redux';
import { currentThunk } from '../../redux/auth/thunk.js';
import { getWaterPortionsThunk } from '../../redux/water/waterThunk.js';
import { AddWaterList } from '../../components/Home/AddWater/addWaterList.jsx';

const HomePage = () => {
  const user = useAuth().authUser;
  const isChangeWaterRate = useWater().isChangeWaterRate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [isChangeWaterRate]);

  useEffect(() => {
    dispatch(getWaterPortionsThunk());
  }, []);

  return (
    <BubblesContainer>
      <HomeSection>
        <HomeContainer>
          <DailyNormaContainer>
            <DailyNorma user={user} />
            <DailyNormaBackground />
            {/* DailyNorma */}
            <Crossbar />
            {/* //WaterRatioPanel */}
          </DailyNormaContainer>
          <StatisticsContainer>
            <AddWaterList/>
            {/* //TodayWaterList  */}
            <MonthStatsTable />
            {/* //MonthStatsTable */}
          </StatisticsContainer>
        </HomeContainer>
      </HomeSection>
    </BubblesContainer>
  );
};

export default HomePage;
