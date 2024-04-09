import { useEffect, useState } from 'react';

import { useUser } from '../../hooks/useUser';
import { BlockInput, InputTitle, Inputs, Input } from './SettingModal.styled';

export const NameEmailBlock = ({ getValue }) => {
  const { email, name } = useUser().user;

  const [value, setValue] = useState({ name });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    getValue(value);
  }, [value]);

  return (
    <Inputs>
      <BlockInput>
        <InputTitle>Your name</InputTitle>
        <Input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
          style={{ color: '#407bff' }}
        />
      </BlockInput>
      <BlockInput>
        <InputTitle>E-mail</InputTitle>
        <Input
          type="email"
          name="email"
          value={email}
          style={{ color: '#407bff' }}
          readOnly
        />
      </BlockInput>
    </Inputs>
  );
};
