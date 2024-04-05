//import React from "react";
import { SettingSvg } from "./settingSvg/settingSvg";
import { LogOutSvg } from "./logoutSvg/logoutSvg";
import { LiStyled, UlStyled, UserLogoModalStyled } from "./userLogoModal.styled";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle, selectIsModalOpen } from "../../../../redux/setingModalSlicer";
import { SettingModal } from "../../../Setting/SettingModal";

export const UserLogoModal = () => {
    const dispatch = useDispatch()
    const isModalOpen = useSelector(selectIsModalOpen)

    return (
        <UserLogoModalStyled>
            <UlStyled>
                <LiStyled onClick={() => dispatch(modalToggle())}><SettingSvg color={'#407BFF'} /> Setting</LiStyled>
                {isModalOpen && <SettingModal/>}
                <LiStyled><LogOutSvg color={'#407BFF'}/> Log out</LiStyled>
            </UlStyled>
        </UserLogoModalStyled>
    )
}