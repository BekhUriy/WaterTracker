import styled from 'styled-components';

export const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export const CrossbarBox = styled.div`
  width: 280px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 1440px) {
    // width: 592px;
    gap: 32px;
  }
`;

export const CrossbarBoxRange = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  flex-direction: column;
`;

export const CrossbarText = styled.p`
  color: #407bff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const CrossbarInput = styled.input`
  appearance: none;
  width: 100%;
  border-radius: 10px;
  background-color: rgb(215, 227, 255);
  background-image: linear-gradient(rgb(158, 187, 255), rgb(158, 187, 255));
  background-repeat: no-repeat;
  height: 8px;

  @media screen and (min-width: 768px) {
    width: 325px;
  }

  @media screen and (min-width: 1440px) {
    width: 356px;
  }
`;

export const CrossbarProcentSpan = styled.span`
  height: 32px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const CrossbarSpanStart = styled.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: rgb(64, 123, 255);

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`;

export const CrossbarSpanEnd = styled.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: rgb(64, 123, 255);

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`;

export const CrossbarSpanMiddle = styled.span`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 4px;
  gap: 4px;
  color: #407bff;

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`;

export const CrossbarButton = styled.button`
  display: inline-flex;
  padding: 6px 76px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  position: relative;
  color: white;
  border: none;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 10px 104px;
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
    height: 44px;
    padding: 10px 30px;
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px #407BFF8A;
    cursor: pointer;
  }

  &:active {
    background: #407bff;
    cursor: pointer;
  }
`;
