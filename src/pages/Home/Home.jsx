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

const HomePage = () => {
  return (
    <BubblesContainer>
      <HomeSection>
        <HomeContainer>
          <DailyNormaContainer>
            <DailyNorma />
            <DailyNormaBackground/>
            {/* DailyNorma */}
            <Crossbar/>
            {/* //WaterRatioPanel */}
          </DailyNormaContainer>
          <StatisticsContainer>
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
