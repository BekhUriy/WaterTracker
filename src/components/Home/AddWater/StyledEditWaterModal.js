import styled from 'styled-components';


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  max-height: 700vh
  z-index: 1300;
`;

export const StyledModal = styled.div`
  position: fixed;
  z-index: 1500;
  background: #ffffff;
  border-radius: 10px;
  width: 280px;
height:648px;
  padding: 32px 24px 32px 24px;
  gap: 24px;
 
  overflow: auto;
  top: 5%;
  left: 2%
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledCounter = styled.div`
  display: flex;
`;
