import { BlockInput, InputTitle, Inputs, Input } from './SettingModal.styled';

export const NameEmailBlock = ({ user, validate, setData, data }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Inputs>
      <BlockInput>
        <InputTitle>Your name</InputTitle>
        <Input
          type="text"
          name="name"
          value={data.name}
          placeholder={user.name}
          onChange={handleChange}
          required
          style={{ color: '#407bff' }}
        />
      </BlockInput>
      <BlockInput>
        <InputTitle>E-mail</InputTitle>
        <Input
          type="email"
          name="email"
          value={data.email}
          placeholder={user.email}
          onChange={handleChange}
          required
          style={{ color: '#407bff' }}
        />
      </BlockInput>
    </Inputs>
  );
};
