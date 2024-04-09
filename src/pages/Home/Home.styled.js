import { styled } from 'styled-components';
import backgroundDesktop from '../../images/HomePage/Bubbles_bg_main_desk.svg';
import tabletDesktop from '../../images/HomePage/Bubbles_bg_home_tablet.svg';
import mobileDesktop from '../../images/HomePage/Bubbles_bg_home_mob.svg';

export const BubblesContainer = styled.div`
  // position: relative;
  background-position: center 28px;
  background-image: url(${mobileDesktop});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${tabletDesktop});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop});
    background-size: 100%;
    background-size: contain;
    background-repeat: repeat;
  }
`;
export const HomeSection = styled.section`
  // // padding: 24px 20px 40px;
  // background-position: center center;
  // // додати сюди зображення
  // background-size: contain;
  // background-repeat: no-repeat;
  // width: 100%;
`;

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 24px 20px 40px;
align-items: center;
gap: 40px;

@media screen and (min-width: 7680px){
  padding: 40px 32px 44px;
  gap: 40px;
}
@media screen and (min-width: 1440px) {
  flex-direction: row;
  justify-content: center;
  padding: 20px 112px 40px 38px;
  gap: 32px;


  // height: 92vh;
`;

export const DailyNormaContainer = styled.div`
  gap: 16px;
  
  @media screen and (min-width: 768px) {
    // padding: 0 24px;
    min-width: 704px;
    // width: 100%;
    // height: 688px;
    
  }
`

export const StatisticsContainer = styled.div`
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 280px;
  max-width: 100%

  border-radius: 10px;
  background: var(--background-tracker);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
    height: 688px;
  }
  @media only screen and (min-width: 1440px) {
    // margin-bottom: 0;
    width: 592px;
    height: 680px;
    padding: 32px 24px;
    align-items: center;
  }
`;
