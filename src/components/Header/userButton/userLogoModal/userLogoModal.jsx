//import React from "react";
import { SettingSvg } from "./settingSvg/settingSvg";
import { LogOutSvg } from "./logoutSvg/logoutSvg";
import { LiStyled, UlStyled, UserLogoModalStyled } from "./userLogoModal.styled";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle, selectIsModalOpen } from "../../../../redux/setingModalSlicer";
import { SettingModal } from "../../../Setting/SettingModal";
import { selectIsLogoutOpen, modalLogoutToggle } from "../../../../redux/logoutModalSlicer";
import { UserLogoutModal } from "../../../Logout/UserLogoutModal";

export const UserLogoModal = () => {
    const dispatch = useDispatch()
    const isModalOpen = useSelector(selectIsModalOpen)
    const isLogoutOpen = useSelector(selectIsLogoutOpen)

    return (
        <UserLogoModalStyled>
            <UlStyled>
                <LiStyled onClick={() => dispatch(modalToggle())}><SettingSvg color={'#407BFF'} /> Setting</LiStyled>
                {isModalOpen && <SettingModal/>}
                <LiStyled onClick={()=>dispatch(modalLogoutToggle())}><LogOutSvg color={'#407BFF'} /> Log out</LiStyled>
                {isLogoutOpen&& <UserLogoutModal/>}
            </UlStyled>
        </UserLogoModalStyled>
    )
}