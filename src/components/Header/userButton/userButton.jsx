
import { Holder, PhotoBlock, UserButtonStyle, UserName, UserPhoto } from "./userButton.styled";
import { ArrowDownSvg } from "./arrowDownSvg/arrowDownSvg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen, modalToggle } from "../../../redux/modalWindowSlicer";
import { UserLogoModal } from "./userLogoModal/userLogoModal";
import { selectUser } from "../../../redux/user/selector";
import { AvatarIcon } from "./avatar/avatar";

export const UserButton = () => {

    const isModalOpen = useSelector(selectIsModalOpen);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const name = user ? (user.name || "User") : '';
    const avatar = user? user.avatarURL : ''
    
    return (
        <Holder>
        <UserButtonStyle type="button" onClick={()=>dispatch(modalToggle())}>
            <UserName>{name}</UserName>
                <PhotoBlock>
                    {!avatar && <AvatarIcon />}
                    {avatar && <UserPhoto src={avatar} alt="userphoto" />}
            <ArrowDownSvg color={'#407BFF'}/>
            </PhotoBlock>
            </UserButtonStyle>
            {isModalOpen && <UserLogoModal />} 
        </Holder>
    )
}