import { useState } from 'react';
import {
  Gender,
  GenderTitle,
  InputGender,
  InputsRadio,
} from './SettingModal.styled';

export const GenderBlock = ({ user, setData }) => {
  const [gender, setGender] = useState(user.gender || 'Prefer not to specify');

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

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
            checked={gender === 'Prefer not to specify'}
            onChange={handelChange}
          ></input>
          <label htmlFor="Abstain"> Abstain</label>
        </InputGender>
        <InputGender>
          <input
            type="radio"
            id="woman"
            name="gender"
            value="woman"
            checked={gender === 'woman'}
            onChange={handelChange}
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
            onChange={handelChange}
          ></input>
          <label htmlFor="man">Man</label>
        </InputGender>
      </InputsRadio>
    </Gender>
  );
};
