
import { SettingSvg } from "./settingSvg/settingSvg";
import { LogOutSvg } from "./logoutSvg/logoutSvg";
import { LiStyled, UlStyled, UserLogoModalStyled } from "./userLogoModal.styled";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle, selectIsSettingOpen } from "../../../../redux/setingModalSlicer";
import { SettingModal } from "../../../Setting/SettingModal";
import { selectIsLogoutOpen, modalLogoutToggle } from "../../../../redux/logoutModalSlicer";
import { UserLogoutModal } from "../../../Logout/UserLogoutModal";



export const UserLogoModal = () => {
    const dispatch = useDispatch()
    const isSettingOpen = useSelector(selectIsSettingOpen)
    const isLogoutOpen = useSelector(selectIsLogoutOpen)
    
    return (
        <UserLogoModalStyled className="user-logo-modal">
            <UlStyled media>
                <LiStyled onClick={() => dispatch(modalToggle())
                }><SettingSvg color={'#407BFF'} /> Setting</LiStyled>
                {isSettingOpen && <SettingModal/>}
                <LiStyled onClick={() => dispatch(modalLogoutToggle())}><LogOutSvg color={'#407BFF'} /> Log out</LiStyled>
                {isLogoutOpen && <UserLogoutModal/>}
            </UlStyled>
        </UserLogoModalStyled>
    )
}

