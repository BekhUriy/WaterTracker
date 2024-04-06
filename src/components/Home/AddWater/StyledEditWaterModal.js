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
  padding: 24px 12px 24px 12px;
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
  gap:32px;
  align-items: flex-start;
`;
export const StyledCounter = styled.div`
  display: flex;
`;
export const StyledEditWaterBox=styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
flex-direction:column;
color: rgb(47, 47, 47);
align-items: center;
gap:24px;
margin-top:24px;
`
export const StyledDataBar=styled.div`
width: 256px;
height: 52px;
padding: 8px 24px 8px 24px;
border-radius: 10px;
opacity: 0px;
background-color:#ECF2FF;
display:flex;
gap:2px;
`
export const StyledDataContainer = styled.div`
display:flex;
gap:12px;
align-items:center;
padding-top:1px;
padding-bottom:1px;
@media (min-width: 768px){
   gap:16px;
    }`
 
export const DeleteModalStyled = styled.div`
    min-width: 118px;
    min-height: 88px;
    padding: 16px;
    border-radius: 10px;
    z-index: 100;
    box-shadow: 0px 4px 8px 0px #407BFF33;
    position: absolute;
    background-color: #fff;
    top: 48px;
   
`