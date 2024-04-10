import { useState, useEffect } from 'react';

import {
  Gender,
  GenderTitle,
  InputGender,
  InputsRadio,
} from './SettingModal.styled';

import { useUser } from '../../hooks/useUser';

export const GenderBlock = ({ getValue }) => {
  const { gender } = useUser().user;
  const [value, setValue] = useState({ gender: gender });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    getValue(value);
  }, [value, getValue]);

  return (
    <Gender>
      <GenderTitle>Your gender identity</GenderTitle>
      <InputsRadio>
        <InputGender>
          <input
            type="radio"
            id="Abstain"
            name="gender"
            value="Prefer not to specify"
            checked={value.gender === 'Prefer not to specify'}
            onChange={handleChange}
          ></input>
          <label htmlFor="Abstain">Abstain</label>
        </InputGender>
        <InputGender>
          <input
            type="radio"
            id="woman"
            name="gender"
            value="woman"
            checked={value.gender === 'woman'}
            onChange={handleChange}
          ></input>
          <label htmlFor="woman">Woman</label>
        </InputGender>
        <InputGender>
          <input
            type="radio"
            id="man"
            name="gender"
            value="man"
            checked={value.gender === 'man'}
            onChange={handleChange}
          ></input>
          <label htmlFor="man">Man</label>
        </InputGender>
      </InputsRadio>
    </Gender>
  );
};
