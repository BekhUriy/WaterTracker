import React, { useState } from 'react';
import {
  Upload,
  UploadPhotoWrapper,
  YourPhoto,
  Avatar,
  Label,
} from './SettingModal.styled';

import { ArrowUpSvg } from 'components/ArrowUpSvg';
import { useDispatch } from 'react-redux';
import { updateProfileThunk } from '../../redux/auth/thunk';

export const UploadPhoto = () => {
  const [avatarSrc, setAvatarSrc] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async function (e) {
        setAvatarSrc(e.target.result);
        try {
          await dispatch(updateProfileThunk({ avatar: e.target.result }));
        } catch (error) {
          console.error('Error updating profile:', error);
        }
      };
      reader.readAsDataURL(file);
      reader.onerror = function (error) {
        console.error('Error reading the file: ', error);
      };
    }
  };

  return (
    <UploadPhotoWrapper>
      <YourPhoto>Your photo</YourPhoto>
      <Upload>
        <Avatar src={avatarSrc} alt="Avatar" />
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
