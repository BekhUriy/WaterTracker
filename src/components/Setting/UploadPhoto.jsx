import { useState } from 'react';
import {
  Upload,
  UploadPhotoWrapper,
  YourPhoto,
  Avatar,
  Label,
} from './SettingModal.styled';
import { ArrowUpSvg } from './ArrowUpSvg';
import { useDispatch } from 'react-redux';
import { updateAvatarThunk } from '../../redux/user/thunk';

export const UploadPhoto = ({ user }) => {
  const [avatarURL, setAvatarURL] = useState(user.avatarURL);

  const dispatch = useDispatch();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);

      try {
        await dispatch(updateAvatarThunk(formData)).unwrap();
      } catch (error) {
        console.error('Error updating profile:', error);
      }

      const reader = new FileReader();
      reader.onload = () => {
        setAvatarURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <UploadPhotoWrapper>
      <YourPhoto>Your photo</YourPhoto>
      <Upload>
        <Avatar src={avatarURL} alt="Avatar" />
        <Label htmlFor="fileInput">
          <ArrowUpSvg />
          <span>Upload a photo</span>
        </Label>

        <input
          id="fileInput"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Upload>
    </UploadPhotoWrapper>
  );
};
