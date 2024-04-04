import Crossbar from '../../components/Home/Crossbar/Crossbar.jsx';
import DailyNorma from '../../components/Home/DailyNorma/DailyNorma.jsx';
import MonthStatsTable from '../../components/Home/MonthStatsTable/MonthStatsTable.jsx';
import {
  DailyNormaContainer,
  HomeContainer,
  HomeSection,
  StatisticsContainer,
} from './Home.styled.js';

const HomePage = () => {
  return (
    <HomeSection>
      <HomeContainer>
        <DailyNormaContainer>
          <DailyNorma />
          {/* DailyNorma */}
          <Crossbar></Crossbar>
          {/* //WaterRatioPanel */}
        </DailyNormaContainer>
        <StatisticsContainer>
          {/* //TodayWaterList  */}
          <MonthStatsTable/>
          {/* //MonthStatsTable */}
        </StatisticsContainer>
      </HomeContainer>
    </HomeSection>
  );
};

export default HomePage;
