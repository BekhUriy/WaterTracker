import{u as t,Q as a}from"./index-9c137092.js";const i="https://bekhuriy.github.io/WaterTracker/assets/desktopBottle1x-9ad515d8.png",o="https://bekhuriy.github.io/WaterTracker/assets/desktopBottle2x -e0237641.png",r="https://bekhuriy.github.io/WaterTracker/assets/tabletBottle1x-d35d8598.png",n="https://bekhuriy.github.io/WaterTracker/assets/tabletBottle2x-43c656aa.png",e="https://bekhuriy.github.io/WaterTracker/assets/mobileBottle1x-b2de7c33.png",s="https://bekhuriy.github.io/WaterTracker/assets/desktopBackground1x-dc2b17e8.jpg",p="https://bekhuriy.github.io/WaterTracker/assets/tabletBackground1x-ec35771b.png",d="https://bekhuriy.github.io/WaterTracker/assets/mobileBackground1x-397160f2.png",c=t(a)`
&&&.Toastify__toast-container {
    background-color: #407BFF;
  }
  .Toastify__toast {
    color: #407BFF;
  }
  .Toastify__toast-body {
    font-size: 18px;
    font-weight: 500;
  }
  .Toastify__progress-bar {
  }
`,h=t.section`
  background-image:  url(${d});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 768px) {
  background-image:  url(${p});
  }
  @media screen and (min-width: 1440px) {
  background-image:  url(${s});
  }
`,u=t.div`
  display: block;
  line-height: 0;
  background-image: -webkit-image-set(
    url(${e}) 1x,
    url(${e}) 2x);
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 280px;
  height: 210px;
  border: transparent;
  background-position: center;
   @media screen and (min-width: 768px) {
    background-image: -webkit-image-set(
      url(${r}) 1x,
      url(${n}) 2x);
    min-width: 736px;
    height: 548px;
    background-position: 120px center;
  }
  @media screen and (min-width: 1440px) {
     background-image: -webkit-image-set(
      url(${i}) 1x,
      url(${o}) 2x);
    background-position: -120px center;
    min-width: 916px;
    min-height: 680px;
  }`,x=t.div`
@media screen and (max-width:767px) {
 max-width: 280px;
 margin-top: 24px;
  margin-left: auto;
  margin-right: auto; 
}
@media screen and (min-width: 768px) {
  position: relative;
 max-width: 704px; 
  margin-top: 0px;
   margin-left: auto;
  margin-right: auto; 
}
@media screen and (min-width: 1440px) {
 max-width: 1216px; 
  margin-left: auto;
  margin-right: auto; 
}
`,b=t.div`
margin-top: 66px;
@media screen and (min-width: 768px ) {
position: absolute;
top: 40px;
left: 0px;

}
@media screen and (min-width: 1440px) {
  left: auto;
  top: 140px;
  right: 104px;
}
 `;export{u as B,h as C,b as F,c as S,x as W};
