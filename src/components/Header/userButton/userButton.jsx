//import React from "react";
import { Holder, PhotoBlock, UserButtonStyle, UserName, UserPhoto } from "./userButton.styled";
import { ArrowDownSvg } from "./arrowDownSvg/arrowDownSvg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen, modalToggle } from "../../../redux/modalWindowSlicer";
import { UserLogoModal } from "./userLogoModal/userLogoModal";

export const UserButton = () => {
    const isModalOpen = useSelector(selectIsModalOpen);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const name = user ? (user.name || user.email) : '';
    const avatar = user? user.avatarURL : ''


    return (
        <Holder>
        <UserButtonStyle type="button" onClick={()=>dispatch(modalToggle())}>
            <UserName>{name}</UserName>
                <PhotoBlock><UserPhoto src={avatar}
                    //{user.avatarURL}
                    alt="userphoto" />
            <ArrowDownSvg color={'#407BFF'}/>
            </PhotoBlock>
            </UserButtonStyle>
            {isModalOpen && <UserLogoModal />} 
        </Holder>
    )
}