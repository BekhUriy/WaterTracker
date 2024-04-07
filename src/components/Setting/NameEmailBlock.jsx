import { useState } from 'react';
import { BlockInput, InputTitle, Inputs, Input } from './SettingModal.styled';

export const NameEmailBlock = ({ user, validate }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  console.log(user.email);

  const handleEmailChange = (value) => {
    setEmail(value);
    validate();
  };

  const handleNameChange = (value) => {
    setName(value);
    validate();
  };

  return (
    <Inputs>
      <BlockInput>
        <InputTitle>Your name</InputTitle>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder={user.name}
          onChange={(e) => handleNameChange(e.target.value)}
          required
          style={{ color: '#407bff' }}
        />
      </BlockInput>
      <BlockInput>
        <InputTitle>E-mail</InputTitle>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder={user.email}
          onChange={(e) => handleEmailChange(e.target.value)}
          required
          style={{ color: '#407bff' }}
        />
      </BlockInput>
    </Inputs>
  );
};
