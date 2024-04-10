import styled from 'styled-components';


export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 90;

width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;

background: rgba(0, 0, 0, 0.8);

ovrflow:auto;
`

export const StyledModal = styled.div`
position:fixed;
top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
width: 280px;
height: 648px;
padding: 24px 12px 24px 12px;
border-radius: 10px;
z-index: 100;
box-shadow: 0px 4px 8px 0px #407BFF33;
background-color: #fff;

@media (min-width: 768px){
  max-height: 580px;
  width: 704px;
  padding: 32px 24px 32px 24px;
  }
  @media (min-width: 1158px){
    width: 592px;
}
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledEditWaterBox=styled.div`
display: flex;
-webkit-box-pack: justify;

flex-direction:column;
color: rgb(47, 47, 47);

gap:24px;
margin-top:24px;
@media (min-width: 768px){
  margin-top:24px;
  }
  @media (min-width: 1158px){}
  
`
export const StyledDataBar=styled.div`
width: 256px;
height: 52px;
padding: 8px 24px 8px 24px;
border-radius: 10px;
align-items: center;
background-color:#ECF2FF;
display:flex;
gap:12px;
@media (min-width: 768px){
  width: 254px;
   }
`
export const PrevData=styled.p`
font-size: 18px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#407BFF;
`
export const PrevTime=styled.p`

font-size: 12px;
font-weight: 400;
line-height: 24px;
text-align: left;

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
 export const CorrectDataText=styled.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-bottom:16px;
`
export const AmountWaterText=styled.p`
font-size: 16px;
font-weight: 400;
line-height: 20px;
text-align: left;
margin-bottom:12px;
`

export const EditButtonAndValueBox=styled.div`
display:flex;
flex-direction:column;
gap:24px;
align-items: center;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
  }
`

export const EditButttonSubmit=styled.button`
width: 256px;
height: 36px;
padding: 8px 30px 8px 30px;
border-radius: 10px;
opacity: 0px;
background-color: rgb(64, 123, 255);
box-shadow: 0px 4px 8px 0px #407BFF57;
border:none;
color:white;
&:hover {
  box-shadow: 0px 4px 14px 0px #407BFF8A;

  cursor: pointer;
}

&:active {
  background: #407bff;
  cursor: pointer;
}

  @media (min-width: 768px){
    width: 160px;
    height: 44px;
      } 
  
`
// DeleteModalStyles

export const DeleteModalStyled = styled.div`
position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 288px;
    padding: 32px 24px 32px 24px;
    border-radius: 10px;
    z-index: 100;
    box-shadow: 0px 4px 8px 0px #407BFF33;
    position: absolute;
    background-color: #fff;
      @media (min-width: 768px){
      width: 592px;
      height: 208px;
          }  
        @media (min-width: 1158px){
       
        }
   
`
export const DeleteModalHeaderText=styled.p`
font-family: Roboto;
font-size: 26px;
font-weight: 500;
line-height: 32px;
text-align: left;

`
export const StyledDeleteModalText = styled.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-top:24px;
`
export const DeleteButtonsBox=styled.div`
display:flex;
flex-direction:column;
gap:24px;
margin-top:24px;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
    }  
    @media (min-width: 1158px){
    
    }`
export const DeleteButtonSubmit=styled.button`
width: 232px;
height: 36px;
padding: 8px 30px 8px 30px;
border-radius: 10px;
opacity: 0px;
background-color:#EF5050;
box-shadow: 0px 4px 8px 0px #407BFF57;
border:none;
&:hover {

  box-shadow: 0px 4px 14px 0px #407BFF8A;
  cursor: pointer;
}

&:active {
  background: #407bff;
  cursor: pointer;
}
@media (min-width: 768px){
  width: 160px;
  height: 44px;
    }  
`
export const DeleteButtonCancel=styled.button`
width: 232px;
height: 36px;
padding: 8px 30px 8px 30px;
border-radius: 10px;
opacity: 0px;
background-color:#D7E3FF;
border:none;
&:hover {
  box-shadow: 0px 4px 14px 0px #407BFF8A;

  cursor: pointer;
}


@media (min-width: 768px){
  width: 160px;
  height: 44px;
    } 
`
export const DeleteButtonText=styled.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#FFFFFF;

`
export const CancelButtonText=styled.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#407BFF;

`
