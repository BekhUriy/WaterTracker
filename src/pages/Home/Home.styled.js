import { styled } from 'styled-components';
import bottle_mobile_1x from '../../images/imgSing/mobileBottle1x.png';
import bottle_mobile_2x from '../../images/imgSing/mobileBottle2x.png';
import bottle_tablet_1x from '../../images/imgSing/tabletBottle1x.png';
import bottle_tablet_2x from '../../images/imgSing/tabletBottle2x.png';
import bottle_desk_1x from '../../images/imgSing/desktopBottle1x.png';
import bottle_desk_2x from '../../images/imgSing/desktopBottle2x .png';
import backgroundDesktop from '../../images/imgSing/desktopBackground1x.jpg';
import tabletDesktop from '../../images/imgSing/tabletBackground1x.png';
import mobileDesktop from '../../images/imgSing/mobileBackground1x.png';

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

@media screen and (min-width: 1440px){
  padding: 16px 32px 44px;
  gap: 40px;
}
@media screen and (min-width: 1440px) {
  flex-direction: row;
  justify-content: center;
  // height: 92vh;

`;

export const DailyNormaBackground = styled.div`
  width: 280px;
  height: 208px;
  background-image: url(${bottle_mobile_1x});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bottle_mobile_2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 518px;
    height: 386px;
    background-image: url(${bottle_tablet_1x});
    margin-top: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bottle_tablet_2x});
  }

  @media screen and (min-width: 1440px) {
    margin-top: 2px;
    margin-left: -73px;
    width: 738px;
    min-height: 548px;
    background-image: url(${bottle_desk_1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bottle_desk_2x});
  }
`;
export const DailyNormaContainer = styled.div`
  // width: 164px;
  // height: 74px;
  // margin-bottom: 8px;
  // padding: 8px 20px 8px 20px;
  // border-radius: 10px;
  // // border: 1px solid black;
  // display: flex;
  // flex-direction: column;
  gap: 16px;
  // box-shadow: 0px 4px 8px 4px rgba(158, 187, 255, 0.12);

  // @media screen and (min-width: 768px) {
  //   // position: absolute;
  //   height: 76px;
  // }
  // @media screen and (min-width: 1440px) {
  //   margin-top: 30px;
  // }
  //
`;

export const StatisticsContainer = styled.div`
  // margin-bottom: 40px;
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
    margin-bottom: 44px;
    padding: 32px 24px;
    width: 704px;
    height: 688px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 592px;
    height: 680px;
  }
`;
