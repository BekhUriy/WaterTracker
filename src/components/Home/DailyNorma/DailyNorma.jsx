import {useContext} from "react";
import {
    DailyNormaBtn,
    MyDailyNormaContainer,
    Title,
    WaterNorma,
    WaterNormaContainer,
} from "./DailyNorma.styled";
import {ModalContext} from "./DailyNormaModal/ModalProvider/ModalProvider";
import DailyNormaModal from "./DailyNormaModal/DailyNormaModal";

const DailyNorma = ({user}) => {
    const toggleModal = useContext(ModalContext);

    const dailyNorma = (user.waterRate / 1000).toFixed(1);

    const openDailyNormalModal = () => {
        toggleModal(<DailyNormaModal/>);
    };

    return (
        <MyDailyNormaContainer>
            <Title>My daily norma</Title>
            <WaterNormaContainer>
                <WaterNorma>{`${dailyNorma}`}</WaterNorma>
                <DailyNormaBtn onClick={openDailyNormalModal}>Edit</DailyNormaBtn>
            </WaterNormaContainer>
        </MyDailyNormaContainer>
    );
};

export default DailyNorma;