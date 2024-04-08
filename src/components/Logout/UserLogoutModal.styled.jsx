import styled from 'styled-components';

export const WrapperLogout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 280px;
  height: 260px;
  padding: 32px 24px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #ffffff;
  box-sizing: border-box;
  z-index: 70;

  @media (min-width: 768px) {
    max-width: 592px;
    height: 208px;
  }
  @media (max-width: 1440px) {
    max-width: 592px;
  }
`;

export const LogoutTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 232px;
  height: 32px;

  @media screen and (min-width: 768px) {
    min-width: 544px;
  }
`;

export const TitleOne = styled.h1`
  margin: 0;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
`;

export const TitleTwo = styled(TitleOne)`
  font-size: 18px;
  line-height: 20px;
  width: 232px;
  height: 20px;

  @media (min-width: 768px) {
    width: 338px;
  }
`;

export const Buttons = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  width: 100%;
  height: 96px;
  gap: 24px;
  padding: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const CancelButton = styled.button`
  color: #407bff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 0;
  border: 0;
  background-color: #d7e3ff;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 100px;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 1440px) {
  }
`;

export const LogoutButton = styled(CancelButton)`
  color: #ffffff;
  background-color: #ef5050;
`;

export const CancelLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 232px;
  border-radius: 10px;
  padding: 8px 30px;
  gap: 10px;
  background-color: #d7e3ff;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 160px;
    padding: 10px 30px;
  }
`;

export const LogoutLi = styled(CancelLi)`
  background-color: #ef5050;
`;

export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0;
  z-index: 1;
  vertical-align: baseline;
`;
