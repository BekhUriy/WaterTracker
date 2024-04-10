import { useEffect } from "react";
import { SettingSvg } from "./settingSvg/settingSvg";
import { LogOutSvg } from "./logoutSvg/logoutSvg";
import { LiStyled, UlStyled, UserLogoModalStyled } from "./userLogoModal.styled";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle, selectIsModalOpen } from "../../../../redux/setingModalSlicer";
import { SettingModal } from "../../../Setting/SettingModal";
import { selectIsLogoutOpen, modalLogoutToggle } from "../../../../redux/logoutModalSlicer";
import { UserLogoutModal } from "../../../Logout/UserLogoutModal";
import { modalClose } from "../../../../redux/modalWindowSlicer";

export const UserLogoModal = () => {
    const dispatch = useDispatch()
    const isModalOpen = useSelector(selectIsModalOpen)
    const isLogoutOpen = useSelector(selectIsLogoutOpen)

    const closeModal = () => {
        dispatch(modalClose());
    };
        
    useEffect(() => {
        const handleClickOutside = (event) => {
            
            if (!event.target.closest(".user-logo-modal")) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch]);

    return (
        <UserLogoModalStyled className="user-logo-modal">
            <UlStyled media>
                <LiStyled onClick={() => dispatch(modalToggle())
                }><SettingSvg color={'#407BFF'} /> Setting</LiStyled>
                {isModalOpen && <SettingModal/>}
                <LiStyled onClick={() => dispatch(modalLogoutToggle())}><LogOutSvg color={'#407BFF'} /> Log out</LiStyled>
                {isLogoutOpen && <UserLogoutModal/>}
            </UlStyled>
        </UserLogoModalStyled>
    )
}

