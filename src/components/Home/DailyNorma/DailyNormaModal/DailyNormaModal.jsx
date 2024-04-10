import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

import {
  CheckWrapper,
  CloseBtn,
  CloseSvg,
  FormStyled,
  FormTitle,
  FormulaSpan,
  FormulasGender,
  Gender,
  GenderItem,
  LiterPerDay,
  ModalContainer,
  ModalHeader,
  Required,
  SpanStar,
  VolumeDescription,
  WrapperForButton,
  ErrorMessage,
} from './DailyNormaModal.styled';

import { validationSchema } from '../utils/schemas/validationSchema';
import InputForm from '../utils/InputForm/InputForm';
import { ModalContext } from './ModalProvider/ModalProvider';
import Modal from '../utils/Modal/Modal';
import SaveButton from '../utils/SaveButton/SaveButton';

import { editDailyNormaThunk } from '../../../../redux/water/waterThunk';
import { forceRender } from '../../../../redux/water/waterSlice';
import { useUser } from '../../../../hooks/useUser';

const DailyNormaModal = () => {
  const toggleModal = useContext(ModalContext);
  const user = useUser();

  const dispatch = useDispatch();

  const onClickModalClose = () => {
    toggleModal();
  };

  const [calculatedWaterAmount, setCalculatedWaterAmount] = useState(0);

  const calculateWaterAmount = useCallback((values) => {
    const weightCoefficient = values.gender === 'female' ? 0.03 : 0.04;
    const timeCoefficient = values.gender === 'female' ? 0.4 : 0.6;
    if (values.weight >= 0 && values.activityTime >= 0) {
      const calculatedAmount =
        values.weight * weightCoefficient +
        values.activityTime * timeCoefficient;
      setCalculatedWaterAmount(calculatedAmount.toFixed(1));
    } else {
      setCalculatedWaterAmount('Error');
    }
  }, []);

  const handleChangeInput = (e) => {
    formik.handleChange(e);
  };

  const handleSubmit = async () => {
    let amountWater = formik.values.waterAmount * 1000;

    if (amountWater >= 0 && amountWater <= 10000) {
      dispatch(editDailyNormaThunk({ waterRate: amountWater }));

      dispatch(forceRender(true));

      toast.success('Daily norma successfully updated');
    } else {
      toast.warning(
        'The amount of water must be a positive number and no more than 10 liters'
      );
    }
    formik.resetForm();
    toggleModal();
  };

  const formik = useFormik({
    initialValues: {
      gender: user.gender,
      weight: 0,
      activityTime: 0,
      waterAmount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const handleFocus = (e, fieldName) => {
    if (fieldName !== 'waterAmount') {
      e.target.value = '';
    }
  };

  const handleBlur = (e, fieldName) => {
    if (e.target.value >= 0) {
      if (fieldName !== 'wateramount') {
        formik.setFieldValue('waterAmount', calculatedWaterAmount);
      }
    } else {
      formik.setFieldValue('waterAmount', 0);
      toast.warning('Negative numbers are not allowed');
    }
  };

  useEffect(() => {
    calculateWaterAmount(formik.values);
  }, [calculateWaterAmount, formik.values]);

  return (
    <Modal onClose={toggleModal}>
      <ModalContainer>
        <>
          <ModalHeader>
            My daily norma
            <CloseBtn onClick={onClickModalClose}>
              <CloseSvg />
            </CloseBtn>
          </ModalHeader>

          <FormulasGender>
            <GenderItem>
              For girl:
              <FormulaSpan>V=(M*0,03) + (T*0,4)</FormulaSpan>
            </GenderItem>
            <GenderItem>
              For man:
              <FormulaSpan>V=(M*0,04) + (T*0,6)</FormulaSpan>
            </GenderItem>
          </FormulasGender>

          <VolumeDescription>
            <SpanStar>*</SpanStar> V is the volume of the water norm in liters
            per day, M is your body weight, T is the time of active sports, or
            another type of activity commensurate in terms of loads (in the
            absence of these, you must set 0)
          </VolumeDescription>

          <FormStyled>
            <FormTitle>Calculate your rate:</FormTitle>

            <Gender>
              <CheckWrapper>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={() => formik.setFieldValue('gender', 'female')}
                    checked={formik.values.gender === 'female'}
                  />
                  <span>For women</span>
                </label>
              </CheckWrapper>
              <CheckWrapper>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={() => formik.setFieldValue('gender', 'male')}
                    checked={formik.values.gender === 'male'}
                  />
                  <span>For men</span>
                </label>
              </CheckWrapper>
            </Gender>

            <InputForm
              label="Your weight in kilograms:"
              inputType="dailyNorma"
              value={formik.values.weight}
              onChange={(e) => handleChangeInput(e, 'weight')}
              onFocus={(e) => handleFocus(e, 'weight')}
              onBlur={(e) => handleBlur(e, 'weight')}
              name="weight"
              type="number"
              min="0"
              step="0.1"
              error={formik.touched.weight && formik.errors.weight}
            />

            <InputForm
              label="The time of active participation in sports
                        or other activities with a high physical. load in hours:"
              inputType="dailyNorma"
              value={formik.values.activityTime}
              onChange={(e) => handleChangeInput(e, 'activityTime')}
              onFocus={(e) => handleFocus(e, 'activityTime')}
              onBlur={(e) => handleBlur(e, 'activityTime')}
              name="activityTime"
              type="number"
              min="0"
              max="10"
              step="0.1"
              error={formik.touched.activityTime && formik.errors.activityTime}
            />

            <Required>
              <>The required amount of water in liters per day:</>
              <LiterPerDay>
                {isNaN(calculatedWaterAmount) || calculatedWaterAmount < 0 ? (
                  <ErrorMessage>Input data error</ErrorMessage>
                ) : (
                  `${calculatedWaterAmount} L`
                )}
              </LiterPerDay>
            </Required>

            <InputForm
              label="Write down how much water you will drink:"
              inputType="dailyNorma"
              value={formik.values.waterAmount}
              onChange={(e) => handleChangeInput(e, 'waterAmount')}
              onFocus={(e) => handleFocus(e, 'waterAmount')}
              name="waterAmount"
              type="number"
              min="0"
              max="20"
              step="0.1"
              error={formik.touched.waterAmount && formik.errors.waterAmount}
            />

            <WrapperForButton>
              <SaveButton type="submit" onClick={handleSubmit}>
                Save
              </SaveButton>
            </WrapperForButton>
            <ToastContainer />
          </FormStyled>
        </>
      </ModalContainer>
    </Modal>
  );
};

export default DailyNormaModal;
