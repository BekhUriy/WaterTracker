import { useEffect, useState } from 'react';
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
  IconWrapper, Percentage,
} from './MonthStatsTable.styled.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterMonth } from '../../../redux/water/selectors.js';
import { monthStatsThunk } from '../../../redux/water/waterThunk.js';


const MonthStatsTable = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isCurrentMonth, setIsCurrentMonth] = useState(true);

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const lastDayNumber = endDate.getDate();

  const mobile = useMediaQuery('(min-width:768px)');

  const formattedDays = days.map((day) => {
    const fullDate = format(day, 'yyyy-MM-dd');
    return {
      day: getDate(day),
      isToday: isToday(day),
      fullDate,
    };
  });

  const handlePrevMonth = () => {
    setCurrentDate(prevDate => startOfMonth(addMonths(prevDate, -1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const nextMonth = addMonths(prevDate, 1);
      return endOfMonth(nextMonth);
    });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverValue, setPopoverValue] = useState(null);

  const handlePopoverOpen = (event) => {
    setPopoverValue(event.target.value);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // ----------------------------------------------------

  useEffect(() => {
    const now = new Date();
    const startOfCurrentMonth = startOfMonth(now);
    const endOfCurrentMonth = endOfMonth(now);
    setIsCurrentMonth(
      isWithinInterval(currentDate, {
        start: startOfCurrentMonth,
        end: endOfCurrentMonth,
      }));
  }, [currentDate]);

  // redux
  const dispatch = useDispatch();
  const monthStats = useSelector(selectWaterMonth);

  useEffect(() => {
    dispatch(monthStatsThunk('2024-04-04'));
  }, [currentDate]);

  const getdayProcent = (array, day) => {
    const [res] = array.filter(el => {
      return el.date === day;
    });
    return {
      dailyNorma: res.dailyNorma,
      date: res.date,
      percentage: res.percentage,
      totalRecords: res.totalRecords,
    };
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
          <span>{format(startDate, 'MMMM yyyy')}</span>
          <ButtonPagination onClick={handleNextMonth}
                            disabled={isCurrentMonth}
          >
            <IconWrapper isCurrentMonth={isCurrentMonth}>
              <ArrowForwardIosIcon />
            </IconWrapper>
          </ButtonPagination>
        </Pagination>
      </HeaderMonth>
      <Days lastDayNumber={lastDayNumber}>
        {
          formattedDays.map((item) => {
              const procentage = monthStats?.length > 0 ?
                getdayProcent(monthStats, item.fullDate).percentage : 0;
              return (
                <DayPercentage key={item.day}>
                  <Day percentage={'10'}
                       isToday={item.isToday}                                        // id={'btn-month-state-table'}
                    // popover
                       aria-owns={open ? 'mouse-over-popover' : undefined}
                       aria-haspopup="true"
                       onMouseEnter={handlePopoverOpen}
                       onMouseLeave={handlePopoverClose}
                       value={item.fullDate}
                    // popover
                  >{item.day}</Day>
                  <Percentage>{procentage}%</Percentage>
                </DayPercentage>
              );
            },
          )
        }
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
        <DaysGeneralStats fullDate={popoverValue} />
      </Popover>
    </WrapperMonth>
  );
};

export default MonthStatsTable;
