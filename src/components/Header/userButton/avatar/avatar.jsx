import { getDefaultAvatarDetails } from 'default-avatar-helper';
import {useSelector} from "react-redux";
import { selectUser } from '../../../../redux/user/selector';
import { AvatarLogo } from './avatar.styled';

export const AvatarIcon = () => {

    const user = useSelector(selectUser);

    const palette = ['#407BFF', '#9EBBFF', '#FF9D43'];
    const name = user ? (user.name || user.email.charAt(0)) : '';

    // Generate default avatar details
    const { colour, initials } = getDefaultAvatarDetails(palette, name);

   
    return (
        <AvatarLogo colour={colour}>
            {initials}
        </AvatarLogo>
    );
};
