import styled from "styled-components"

export const LiStyled = styled.li`
    color: var(--text-blue);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    marging: 0;
    cursor: pointer;

     &:hover {
        transform: scale(1.1);
        transition: transform 450ms ease-in-out;
    }
    
`

export const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
    marging: 0;
`
export const UserLogoModalStyled = styled.div`
    min-width: 118px;
    min-height: 88px;
    padding: 16px;
    border-radius: 10px;
    z-index: 100;
    position: absolute;
    background-color: #fff;
    top: 48px;
    box-shadow: 0px 4px 8px 0px #407BFF33;

      @media (min-width: 768px) {
        top: 56px;
      }

`