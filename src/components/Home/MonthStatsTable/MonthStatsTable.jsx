import { useEffect, useMemo, useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  getDate,
  isToday,
  addMonths,
  isWithinInterval,
} from 'date-fns';
// mui
import { useMediaQuery } from '@mui/material';
import Popover from '@mui/material/Popover';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// components
import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats.jsx';
// styles
import {
  WrapperMonth,
  HeaderMonth,
  Pagination,
  ButtonPagination,
  Days,
  Day,
  DayPercentage,
  IconWrapper,
  Percentage,
  CurrentMonth,
} from './MonthStatsTable.styled.jsx';
import { useDispatch } from 'react-redux';
import { monthStatsThunk } from '../../../redux/water/waterThunk.js';
import { useWater } from '../../../hooks/useWater.js';

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isCurrentMonth, setIsCurrentMonth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverValue, setPopoverValue] = useState(null);
  const monthStats = useWater().monthStats;

  const open = Boolean(anchorEl);

  const mobile = useMediaQuery('(min-width:768px)');

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const lastDayNumber = endDate.getDate();

  const formattedDays = useMemo(() => {
    return days.map((day) => {
      const fullDate = format(day, 'yyyy-MM-dd');
      return {
        day: getDate(day),
        isToday: isToday(day),
        fullDate,
      };
    });
  }, [days]);

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => startOfMonth(addMonths(prevDate, -1)));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonth = addMonths(prevDate, 1);
      return endOfMonth(nextMonth);
    });
  };

  const handlePopoverOpen = (event) => {
    const value = event.target.value;
    const dayInfo = getInfoForDay(monthStats, value);

    setPopoverValue(dayInfo);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const now = new Date();
    const startOfCurrentMonth = startOfMonth(now);
    const endOfCurrentMonth = endOfMonth(now);
    setIsCurrentMonth(
      isWithinInterval(currentDate, {
        start: startOfCurrentMonth,
        end: endOfCurrentMonth,
      }),
    );
  }, [currentDate]);

  useEffect(() => {
    dispatch(monthStatsThunk(format(currentDate, 'yyyy-MM-dd')));
  }, [dispatch, currentDate]);

  const getInfoForDay = (monthStats, currentDate) => {
    const [res] = monthStats.filter((el) => el.date === currentDate);
    if (res) {
      const percentage =
        Math.ceil(res.percentage / 10) * 10 > 100
          ? 100
          : Math.ceil(res.percentage / 10) * 10;

      return {
        data: currentDate,
        dailyNorma: res.dailyNorma / 1000,
        percentage,
        totalRecords: res.totalRecords,
      };
    } else {
      return {
        data: currentDate,
        dailyNorma: 1.5,
        percentage: 0,
        totalRecords: 0,
      };
    }
  };

  return (
    <WrapperMonth>
      <HeaderMonth>
        <h2>Month</h2>
        <Pagination>
          <ButtonPagination onClick={handlePrevMonth}>
            <IconWrapper>
              <ArrowBackIosIcon />
            </IconWrapper>
          </ButtonPagination>
<<<<<<< Updated upstream
          <span>{format(currentDate, 'MMMM yyyy')}</span>
          <ButtonPagination onClick={handleNextMonth}
                            disabled={isCurrentMonth}
          >
=======
          <CurrentMonth>{format(currentDate, 'MMMM yyyy')}</CurrentMonth>
          <ButtonPagination onClick={handleNextMonth} disabled={isCurrentMonth}>
>>>>>>> Stashed changes
            <IconWrapper isCurrentMonth={isCurrentMonth}>
              <ArrowForwardIosIcon />
            </IconWrapper>
          </ButtonPagination>
        </Pagination>
      </HeaderMonth>
      <Days lastDayNumber={lastDayNumber}>
        {formattedDays.map((item) => {
          const dayInfo = getInfoForDay(monthStats, item.fullDate);
          return (
            <DayPercentage key={item.day}>
              <Day
                percentage={dayInfo.percentage}
                isToday={item.isToday}
                // popover
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                value={item.fullDate}
                // popover
              >
                {item.day}
              </Day>
              <Percentage>{dayInfo.percentage}%</Percentage>
            </DayPercentage>
          );
        })}
      </Days>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: mobile ? 'left' : 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <DaysGeneralStats dayInfo={popoverValue} />
      </Popover>
    </WrapperMonth>
  );
};

export default MonthStatsTable;
