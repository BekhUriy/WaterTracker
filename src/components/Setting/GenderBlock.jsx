import React, { useState } from 'react';
import {
  Gender,
  GenderTitle,
  InputGender,
  InputsRadio,
} from './SettingModal.styled';

export const GenderBlock = ({ user }) => {
  const [gender, setGender] = useState(user.gender || 'woman');

  return (
    <Gender>
      <GenderTitle>Your gender identity</GenderTitle>
      <InputsRadio>
        <InputGender>
          <input
            type="radio"
            id="woman"
            name="gender"
            value="woman"
            checked={gender === 'woman'}
            onChange={() => setGender('woman')}
          ></input>
          <label htmlFor="woman">Woman</label>
        </InputGender>
        <InputGender>
          <input
            type="radio"
            id="man"
            name="gender"
            value="man"
            checked={gender === 'man'}
            onChange={() => setGender('man')}
          ></input>
          <label htmlFor="man">Man</label>
        </InputGender>
      </InputsRadio>
    </Gender>
  );
};