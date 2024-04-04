import { styled } from "styled-components";
import bottle_mobile_1x from '../../images/HomePage/bottle_bg_home_page_mob_1x-min.png';
import bottle_mobile_2x from '../../images/HomePage/bottle_bg_home_page_mob_2x-min.png';
import bottle_tablet_1x from '../../images/HomePage/bottle_bg_home_page_tablet_1x-min.png';
import bottle_tablet_2x from '../../images/HomePage/bottle_bg_home_page_tablet_2x-min.png';
import bottle_desk_1x from '../../images/HomePage/bottle_bg_home_page_desk_1x-min.png';
import bottle_desk_2x from '../../images/HomePage/bottle_bg_home_page_desk_2x-min.png';
import backgroundDesktop from '../../images/HomePage/Bubbles_bg_main_desk.svg';
import tabletDesktop from '../../images/HomePage/Bubbles_bg_home_tablet.svg';
import mobileDesktop from '../../images/HomePage/Bubbles_bg_home_mob.svg';

export const BubblesContainer = styled.div`
  position: relative;
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
    padding: 24px 20px 40px;
    background-position: center center;
    // додати сюди зображення
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0;
    //width: 100%;
`;

export const DailyNormaContainer = styled.div`

`

export const StatisticsContainer = styled.div`
margin-bottom: 40px;
padding: 24px 32px;
display: flex;
flex-direction: column;
gap: 24px;

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
`   
