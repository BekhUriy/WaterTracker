import styled from "styled-components";



export const StyledAddWaterMainContainer = styled.div`
background-color:#ECF2FF;
padding: 32px 24px 32px 24px;
border-radius: 10px;
    margin-top:40px;
    width:280px;
    height:836px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 4px 14px 0px #407BFF4D;


@media (min-width: 768px){
    width:1000px;
height:688px;
}
@media (min-width: 1158px){
    width:1000px;
height:688px;
position: absolute;
top: 80px;
left: 32px;
}

`
export const StyledAddWaterListContainer = styled.div`
width: 264px;
height:258px;
margin:0 auto;
flex-direction:column;
@media (min-width: 768px){
width: 656px;
height: 260px;
}
@media (min-width: 1158px){
    width: 544px;
    height: 260px;
           position:relative;
}
`
export const StyledListHeader = styled.p`
font-family: Roboto;
font-size: 24px;
font-weight: 500;
line-height: 30px;
text-align: left;
margin:0;
margin-bottom:16px;
@media (min-width: 768px){
    font-size: 26px;
       line-height: 32px;    
    }
`

export const StyledAddWaterListFrame = styled.div`
width: 264px;
position: relative;
margin-bottom:12px;

max-height: 180px; 
overflow-y: auto;
overflow-x: hidden;
::-webkit-scrollbar {   
    width: 4px;  
    height:170px
    }
 ::-webkit-scrollbar-track {
      background:#D7E3FF;
     
    }
::-webkit-scrollbar-thumb {   
      background-color: #9EBBFF;    
      border-radius: 8px;      
   }  
scrollbar-width: thin;
scrollbar-color: #9EBBFF #D7E3FF;

@media (min-width: 768px){
    max-height: 176px;
    width: 656px;
    }
    @media (min-width: 1158px){
        width: 544px;
    }
`

export const StyledListAddWater = styled.ul`
list-style:none;
margin:0 auto;
padding:0;
`
export const ListItem = styled.li`
display:flex;
align-items: center;
justify-content: space-between;

padding-right:4px;
line-height:26px;
width:254px;
gap:38px;
margin-bottom:24px;
position: relative; /* Встановлення позиції для ::after */
 
::after {
    content: '';
    position: absolute;
    top:38px;
  
    left: 0;
    width: 100%;
    height: 1px;
    background-color:#D7E3FF;
    @media (min-width: 768px){
        top:48px;
              }
       
}     
    @media (min-width: 768px){
        line-height:36px;
        gap:390px;
        width:646px;
        }
        @media (min-width: 1158px){
              gap:278px;
              width:534px;
        }
`

export const StyledLeftContainer = styled.div`
display:flex;
gap:12px;
align-items:center;`
export const StyledDataContainer = styled.div`
display:flex;
gap:12px;
align-items:center;
padding-top:1px;
padding-bottom:1px;
@media (min-width: 768px){
   gap:16px;
    }`
export const StyledRightContainer = styled.div`
display:flex;
gap:18px;
align-items:center;`
export const IconFrame = styled.div`

display:flex;
width: 26px;
  height: 26px;

  display:flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px){
    width: 36px;
  height: 36px;
     }
// `
// export const IconFramTwo = styled.div`
// width: 26px;
//   height: 26px;
//   display:flex;
//   align-items: center;
//   justify-content: center;
//   @media (min-width: 768px){
//     width: 36px;
//   height: 36px;
//      }
// `
export const StyledButton=styled.button`
display:flex;
align-items:center;
widtn:16px;
height:16px;
margin:0;
padding:0;
color:transparent;
border:none;
cursor:pointer;
outline:none;
background-color: transparent`

export const StyledWater= styled.p`
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#407BFF;
`
export const StyledTime=styled.time`
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#2F2F2F;
`
export const StyledAddWaterButton = styled.button`
display:flex;
align-items:center;
gap:8px;
width:97px;
height:20px;
margin:0;
justify-content: space-between;
padding:0;
color:transparent;
border:none;
cursor:pointer;
outline:none;
background-color: transparent;
@media (min-width: 768px){
   height:24px;
     width:114px;
    }
`
export const IconButtonFrameTwo = styled.div`
width: 16px;
  height: 16px;
  display:flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px){
    width: 24px;
  height: 24px;

     }
`
export const StyledButtonText = styled.span`
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: left;
color:#407BFF;
@media (min-width: 768px){
    font-size: 18px;
    line-height: 24px;
     }
`
