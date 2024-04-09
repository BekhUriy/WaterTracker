import styled from "styled-components"

export const AvatarLogo = styled.div`
    display: flex;
    flex-shrink: 0;
    background-color: ${({ colour }) => colour};
    width: 28px;
    height: 28px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: #fff;
`;