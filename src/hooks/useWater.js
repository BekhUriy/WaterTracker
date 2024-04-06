import { useSelector } from 'react-redux';
import { selectWaterRecords } from '../redux/water/selectors.js';
import { selectMonth } from '../redux/month/selectors.js';

export const useWater = () => ({
  waterRecords: useSelector(selectWaterRecords),
  waterMonth: useSelector(selectMonth),
});