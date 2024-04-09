import styled from 'styled-components';
import bottle_mobile_1x from '../../../images/HomePage/bottle_bg_home_page_mob_1x-min.png';
import bottle_mobile_2x from '../../../images/HomePage/bottle_bg_home_page_mob_2x-min.png';
import bottle_tablet_1x from '../../../images/HomePage/bottle_bg_home_page_tablet_1x-min.png';
import bottle_tablet_2x from '../../../images/HomePage/bottle_bg_home_page_tablet_2x-min.png';
import bottle_desk_1x from '../../../images/HomePage/bottle_bg_home_page_desk_1x-min.png';
import bottle_desk_2x from '../../../images/HomePage/bottle_bg_home_page_desk_2x-min.png';

export const DailyNormaContainer = styled.div`
  width: 280px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 704px;
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
    width: 624px;
  }
`;
export const MyDailyNormaContainer = styled.div`
  width: 164px;
  height: 74px;
  padding: 8px 20px 8px 20px;
  margin-bottom: 8px;
  border-radius: 10px;
  border: 1px solid var(--background-tracker);
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 4px 8px 4px rgba(158, 187, 255, 0.12);

  @media screen and (min-width: 768px) {
    height: 76px;
    position: absolute; /* Встановлюємо абсолютне позиціонування фону */
    top: 0; /* Розміщення зверху */
    left: 0; /* Розміщення зліва */
  }
  @media screen and (min-width: 1440px) {
    margin-top: 30px;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: var(--text);
  font-weight: 500;
  line-height: 1.3;
  width: 124px;
`;

export const WaterNormaContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const WaterNorma = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-blue);
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const DailyNormaBtn = styled.button`
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--text-passowrd);

  &:hover {
    color: var(--orange-color);
  }
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
    //   position: relative;

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

// export const DailySlider = styled.div`
//   display: flex;
//   height: 134px;
//   outline: 1px solid green;
//   margin-top: 16px;
//   font-size: 24px;
//   font-weight: 700;
//   justify-content: space-around;
//   align-items: center;
//   animation: blink 1s infinite;

//   @keyframes blink {
//     0% {
//       color: red;
//     }
//     50% {
//       color: white;
//     }
//     100% {
//       color: red;
//     }
//   }

//   @media screen and (min-width: 768px) {
//     width: 704px;
//     height: 90px;
//   }
//   @media screen and (min-width: 1440px) {
//     width: 592px;
//   }
// `;
