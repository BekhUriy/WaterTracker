import { useSelector } from 'react-redux';
import {
  selectIsChangeWaterRate,
  selectMonthStats,
  selectWaterRecords,
} from '../redux/water/selectors.js';

export const useWater = () => ({
  waterRecords: useSelector(selectWaterRecords),
  monthStats: useSelector(selectMonthStats),
  isChangeWaterRate: useSelector(selectIsChangeWaterRate),
});
