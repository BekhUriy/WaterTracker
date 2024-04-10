import{u as d,j as i,b as xe,r as p,c as yn,f as Pe,d as He,e as At,M as Lt,g as It,h as vn,i as kn,k as En,l as tt,R as jn,m as Mn,n as Sn,T as Pn,o as ve,p as De,_ as G,q as Ne,s as _e,t as me,v as j,w as xt,x as Be,y as te,z as Ae,A as ae,B as K,C as mt,D as Me,E as gt,F as bt,G as Tn,H as Cn,I as $t,J as zt,K as Y,L as Dn,N as Fn,O as On,P as Rn,Q as Wn}from"./index-747bbd2d.js";import{c as Nn,a as _n,b as Ye,u as Bn}from"./index.esm-85ee162a.js";import{Q as An,B as qe}from"./react-toastify.esm-f27b92d1.js";function Ln(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Ht=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`,In=d.div`
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
    width: 592px;
    gap: 32px;
    padding-left: 5px;
  }
`,$n=d.div`
  position: relative;
  height: 80px;
  display: flex;
  flex-direction: column;
`,zn=d.p`
  color: #407bff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
`,Hn=d.input`
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
`,Yn=d.span`
  height: 32px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`,qn=d.span`
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
`,Vn=d.span`
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
`,Un=d.span`
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
    font-size: 12px;

    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`,Zn=d.button`
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
`,Gn=({width:e=24,height:t=24,color:n="#f8f6f6",...r})=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),i.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),Yt=()=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}),qt=()=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),it=()=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{border:"none",backgroundColor:"transparent"},children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Qn=d.div`
  translate: -50% -50%;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 280px;
  max-height: 90vh;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  overflow: auto;
  z-index: 999;

  @media screen and (min-width: 768px) {
    min-width: 704px;
    padding: 32px 24px;
  }
`,Xn=d.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 24px 12px;
  color: rgb(47, 47, 47);
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0;
    margin-bottom: 24px;
  }
`,at=d.button`
  border-left-style: none;
  border-block-style: none;
  border-right: none;
  background-color: transparent;
`,Kn=d.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`,Jn=d.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: rgb(47, 47, 47);
  margin-bottom: 12px;
`,Vt=d.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`,Ut=d.button`
  background-color: rgb(255, 255, 255);
  color: rgb(64, 123, 255);
  border-radius: 30px;
  border: 1px solid rgb(158, 187, 255);
  width: 44px;
  height: 44px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px;
`,Zt=d.button`
  background-color: rgb(255, 255, 255);
  color: rgb(64, 123, 255);
  border-radius: 30px;
  border: 1px solid rgb(158, 187, 255);
  width: 44px;
  height: 44px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px;
`,Gt=d.div`
  border-radius: 40px;
  background: rgb(215, 227, 255);
  padding-left: 10px;
  padding-right: 16px;
  margin-left: 10px;
  margin-right: 10px;
`,Qt=d.p`
  color: rgb(64, 123, 255);
  text-align: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  width: 92px;
  height: 36px;
`,er=d.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: rgb(47, 47, 47);
  margin-bottom: 12px;
`,Xt=d.input`
  color: rgb(64, 123, 255);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 50%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  background-color: rgb(255, 255, 255);

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,tr=d.p`
  margin-bottom: 16px;
  color: rgb(47, 47, 47);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,Kt=d.input`
  color: rgb(64, 123, 255);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  background-color: rgb(255, 255, 255);
`,nr=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
  }
`,Jt=d.span`
  color: rgb(64, 123, 255);
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`,rr=d.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 5px;
  background-color: rgb(64, 123, 255);
  color: rgb(255, 255, 255);
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  height: 44px;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px;
  transition: background-color 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03) 0s;
  border: none;

  @media screen and (min-width: 768px) {
    width: 160px;
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px #407BFF8A;
    cursor: pointer;
  }

  &:active {
    background: #407bff;
    cursor: pointer;
  }
`,en=({isOpen:e,onClose:t})=>{const n=xe(),[r,o]=p.useState(0),[a,s]=p.useState(m()),c=()=>{o(b=>b+50)},l=()=>{r>=50&&o(b=>b-50)},u=()=>{const[b,g]=a.split(":"),y=new Date;y.setUTCHours(b,g);const S=y.toISOString();n(yn({amountWater:r,date:S})),n(Pe(!0)),t(),s(m())},h=b=>{const g=parseInt(b.target.value);o(g)};function m(){const b=new Date,g=b.getHours().toString().padStart(2,"0"),y=b.getMinutes().toString().padStart(2,"0");return`${g}:${y}`}const f=b=>{const g=b.target.value;s(g)};return p.useEffect(()=>{s(m())},[e,t]),p.useEffect(()=>{const b=g=>{g.key==="Escape"&&t()};return e&&document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}},[e,t]),e?i.jsxs(Qn,{children:[i.jsxs(Xn,{children:[i.jsx("h2",{children:"Add water"}),i.jsx(at,{onClick:t,children:i.jsx(it,{})})]}),i.jsx("div",{children:i.jsxs(Kn,{children:[i.jsx("h3",{style:{marginBottom:"16px"},children:"Choose a value:"}),i.jsxs("div",{style:{marginBottom:"24px"},children:[i.jsx(Jn,{children:"Amount of water:"}),i.jsxs(Vt,{children:[i.jsx(Ut,{onClick:l,children:i.jsx(Yt,{})}),i.jsx(Gt,{children:i.jsxs(Qt,{children:[r," ml"]})}),i.jsx(Zt,{onClick:c,children:i.jsx(qt,{})})]})]}),i.jsxs("div",{style:{marginBottom:"24px"},children:[i.jsx(er,{children:"Recording time:"}),i.jsx(Xt,{type:"time",step:300,value:a,onChange:f})]}),i.jsxs("div",{style:{marginBottom:"24px"},children:[i.jsx(tr,{children:"Enter the value of the water used:"}),i.jsx(Kt,{type:"number",value:r,onChange:h})]}),i.jsxs(nr,{children:[i.jsxs(Jt,{children:[r," ml"]}),i.jsx(rr,{onClick:u,children:"Save"})]})]})})]}):null},or=e=>e.water.waterRecords,ir=e=>e.water.monthStats,ar=e=>e.water.forceRender,Le=()=>({waterRecords:He(or),monthStats:He(ir),forceRender:He(ar)}),sr=()=>{const[e,t]=p.useState(!1),{percentageOfWaterConsumption:n}=Le().waterRecords,r=()=>{t(!0)},o=()=>{t(!1)};return i.jsxs(In,{children:[e&&i.jsx(Ht,{onClick:o}),i.jsxs($n,{children:[i.jsx(zn,{children:"Today"}),i.jsx(Hn,{type:"range",min:0,max:100,value:n||0,style:{backgroundSize:`${n}% 100%`},readOnly:!0}),i.jsxs(Yn,{children:[i.jsx(qn,{children:"0%"}),n>1&&n<99&&i.jsxs(Un,{style:{left:`calc(${n}% + 2px)`},id:"WaterMark",children:[n,"%"]}),i.jsx(Vn,{children:"100%"})]})]}),i.jsxs(Zn,{onClick:r,children:[i.jsx(Gn,{}),"Add Water"]}),e&&i.jsx(en,{isOpen:e,onClose:o})]})},cr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_mob_1x-min-d3b7da82.png",lr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_mob_2x-min-f515f354.png",dr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_tablet_1x-min-59895b14.png",ur="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_tablet_2x-min-58402861.png",pr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_desk_1x-min-3f10a7f5.png",hr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_desk_2x-min-b133c1b6.png",fr=d.div`
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
`,xr=d.div`
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
`,mr=d.p`
  font-size: 18px;
  color: var(--text);
  font-weight: 500;
  line-height: 1.3;
  width: 124px;
`,gr=d.div`
  display: flex;
  gap: 12px;
`,br=d.p`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-blue);
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,wr=d.button`
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--text-passowrd);

  &:hover {
    color: var(--orange-color);
  }
`,yr=d.div`
  width: 280px;
  height: 208px;
  background-image: url(${cr});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${lr});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    //   position: relative;

    width: 518px;
    height: 386px;
    background-image: url(${dr});
    margin-top: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${ur});
  }

  @media screen and (min-width: 1440px) {
    margin-top: 2px;
    margin-left: -73px;
    width: 738px;
    min-height: 548px;
    background-image: url(${pr});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${hr});
  }
`,vr=e=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M6 18L18 6M6 6L18 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),kr=d.div`
    width: 256px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 656px;
    }

    @media screen and (min-width: 1440px) {
        width: 544px;
    }
`,Er=d.div`
    margin-bottom: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
`,jr=d.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`,Mr=d(vr)`
    stroke: var(--text-blue);
    width: 24px;
    height: 24px;

    &:hover{
        stroke: var(--orange-color);
    }
`,Sr=d.div`
    display: flex;
    align-items: center;
    gap: 24px;

    margin-bottom: 12px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: start;
        gap: 16px;
    }
`,wt=d.p`
    font-size: 16px;
    line-height: 1.25;
`,yt=d.span`
    font-size: 18px;
    line-height: 1.33;

    color: var(--text-blue);

    margin-left: 4px;
`,Pr=d.p`
    font-size: 12px;
    line-height: 1.33;

    color: #8f8f8f;
    border-radius: 10px;
    border: 1px solid var(--button-pup-up);

    padding: 10px;
    margin-bottom: 24px;
`,Tr=d.span`
    color: var(--text-blue);
`,Cr=d.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,Dr=d.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;

    margin-bottom: 16px;
`,Fr=d.div`
    display: flex;
    align-items: center;
    gap: 24px;

    label {
        display: flex;
        align-items: center;
        gap: 6px;

        font-size: 16px;
        line-height: 1.25;
    }

    input:checked {
        fill: var(--text-blue);
    }
`,vt=d.div`
    input {
        display: none;
        & + span {
            display: inline-block;
            position: relative;
            padding-left: 20px;
            cursor: pointer;

            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 1px;
                left: 0px;
                border-radius: 50%;
                margin-right: 5px;
                width: 14px;
                height: 14px;
                border: 1px solid var(--text-blue);
                background: var(--background);
            }

            &:after {
                content: '';
                display: block;
                width: 6px;
                height: 6px;
                background: var(--text-blue);
                position: absolute;
                border-radius: 50%;
                top: 5px;
                left: 4px;
                opacity: 0;
                transform: scale(0, 0);
                transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
            }
        }

        &:checked + span:after {
            opacity: 1;
            transform: scale(1, 1);
        }
    }
`,Or=d.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Rr=d.b`
    font-size: 18px;
    line-height: 1.33;
    width: 64px;
    color: var(--text-blue);
    display: flex;
    align-items: center;
`,Wr=d.div`
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;

    @media screen and (min-width: 768px) {
        button {
            width: 160px;
            height: 44px;
        }
    }
`,Nr=d.p`
    color: red;
    font-size: 18px;
    animation: blink 1s infinite;

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`,_r=Nn({gender:_n().required("Gender is required"),weight:Ye().required("Weight is required").min(0,"Weight must be a positive number"),activityTime:Ye().required("Activity is required").min(0,"Activity time must be a positive number"),waterAmount:Ye().required("Drank water amount is required").min(0,"Drank water amount must be a positive number")}),Br=d.label`
    font-size: 18px;
    line-height: 1.33;

    display: flex;
    flex-direction: column;
    gap: 8px;
`,Ar=d.input`
    width: 100%;

    padding: 12px 10px;

    font-size: 16px;
    line-height: 1.25;

    color: var(--text-blue);
    border-radius: 6px;
    border: 1px solid var(--button-pup-up);
    background-color: var(--backgroun);
    outline: none;

    &:focus {
        outline: 1px solid var(--button-pup-up);
    }

    &::placeholder {
        color: var(--text-passowrd);
    }
`,Lr=d.p`
    font-size: 14px;
    line-height: 1.28;
    color: var(--coral-color);
`,Ve=({inputType:e,label:t,error:n,...r})=>{if(e==="dailyNorma")return i.jsxs(Br,{children:[t,i.jsx(Ar,{...r}),n&&i.jsx(Lr,{children:n})]})},Ir=d.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1200;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.8);

    @media screen and (max-width: 1440px) {
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: transparent;
        -ms-overflow-style: none;

        &::-webkit-scrollbar-thumb {
            width: 0.5em;
        }

        &::-webkit-scrollbar-thumb {
            background-color: transparent;
        }
    }
`,$r=d.div(({type:e})=>({borderRadius:"10px",background:"var(--background)",padding:e==="settings"?"32px 12px":"24px 12px"})),zr=d($r)`
    margin-top: 320px;
    margin-bottom: 40px;
    @media screen and (min-width: 768px) {
        padding: 32px 24px;
        margin-top: 160px;
    }
`,Hr=document.querySelector("#modal-root"),Yr=({type:e="default",onClose:t,children:n})=>{p.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)})),p.useEffect(()=>(document.body.style.overflowY="hidden",()=>{document.body.style.overflowY="auto"}));const r=o=>{(o.code==="Escape"||o.currentTarget===o.target)&&t()};return At.createPortal(i.jsx(Ir,{onClick:r,children:i.jsx(zr,{type:e,children:n})}),Hr)},qr=d.button(({width:e,buttonType:t})=>({width:`${e}px`,color:t==="cancel"?"var(--text-blue)":"var(--background)",backgroundColor:t==="cancel"?"var( --button-pup-up)":t==="delete"?"var(--coral-color)":"var(--text-blue)"})),Vr=d(qr)`
  cursor: pointer;
  border: none;
  padding: 10px 30px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,Ur=({children:e,...t})=>i.jsx(Vr,{...t,children:e}),Zr=()=>{const e=p.useContext(Lt),t=It(),n=xe(),r=()=>{e()},[o,a]=p.useState(0),s=p.useCallback(f=>{const b=f.gender==="female"?.03:.04,g=f.gender==="female"?.4:.6;if(f.weight>=0&&f.activityTime>=0){const y=f.weight*b+f.activityTime*g;a(y.toFixed(1))}else a("Error")},[]),c=f=>{u.handleChange(f)},l=async()=>{let f=u.values.waterAmount*1e3;f>=0&&f<=1e4?(n(vn({waterRate:f})),n(Pe(!0)),qe.success("Daily norma successfully updated")):qe.warning("The amount of water must be a positive number and no more than 10 liters"),u.resetForm(),e()},u=Bn({initialValues:{gender:t.gender,weight:0,activityTime:0,waterAmount:0},validationSchema:_r,onSubmit:l}),h=(f,b)=>{b!=="waterAmount"&&(f.target.value="")},m=(f,b)=>{f.target.value>=0?b!=="wateramount"&&u.setFieldValue("waterAmount",o):(u.setFieldValue("waterAmount",0),qe.warning("Negative numbers are not allowed"))};return p.useEffect(()=>{s(u.values)},[s,u.values]),i.jsx(Yr,{onClose:e,children:i.jsx(kr,{children:i.jsxs(i.Fragment,{children:[i.jsxs(Er,{children:["My daily norma",i.jsx(jr,{onClick:r,children:i.jsx(Mr,{})})]}),i.jsxs(Sr,{children:[i.jsxs(wt,{children:["For girl:",i.jsx(yt,{children:"V=(M*0,03) + (T*0,4)"})]}),i.jsxs(wt,{children:["For man:",i.jsx(yt,{children:"V=(M*0,04) + (T*0,6)"})]})]}),i.jsxs(Pr,{children:[i.jsx(Tr,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]}),i.jsxs(Cr,{children:[i.jsx(Dr,{children:"Calculate your rate:"}),i.jsxs(Fr,{children:[i.jsx(vt,{children:i.jsxs("label",{children:[i.jsx("input",{type:"radio",name:"gender",value:"female",onChange:()=>u.setFieldValue("gender","female"),checked:u.values.gender==="female"}),i.jsx("span",{children:"For women"})]})}),i.jsx(vt,{children:i.jsxs("label",{children:[i.jsx("input",{type:"radio",name:"gender",value:"male",onChange:()=>u.setFieldValue("gender","male"),checked:u.values.gender==="male"}),i.jsx("span",{children:"For men"})]})})]}),i.jsx(Ve,{label:"Your weight in kilograms:",inputType:"dailyNorma",value:u.values.weight,onChange:f=>c(f),onFocus:f=>h(f,"weight"),onBlur:f=>m(f,"weight"),name:"weight",type:"number",min:"0",step:"0.1",error:u.touched.weight&&u.errors.weight}),i.jsx(Ve,{label:`The time of active participation in sports
                        or other activities with a high physical. load in hours:`,inputType:"dailyNorma",value:u.values.activityTime,onChange:f=>c(f),onFocus:f=>h(f,"activityTime"),onBlur:f=>m(f,"activityTime"),name:"activityTime",type:"number",min:"0",max:"10",step:"0.1",error:u.touched.activityTime&&u.errors.activityTime}),i.jsxs(Or,{children:[i.jsx(i.Fragment,{children:"The required amount of water in liters per day:"}),i.jsx(Rr,{children:isNaN(o)||o<0?i.jsx(Nr,{children:"Input data error"}):`${o} L`})]}),i.jsx(Ve,{label:"Write down how much water you will drink:",inputType:"dailyNorma",value:u.values.waterAmount,onChange:f=>c(f),onFocus:f=>h(f,"waterAmount"),name:"waterAmount",type:"number",min:"0",max:"20",step:"0.1",error:u.touched.waterAmount&&u.errors.waterAmount}),i.jsx(Wr,{children:i.jsx(Ur,{type:"submit",onClick:l,children:"Save"})}),i.jsx(An,{})]})]})})})},Gr=()=>{const{waterRate:e}=It().user,t=p.useContext(Lt),n=(e/1e3).toFixed(1),r=()=>{t(i.jsx(Zr,{}))};return i.jsxs(fr,{children:[i.jsxs(xr,{children:[i.jsx(mr,{children:"My daily norma"}),i.jsxs(gr,{children:[i.jsxs(br,{children:[`${n}`," L"]}),i.jsx(wr,{onClick:r,children:"Edit"})]})]}),i.jsx(yr,{})]})};function A(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Q(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function kt(e,t){const n=A(e);if(isNaN(t))return Q(e,NaN);if(!t)return n;const r=n.getDate(),o=Q(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const a=o.getDate();return r>=a?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const tn=6048e5,Qr=864e5;let Xr={};function Ie(){return Xr}function Se(e,t){var c,l,u,h;const n=Ie(),r=(t==null?void 0:t.weekStartsOn)??((l=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((h=(u=n.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??0,o=A(e),a=o.getDay(),s=(a<r?7:0)+a-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function Fe(e){return Se(e,{weekStartsOn:1})}function nn(e){const t=A(e),n=t.getFullYear(),r=Q(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Fe(r),a=Q(e,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const s=Fe(a);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function Oe(e){const t=A(e);return t.setHours(0,0,0,0),t}function Et(e){const t=A(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Kr(e,t){const n=Oe(e),r=Oe(t),o=+n-Et(n),a=+r-Et(r);return Math.round((o-a)/Qr)}function Jr(e){const t=nn(e),n=Q(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Fe(n)}function eo(e){return Q(e,Date.now())}function to(e,t){const n=Oe(e),r=Oe(t);return+n==+r}function no(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ro(e){if(!no(e)&&typeof e!="number")return!1;const t=A(e);return!isNaN(Number(t))}function Ue(e){const t=A(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function oo(e,t){const n=A(e.start),r=A(e.end);let o=+n>+r;const a=o?+n:+r,s=o?r:n;s.setHours(0,0,0,0);let c=(t==null?void 0:t.step)??1;if(!c)return[];c<0&&(c=-c,o=!o);const l=[];for(;+s<=a;)l.push(A(s)),s.setDate(s.getDate()+c),s.setHours(0,0,0,0);return o?l.reverse():l}function Ze(e){const t=A(e);return t.setDate(1),t.setHours(0,0,0,0),t}function io(e){const t=A(e),n=Q(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const ao={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},so=(e,t,n)=>{let r;const o=ao[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Ge(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const co={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},lo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},uo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},po={date:Ge({formats:co,defaultWidth:"full"}),time:Ge({formats:lo,defaultWidth:"full"}),dateTime:Ge({formats:uo,defaultWidth:"full"})},ho={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},fo=(e,t,n,r)=>ho[e];function we(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,c=n!=null&&n.width?String(n.width):s;o=e.formattingValues[c]||e.formattingValues[s]}else{const s=e.defaultWidth,c=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[c]||e.values[s]}const a=e.argumentCallback?e.argumentCallback(t):t;return o[a]}}const xo={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},mo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},go={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},bo={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},yo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},vo=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ko={ordinalNumber:vo,era:we({values:xo,defaultWidth:"wide"}),quarter:we({values:mo,defaultWidth:"wide",argumentCallback:e=>e-1}),month:we({values:go,defaultWidth:"wide"}),day:we({values:bo,defaultWidth:"wide"}),dayPeriod:we({values:wo,defaultWidth:"wide",formattingValues:yo,defaultFormattingWidth:"wide"})};function ye(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;const s=a[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(c)?jo(c,m=>m.test(s)):Eo(c,m=>m.test(s));let u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;const h=t.slice(s.length);return{value:u,rest:h}}}function Eo(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function jo(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Mo(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],a=t.match(e.parsePattern);if(!a)return null;let s=e.valueCallback?e.valueCallback(a[0]):a[0];s=n.valueCallback?n.valueCallback(s):s;const c=t.slice(o.length);return{value:s,rest:c}}}const So=/^(\d+)(th|st|nd|rd)?/i,Po=/\d+/i,To={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Co={any:[/^b/i,/^(a|c)/i]},Do={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Fo={any:[/1/i,/2/i,/3/i,/4/i]},Oo={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ro={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wo={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},No={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_o={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Bo={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ao={ordinalNumber:Mo({matchPattern:So,parsePattern:Po,valueCallback:e=>parseInt(e,10)}),era:ye({matchPatterns:To,defaultMatchWidth:"wide",parsePatterns:Co,defaultParseWidth:"any"}),quarter:ye({matchPatterns:Do,defaultMatchWidth:"wide",parsePatterns:Fo,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ye({matchPatterns:Oo,defaultMatchWidth:"wide",parsePatterns:Ro,defaultParseWidth:"any"}),day:ye({matchPatterns:Wo,defaultMatchWidth:"wide",parsePatterns:No,defaultParseWidth:"any"}),dayPeriod:ye({matchPatterns:_o,defaultMatchWidth:"any",parsePatterns:Bo,defaultParseWidth:"any"})},Lo={code:"en-US",formatDistance:so,formatLong:po,formatRelative:fo,localize:ko,match:Ao,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Io(e){const t=A(e);return Kr(t,io(t))+1}function $o(e){const t=A(e),n=+Fe(t)-+Jr(t);return Math.round(n/tn)+1}function rn(e,t){var h,m,f,b;const n=A(e),r=n.getFullYear(),o=Ie(),a=(t==null?void 0:t.firstWeekContainsDate)??((m=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??o.firstWeekContainsDate??((b=(f=o.locale)==null?void 0:f.options)==null?void 0:b.firstWeekContainsDate)??1,s=Q(e,0);s.setFullYear(r+1,0,a),s.setHours(0,0,0,0);const c=Se(s,t),l=Q(e,0);l.setFullYear(r,0,a),l.setHours(0,0,0,0);const u=Se(l,t);return n.getTime()>=c.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function zo(e,t){var c,l,u,h;const n=Ie(),r=(t==null?void 0:t.firstWeekContainsDate)??((l=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(u=n.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??1,o=rn(e,t),a=Q(e,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),Se(a,t)}function Ho(e,t){const n=A(e),r=+Se(n,t)-+zo(n,t);return Math.round(r/tn)+1}function W(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const ee={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return W(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):W(n+1,2)},d(e,t){return W(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return W(e.getHours()%12||12,t.length)},H(e,t){return W(e.getHours(),t.length)},m(e,t){return W(e.getMinutes(),t.length)},s(e,t){return W(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return W(o,t.length)}},pe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},jt={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return ee.y(e,t)},Y:function(e,t,n,r){const o=rn(e,r),a=o>0?o:1-o;if(t==="YY"){const s=a%100;return W(s,2)}return t==="Yo"?n.ordinalNumber(a,{unit:"year"}):W(a,t.length)},R:function(e,t){const n=nn(e);return W(n,t.length)},u:function(e,t){const n=e.getFullYear();return W(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ee.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Ho(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):W(o,t.length)},I:function(e,t,n){const r=$o(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):W(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):ee.d(e,t)},D:function(e,t,n){const r=Io(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return W(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return W(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return W(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=pe.noon:r===0?o=pe.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=pe.evening:r>=12?o=pe.afternoon:r>=4?o=pe.morning:o=pe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return ee.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):ee.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):W(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):W(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ee.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ee.s(e,t)},S:function(e,t){return ee.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return St(r);case"XXXX":case"XX":return re(r);case"XXXXX":case"XXX":default:return re(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return St(r);case"xxxx":case"xx":return re(r);case"xxxxx":case"xxx":default:return re(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Mt(r,":");case"OOOO":default:return"GMT"+re(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Mt(r,":");case"zzzz":default:return"GMT"+re(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return W(r,t.length)},T:function(e,t,n){const r=e.getTime();return W(r,t.length)}};function Mt(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),a=r%60;return a===0?n+String(o):n+String(o)+t+W(a,2)}function St(e,t){return e%60===0?(e>0?"-":"+")+W(Math.abs(e)/60,2):re(e,t)}function re(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=W(Math.trunc(r/60),2),a=W(r%60,2);return n+o+t+a}const Pt=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},on=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Yo=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Pt(e,t);let a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",Pt(r,t)).replace("{{time}}",on(o,t))},qo={p:on,P:Yo},Vo=/^D+$/,Uo=/^Y+$/,Zo=["D","DD","YY","YYYY"];function Go(e){return Vo.test(e)}function Qo(e){return Uo.test(e)}function Xo(e,t,n){const r=Ko(e,t,n);if(console.warn(r),Zo.includes(e))throw new RangeError(r)}function Ko(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Jo=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ei=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ti=/^'([^]*?)'?$/,ni=/''/g,ri=/[a-zA-Z]/;function ke(e,t,n){var h,m,f,b,g,y,S,E;const r=Ie(),o=(n==null?void 0:n.locale)??r.locale??Lo,a=(n==null?void 0:n.firstWeekContainsDate)??((m=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((b=(f=r.locale)==null?void 0:f.options)==null?void 0:b.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((y=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:y.weekStartsOn)??r.weekStartsOn??((E=(S=r.locale)==null?void 0:S.options)==null?void 0:E.weekStartsOn)??0,c=A(e);if(!ro(c))throw new RangeError("Invalid time value");let l=t.match(ei).map(C=>{const x=C[0];if(x==="p"||x==="P"){const v=qo[x];return v(C,o.formatLong)}return C}).join("").match(Jo).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const x=C[0];if(x==="'")return{isToken:!1,value:oi(C)};if(jt[x])return{isToken:!0,value:C};if(x.match(ri))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:C}});o.localize.preprocessor&&(l=o.localize.preprocessor(c,l));const u={firstWeekContainsDate:a,weekStartsOn:s,locale:o};return l.map(C=>{if(!C.isToken)return C.value;const x=C.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Qo(x)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Go(x))&&Xo(x,t,String(e));const v=jt[x[0]];return v(c,x,o.localize,u)}).join("")}function oi(e){const t=e.match(ti);return t?t[1].replace(ni,"'"):e}function ii(e){return A(e).getDate()}function ai(e){return to(e,eo(e))}function si(e,t){const n=+A(e),[r,o]=[+A(t.start),+A(t.end)].sort((a,s)=>a-s);return n>=r&&n<=o}function ci(e,t,n,r,o){const[a,s]=p.useState(()=>o&&n?n(e).matches:r?r(e).matches:t);return tt(()=>{let c=!0;if(!n)return;const l=n(e),u=()=>{c&&s(l.matches)};return u(),l.addListener(u),()=>{c=!1,l.removeListener(u)}},[e,n]),a}const an=jn["useSyncExternalStore"];function li(e,t,n,r,o){const a=p.useCallback(()=>t,[t]),s=p.useMemo(()=>{if(o&&n)return()=>n(e).matches;if(r!==null){const{matches:h}=r(e);return()=>h}return a},[a,e,r,o,n]),[c,l]=p.useMemo(()=>{if(n===null)return[a,()=>()=>{}];const h=n(e);return[()=>h.matches,m=>(h.addListener(m),()=>{h.removeListener(m)})]},[a,n,e]);return an(l,c,s)}function di(e,t={}){const n=kn(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:a=r?window.matchMedia:null,ssrMatchMedia:s=null,noSsr:c=!1}=En({name:"MuiUseMediaQuery",props:t,theme:n});let l=typeof e=="function"?e(n):e;return l=l.replace(/^@media( ?)/m,""),(an!==void 0?li:ci)(l,o,a,s,c)}function sn(){const e=Mn(Sn);return e[Pn]||e}const ui=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Tt=ui;function nt(e,t){return nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},nt(e,t)}function pi(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,nt(e,t)}const Ct={disabled:!1},cn=ve.createContext(null);var hi=function(t){return t.scrollTop},Ee="unmounted",oe="exited",ie="entering",fe="entered",rt="exiting",J=function(e){pi(t,e);function t(r,o){var a;a=e.call(this,r,o)||this;var s=o,c=s&&!s.isMounting?r.enter:r.appear,l;return a.appearStatus=null,r.in?c?(l=oe,a.appearStatus=ie):l=fe:r.unmountOnExit||r.mountOnEnter?l=Ee:l=oe,a.state={status:l},a.nextCallback=null,a}t.getDerivedStateFromProps=function(o,a){var s=o.in;return s&&a.status===Ee?{status:oe}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var a=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==ie&&s!==fe&&(a=ie):(s===ie||s===fe)&&(a=rt)}this.updateStatus(!1,a)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,a,s,c;return a=s=c=o,o!=null&&typeof o!="number"&&(a=o.exit,s=o.enter,c=o.appear!==void 0?o.appear:s),{exit:a,enter:s,appear:c}},n.updateStatus=function(o,a){if(o===void 0&&(o=!1),a!==null)if(this.cancelNextCallback(),a===ie){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:De.findDOMNode(this);s&&hi(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===oe&&this.setState({status:Ee})},n.performEnter=function(o){var a=this,s=this.props.enter,c=this.context?this.context.isMounting:o,l=this.props.nodeRef?[c]:[De.findDOMNode(this),c],u=l[0],h=l[1],m=this.getTimeouts(),f=c?m.appear:m.enter;if(!o&&!s||Ct.disabled){this.safeSetState({status:fe},function(){a.props.onEntered(u)});return}this.props.onEnter(u,h),this.safeSetState({status:ie},function(){a.props.onEntering(u,h),a.onTransitionEnd(f,function(){a.safeSetState({status:fe},function(){a.props.onEntered(u,h)})})})},n.performExit=function(){var o=this,a=this.props.exit,s=this.getTimeouts(),c=this.props.nodeRef?void 0:De.findDOMNode(this);if(!a||Ct.disabled){this.safeSetState({status:oe},function(){o.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:rt},function(){o.props.onExiting(c),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:oe},function(){o.props.onExited(c)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,a){a=this.setNextCallback(a),this.setState(o,a)},n.setNextCallback=function(o){var a=this,s=!0;return this.nextCallback=function(c){s&&(s=!1,a.nextCallback=null,o(c))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,a){this.setNextCallback(a);var s=this.props.nodeRef?this.props.nodeRef.current:De.findDOMNode(this),c=o==null&&!this.props.addEndListener;if(!s||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],h=l[1];this.props.addEndListener(u,h)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Ee)return null;var a=this.props,s=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var c=G(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ve.createElement(cn.Provider,{value:null},typeof s=="function"?s(o,c):ve.cloneElement(ve.Children.only(s),c))},t}(ve.Component);J.contextType=cn;J.propTypes={};function he(){}J.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:he,onEntering:he,onEntered:he,onExit:he,onExiting:he,onExited:he};J.UNMOUNTED=Ee;J.EXITED=oe;J.ENTERING=ie;J.ENTERED=fe;J.EXITING=rt;const ln=J,dn=e=>e.scrollTop;function Re(e,t){var n,r;const{timeout:o,easing:a,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof a=="object"?a[t.mode]:a,delay:s.transitionDelay}}function fi(e){return Ne("MuiPaper",e)}_e("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const xi=["className","component","elevation","square","variant"],mi=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,a={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Ae(a,fi,o)},gi=me("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return j({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&j({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${xt("#fff",Tt(t.elevation))}, ${xt("#fff",Tt(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),bi=p.forwardRef(function(t,n){const r=Be({props:t,name:"MuiPaper"}),{className:o,component:a="div",elevation:s=1,square:c=!1,variant:l="elevation"}=r,u=G(r,xi),h=j({},r,{component:a,elevation:s,square:c,variant:l}),m=mi(h);return i.jsx(gi,j({as:a,ownerState:h,className:te(m.root,o),ref:n},u))}),wi=bi;function un(e){return typeof e=="string"}function yi(e,t,n){return e===void 0||un(e)?t:j({},t,{ownerState:j({},t.ownerState,n)})}function pn(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function vi(e,t,n){return typeof e=="function"?e(t,n):e}function Dt(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function ki(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:a}=e;if(!t){const b=te(n==null?void 0:n.className,a,o==null?void 0:o.className,r==null?void 0:r.className),g=j({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),y=j({},n,o,r);return b.length>0&&(y.className=b),Object.keys(g).length>0&&(y.style=g),{props:y,internalRef:void 0}}const s=pn(j({},o,r)),c=Dt(r),l=Dt(o),u=t(s),h=te(u==null?void 0:u.className,n==null?void 0:n.className,a,o==null?void 0:o.className,r==null?void 0:r.className),m=j({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),f=j({},u,n,l,c);return h.length>0&&(f.className=h),Object.keys(m).length>0&&(f.style=m),{props:f,internalRef:u.ref}}const Ei=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function We(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:a=!1}=e,s=G(e,Ei),c=a?{}:vi(r,o),{props:l,internalRef:u}=ki(j({},s,{externalSlotProps:c})),h=ae(u,c==null?void 0:c.ref,(t=e.additionalProps)==null?void 0:t.ref);return yi(n,j({},l,{ref:h}),o)}const ji=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Mi(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Si(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Pi(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Si(e))}function Ti(e){const t=[],n=[];return Array.from(e.querySelectorAll(ji)).forEach((r,o)=>{const a=Mi(r);a===-1||!Pi(r)||(a===0?t.push(r):n.push({documentOrder:o,tabIndex:a,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Ci(){return!0}function Di(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:a=Ti,isEnabled:s=Ci,open:c}=e,l=p.useRef(!1),u=p.useRef(null),h=p.useRef(null),m=p.useRef(null),f=p.useRef(null),b=p.useRef(!1),g=p.useRef(null),y=ae(t.ref,g),S=p.useRef(null);p.useEffect(()=>{!c||!g.current||(b.current=!n)},[n,c]),p.useEffect(()=>{if(!c||!g.current)return;const x=K(g.current);return g.current.contains(x.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),b.current&&g.current.focus()),()=>{o||(m.current&&m.current.focus&&(l.current=!0,m.current.focus()),m.current=null)}},[c]),p.useEffect(()=>{if(!c||!g.current)return;const x=K(g.current),v=w=>{S.current=w,!(r||!s()||w.key!=="Tab")&&x.activeElement===g.current&&w.shiftKey&&(l.current=!0,h.current&&h.current.focus())},M=()=>{const w=g.current;if(w===null)return;if(!x.hasFocus()||!s()||l.current){l.current=!1;return}if(w.contains(x.activeElement)||r&&x.activeElement!==u.current&&x.activeElement!==h.current)return;if(x.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!b.current)return;let D=[];if((x.activeElement===u.current||x.activeElement===h.current)&&(D=a(g.current)),D.length>0){var k,O;const $=!!((k=S.current)!=null&&k.shiftKey&&((O=S.current)==null?void 0:O.key)==="Tab"),B=D[0],z=D[D.length-1];typeof B!="string"&&typeof z!="string"&&($?z.focus():B.focus())}else w.focus()};x.addEventListener("focusin",M),x.addEventListener("keydown",v,!0);const R=setInterval(()=>{x.activeElement&&x.activeElement.tagName==="BODY"&&M()},50);return()=>{clearInterval(R),x.removeEventListener("focusin",M),x.removeEventListener("keydown",v,!0)}},[n,r,o,s,c,a]);const E=x=>{m.current===null&&(m.current=x.relatedTarget),b.current=!0,f.current=x.target;const v=t.props.onFocus;v&&v(x)},C=x=>{m.current===null&&(m.current=x.relatedTarget),b.current=!0};return i.jsxs(p.Fragment,{children:[i.jsx("div",{tabIndex:c?0:-1,onFocus:C,ref:u,"data-testid":"sentinelStart"}),p.cloneElement(t,{ref:y,onFocus:E}),i.jsx("div",{tabIndex:c?0:-1,onFocus:C,ref:h,"data-testid":"sentinelEnd"})]})}function Fi(e){return typeof e=="function"?e():e}const Oi=p.forwardRef(function(t,n){const{children:r,container:o,disablePortal:a=!1}=t,[s,c]=p.useState(null),l=ae(p.isValidElement(r)?r.ref:null,n);if(tt(()=>{a||c(Fi(o)||document.body)},[o,a]),tt(()=>{if(s&&!a)return mt(n,s),()=>{mt(n,null)}},[n,s,a]),a){if(p.isValidElement(r)){const u={ref:l};return p.cloneElement(r,u)}return i.jsx(p.Fragment,{children:r})}return i.jsx(p.Fragment,{children:s&&At.createPortal(r,s)})});function Ri(e){const t=K(e);return t.body===e?Me(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function je(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ft(e){return parseInt(Me(e).getComputedStyle(e).paddingRight,10)||0}function Wi(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Ot(e,t,n,r,o){const a=[t,n,...r];[].forEach.call(e.children,s=>{const c=a.indexOf(s)===-1,l=!Wi(s);c&&l&&je(s,o)})}function Qe(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function Ni(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Ri(r)){const s=Ln(K(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Ft(r)+s}px`;const c=K(r).querySelectorAll(".mui-fixed");[].forEach.call(c,l=>{n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Ft(l)+s}px`})}let a;if(r.parentNode instanceof DocumentFragment)a=K(r).body;else{const s=r.parentElement,c=Me(r);a=(s==null?void 0:s.nodeName)==="HTML"&&c.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return()=>{n.forEach(({value:a,el:s,property:c})=>{a?s.style.setProperty(c,a):s.style.removeProperty(c)})}}function _i(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Bi{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&je(t.modalRef,!1);const o=_i(n);Ot(n,t.mount,t.modalRef,o,!0);const a=Qe(this.containers,s=>s.container===n);return a!==-1?(this.containers[a].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Qe(this.containers,a=>a.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=Ni(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Qe(this.containers,s=>s.modals.indexOf(t)!==-1),a=this.containers[o];if(a.modals.splice(a.modals.indexOf(t),1),this.modals.splice(r,1),a.modals.length===0)a.restore&&a.restore(),t.modalRef&&je(t.modalRef,n),Ot(a.container,t.mount,t.modalRef,a.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=a.modals[a.modals.length-1];s.modalRef&&je(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ai(e){return typeof e=="function"?e():e}function Li(e){return e?e.props.hasOwnProperty("in"):!1}const Ii=new Bi;function $i(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=Ii,closeAfterTransition:a=!1,onTransitionEnter:s,onTransitionExited:c,children:l,onClose:u,open:h,rootRef:m}=e,f=p.useRef({}),b=p.useRef(null),g=p.useRef(null),y=ae(g,m),[S,E]=p.useState(!h),C=Li(l);let x=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(x=!1);const v=()=>K(b.current),M=()=>(f.current.modalRef=g.current,f.current.mount=b.current,f.current),R=()=>{o.mount(M(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},w=gt(()=>{const T=Ai(t)||v().body;o.add(M(),T),g.current&&R()}),D=p.useCallback(()=>o.isTopModal(M()),[o]),k=gt(T=>{b.current=T,T&&(h&&D()?R():g.current&&je(g.current,x))}),O=p.useCallback(()=>{o.remove(M(),x)},[x,o]);p.useEffect(()=>()=>{O()},[O]),p.useEffect(()=>{h?w():(!C||!a)&&O()},[h,O,C,a,w]);const $=T=>F=>{var I;(I=T.onKeyDown)==null||I.call(T,F),!(F.key!=="Escape"||F.which===229||!D())&&(n||(F.stopPropagation(),u&&u(F,"escapeKeyDown")))},B=T=>F=>{var I;(I=T.onClick)==null||I.call(T,F),F.target===F.currentTarget&&u&&u(F,"backdropClick")};return{getRootProps:(T={})=>{const F=pn(e);delete F.onTransitionEnter,delete F.onTransitionExited;const I=j({},F,T);return j({role:"presentation"},I,{onKeyDown:$(I),ref:y})},getBackdropProps:(T={})=>{const F=T;return j({"aria-hidden":!0},F,{onClick:B(F),open:h})},getTransitionProps:()=>{const T=()=>{E(!1),s&&s()},F=()=>{E(!0),c&&c(),a&&O()};return{onEnter:bt(T,l==null?void 0:l.props.onEnter),onExited:bt(F,l==null?void 0:l.props.onExited)}},rootRef:y,portalRef:k,isTopModal:D,exited:S,hasTransition:C}}const zi=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Hi={entering:{opacity:1},entered:{opacity:1}},Yi=p.forwardRef(function(t,n){const r=sn(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:a,appear:s=!0,children:c,easing:l,in:u,onEnter:h,onEntered:m,onEntering:f,onExit:b,onExited:g,onExiting:y,style:S,timeout:E=o,TransitionComponent:C=ln}=t,x=G(t,zi),v=p.useRef(null),M=ae(v,c.ref,n),R=_=>P=>{if(_){const T=v.current;P===void 0?_(T):_(T,P)}},w=R(f),D=R((_,P)=>{dn(_);const T=Re({style:S,timeout:E,easing:l},{mode:"enter"});_.style.webkitTransition=r.transitions.create("opacity",T),_.style.transition=r.transitions.create("opacity",T),h&&h(_,P)}),k=R(m),O=R(y),$=R(_=>{const P=Re({style:S,timeout:E,easing:l},{mode:"exit"});_.style.webkitTransition=r.transitions.create("opacity",P),_.style.transition=r.transitions.create("opacity",P),b&&b(_)}),B=R(g),z=_=>{a&&a(v.current,_)};return i.jsx(C,j({appear:s,in:u,nodeRef:v,onEnter:D,onEntered:k,onEntering:w,onExit:$,onExited:B,onExiting:O,addEndListener:z,timeout:E},x,{children:(_,P)=>p.cloneElement(c,j({style:j({opacity:0,visibility:_==="exited"&&!u?"hidden":void 0},Hi[_],S,c.props.style),ref:M},P))}))}),qi=Yi;function Vi(e){return Ne("MuiBackdrop",e)}_e("MuiBackdrop",["root","invisible"]);const Ui=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Zi=e=>{const{classes:t,invisible:n}=e;return Ae({root:["root",n&&"invisible"]},Vi,t)},Gi=me("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>j({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Qi=p.forwardRef(function(t,n){var r,o,a;const s=Be({props:t,name:"MuiBackdrop"}),{children:c,className:l,component:u="div",components:h={},componentsProps:m={},invisible:f=!1,open:b,slotProps:g={},slots:y={},TransitionComponent:S=qi,transitionDuration:E}=s,C=G(s,Ui),x=j({},s,{component:u,invisible:f}),v=Zi(x),M=(r=g.root)!=null?r:m.root;return i.jsx(S,j({in:b,timeout:E},C,{children:i.jsx(Gi,j({"aria-hidden":!0},M,{as:(o=(a=y.root)!=null?a:h.Root)!=null?o:u,className:te(v.root,l,M==null?void 0:M.className),ownerState:j({},x,M==null?void 0:M.ownerState),classes:v,ref:n,children:c}))}))}),Xi=Qi;function Ki(e){return Ne("MuiModal",e)}_e("MuiModal",["root","hidden","backdrop"]);const Ji=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],ea=e=>{const{open:t,exited:n,classes:r}=e;return Ae({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Ki,r)},ta=me("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>j({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),na=me(Xi,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ra=p.forwardRef(function(t,n){var r,o,a,s,c,l;const u=Be({name:"MuiModal",props:t}),{BackdropComponent:h=na,BackdropProps:m,className:f,closeAfterTransition:b=!1,children:g,container:y,component:S,components:E={},componentsProps:C={},disableAutoFocus:x=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:M=!1,disablePortal:R=!1,disableRestoreFocus:w=!1,disableScrollLock:D=!1,hideBackdrop:k=!1,keepMounted:O=!1,onBackdropClick:$,open:B,slotProps:z,slots:_}=u,P=G(u,Ji),T=j({},u,{closeAfterTransition:b,disableAutoFocus:x,disableEnforceFocus:v,disableEscapeKeyDown:M,disablePortal:R,disableRestoreFocus:w,disableScrollLock:D,hideBackdrop:k,keepMounted:O}),{getRootProps:F,getBackdropProps:I,getTransitionProps:H,portalRef:Z,isTopModal:Te,exited:V,hasTransition:Ce}=$i(j({},T,{rootRef:n})),ne=j({},T,{exited:V}),X=ea(ne),se={};if(g.props.tabIndex===void 0&&(se.tabIndex="-1"),Ce){const{onEnter:N,onExited:L}=H();se.onEnter=N,se.onExited=L}const ce=(r=(o=_==null?void 0:_.root)!=null?o:E.Root)!=null?r:ta,ge=(a=(s=_==null?void 0:_.backdrop)!=null?s:E.Backdrop)!=null?a:h,be=(c=z==null?void 0:z.root)!=null?c:C.root,le=(l=z==null?void 0:z.backdrop)!=null?l:C.backdrop,$e=We({elementType:ce,externalSlotProps:be,externalForwardedProps:P,getSlotProps:F,additionalProps:{ref:n,as:S},ownerState:ne,className:te(f,be==null?void 0:be.className,X==null?void 0:X.root,!ne.open&&ne.exited&&(X==null?void 0:X.hidden))}),ze=We({elementType:ge,externalSlotProps:le,additionalProps:m,getSlotProps:N=>I(j({},N,{onClick:L=>{$&&$(L),N!=null&&N.onClick&&N.onClick(L)}})),className:te(le==null?void 0:le.className,m==null?void 0:m.className,X==null?void 0:X.backdrop),ownerState:ne});return!O&&!B&&(!Ce||V)?null:i.jsx(Oi,{ref:Z,container:y,disablePortal:R,children:i.jsxs(ce,j({},$e,{children:[!k&&h?i.jsx(ge,j({},ze)):null,i.jsx(Di,{disableEnforceFocus:v,disableAutoFocus:x,disableRestoreFocus:w,isEnabled:Te,open:B,children:p.cloneElement(g,se)})]}))})}),oa=ra,ia=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ot(e){return`scale(${e}, ${e**2})`}const aa={entering:{opacity:1,transform:ot(1)},entered:{opacity:1,transform:"none"}},Xe=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),hn=p.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:a,easing:s,in:c,onEnter:l,onEntered:u,onEntering:h,onExit:m,onExited:f,onExiting:b,style:g,timeout:y="auto",TransitionComponent:S=ln}=t,E=G(t,ia),C=Tn(),x=p.useRef(),v=sn(),M=p.useRef(null),R=ae(M,a.ref,n),w=P=>T=>{if(P){const F=M.current;T===void 0?P(F):P(F,T)}},D=w(h),k=w((P,T)=>{dn(P);const{duration:F,delay:I,easing:H}=Re({style:g,timeout:y,easing:s},{mode:"enter"});let Z;y==="auto"?(Z=v.transitions.getAutoHeightDuration(P.clientHeight),x.current=Z):Z=F,P.style.transition=[v.transitions.create("opacity",{duration:Z,delay:I}),v.transitions.create("transform",{duration:Xe?Z:Z*.666,delay:I,easing:H})].join(","),l&&l(P,T)}),O=w(u),$=w(b),B=w(P=>{const{duration:T,delay:F,easing:I}=Re({style:g,timeout:y,easing:s},{mode:"exit"});let H;y==="auto"?(H=v.transitions.getAutoHeightDuration(P.clientHeight),x.current=H):H=T,P.style.transition=[v.transitions.create("opacity",{duration:H,delay:F}),v.transitions.create("transform",{duration:Xe?H:H*.666,delay:Xe?F:F||H*.333,easing:I})].join(","),P.style.opacity=0,P.style.transform=ot(.75),m&&m(P)}),z=w(f),_=P=>{y==="auto"&&C.start(x.current||0,P),r&&r(M.current,P)};return i.jsx(S,j({appear:o,in:c,nodeRef:M,onEnter:k,onEntered:O,onEntering:D,onExit:B,onExited:z,onExiting:$,addEndListener:_,timeout:y==="auto"?null:y},E,{children:(P,T)=>p.cloneElement(a,j({style:j({opacity:0,transform:ot(.75),visibility:P==="exited"&&!c?"hidden":void 0},aa[P],g,a.props.style),ref:R},T))}))});hn.muiSupportAuto=!0;const sa=hn;function ca(e){return Ne("MuiPopover",e)}_e("MuiPopover",["root","paper"]);const la=["onEntering"],da=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],ua=["slotProps"];function Rt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Wt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Nt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Ke(e){return typeof e=="function"?e():e}const pa=e=>{const{classes:t}=e;return Ae({root:["root"],paper:["paper"]},ca,t)},ha=me(oa,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),fa=me(wi,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),xa=p.forwardRef(function(t,n){var r,o,a;const s=Be({props:t,name:"MuiPopover"}),{action:c,anchorEl:l,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:h,anchorReference:m="anchorEl",children:f,className:b,container:g,elevation:y=8,marginThreshold:S=16,open:E,PaperProps:C={},slots:x,slotProps:v,transformOrigin:M={vertical:"top",horizontal:"left"},TransitionComponent:R=sa,transitionDuration:w="auto",TransitionProps:{onEntering:D}={},disableScrollLock:k=!1}=s,O=G(s.TransitionProps,la),$=G(s,da),B=(r=v==null?void 0:v.paper)!=null?r:C,z=p.useRef(),_=ae(z,B.ref),P=j({},s,{anchorOrigin:u,anchorReference:m,elevation:y,marginThreshold:S,externalPaperSlotProps:B,transformOrigin:M,TransitionComponent:R,transitionDuration:w,TransitionProps:O}),T=pa(P),F=p.useCallback(()=>{if(m==="anchorPosition")return h;const N=Ke(l),q=(N&&N.nodeType===1?N:K(z.current).body).getBoundingClientRect();return{top:q.top+Rt(q,u.vertical),left:q.left+Wt(q,u.horizontal)}},[l,u.horizontal,u.vertical,h,m]),I=p.useCallback(N=>({vertical:Rt(N,M.vertical),horizontal:Wt(N,M.horizontal)}),[M.horizontal,M.vertical]),H=p.useCallback(N=>{const L={width:N.offsetWidth,height:N.offsetHeight},q=I(L);if(m==="none")return{top:null,left:null,transformOrigin:Nt(q)};const lt=F();let de=lt.top-q.vertical,ue=lt.left-q.horizontal;const dt=de+L.height,ut=ue+L.width,pt=Me(Ke(l)),ht=pt.innerHeight-S,ft=pt.innerWidth-S;if(S!==null&&de<S){const U=de-S;de-=U,q.vertical+=U}else if(S!==null&&dt>ht){const U=dt-ht;de-=U,q.vertical+=U}if(S!==null&&ue<S){const U=ue-S;ue-=U,q.horizontal+=U}else if(ut>ft){const U=ut-ft;ue-=U,q.horizontal+=U}return{top:`${Math.round(de)}px`,left:`${Math.round(ue)}px`,transformOrigin:Nt(q)}},[l,m,F,I,S]),[Z,Te]=p.useState(E),V=p.useCallback(()=>{const N=z.current;if(!N)return;const L=H(N);L.top!==null&&(N.style.top=L.top),L.left!==null&&(N.style.left=L.left),N.style.transformOrigin=L.transformOrigin,Te(!0)},[H]);p.useEffect(()=>(k&&window.addEventListener("scroll",V),()=>window.removeEventListener("scroll",V)),[l,k,V]);const Ce=(N,L)=>{D&&D(N,L),V()},ne=()=>{Te(!1)};p.useEffect(()=>{E&&V()}),p.useImperativeHandle(c,()=>E?{updatePosition:()=>{V()}}:null,[E,V]),p.useEffect(()=>{if(!E)return;const N=Cn(()=>{V()}),L=Me(l);return L.addEventListener("resize",N),()=>{N.clear(),L.removeEventListener("resize",N)}},[l,E,V]);let X=w;w==="auto"&&!R.muiSupportAuto&&(X=void 0);const se=g||(l?K(Ke(l)).body:void 0),ce=(o=x==null?void 0:x.root)!=null?o:ha,ge=(a=x==null?void 0:x.paper)!=null?a:fa,be=We({elementType:ge,externalSlotProps:j({},B,{style:Z?B.style:j({},B.style,{opacity:0})}),additionalProps:{elevation:y,ref:_},ownerState:P,className:te(T.paper,B==null?void 0:B.className)}),le=We({elementType:ce,externalSlotProps:(v==null?void 0:v.root)||{},externalForwardedProps:$,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:se,open:E},ownerState:P,className:te(T.root,b)}),{slotProps:$e}=le,ze=G(le,ua);return i.jsx(ce,j({},ze,!un(ce)&&{slotProps:$e,disableScrollLock:k},{children:i.jsx(R,j({appear:!0,in:E,onEntering:Ce,onExited:ne,timeout:X},O,{children:i.jsx(ge,j({},be,{children:f}))}))}))}),ma=xa;var st={},ga=zt;Object.defineProperty(st,"__esModule",{value:!0});var fn=st.default=void 0,ba=ga($t()),wa=i;fn=st.default=(0,ba.default)((0,wa.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var ct={},ya=zt;Object.defineProperty(ct,"__esModule",{value:!0});var xn=ct.default=void 0,va=ya($t()),ka=i;xn=ct.default=(0,va.default)((0,ka.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const Ea=Y.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 10px;
    padding: 24px 0 24px 13px;
    width: 280px;
    height: 188px;
    box-shadow: 0 4px 4px 0 rgba(64, 123, 255, 0.3);
    background: #fff;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;

    @media screen and (min-width: 768px) {
        padding-left: 16px;
        width: 292px;
        height: 188px;
    }

    @media screen and (min-width: 1440px) {
        width: 292px;
        height: 188px;
    }
`;Y.div`
    // position: fixed;
        // left: ${e=>e.x}px;
        // top: ${e=>e.y}px;

    div {
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-radius: 10px;
        padding: 24px 0 24px 13px;
        width: 280px;
        height: 188px;
        box-shadow: 0 4px 4px 0 rgba(64, 123, 255, 0.3);
        background: #fff;

        font-weight: 400;
        font-size: 16px;
        line-height: 1.25;

        @media screen and (min-width: 768px) {
            padding-left: 16px;
            width: 292px;
            height: 188px;
        }

        @media screen and (min-width: 1440px) {
            width: 292px;
            height: 188px;
        }
    }

`;const ja=Y.p`
    margin: 0; // todo
    color: #407bff; // todo
`,Je=Y.p`
    margin: 0;
    color: #2f2f2f;

    span {
        margin-left: 6px;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.33333;
        color: #407bff;
    }
`,Ma=({dayInfo:e})=>{const{data:t,dailyNorma:n,percentage:r,totalRecords:o}=e;return i.jsxs(Ea,{children:[i.jsx(ja,{children:ke(t,"dd, MMMM")}),i.jsxs(Je,{children:["Daily norma:",i.jsxs("span",{children:[n," L"]})]}),i.jsxs(Je,{children:["Fulfillment of the daily norm:",i.jsxs("span",{children:[r,"%"]})]}),i.jsxs(Je,{children:["How many servings of water:",i.jsx("span",{children:o})]})]})},Sa=Y.div`
    width: 264px;
    background-color: var(--background-tracker);

    @media screen and (min-width: 768px) {
        min-width: 656px;
    }

    @media screen and (min-width: 1440px) {
        min-width: 538px;
    }
`,Pa=Y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h2 {
        font-weight: 500;
        line-height: var(line-height);

        font-size: 24px;

        color: var(--text);
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;

        h2 {
            font-size: 26px;
            line-height: 1.2;
        }
    }
`,Ta=Y.div`
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: var(font-size);
    font-weight: 400;
    line-height: var(line-height);

    color: var(--text-blue);
`,Ca=Y.span`
min-width: 118px;
    text-align: center;
`,_t=Y.button`
    border: none;
    padding: 0;

    color: inherit;
    background-color: transparent;

    &:hover {
        color: #7FAAFD; // todo
    }
`,Bt=Y.div`
    svg {
        color: ${e=>e.isCurrentMonth?"transparent":"inherit"};
        width: 14px;
        height: 14px;
    }
`,Da=Y.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 50px);
    justify-content: space-between;
    align-items: center;
    gap: 26px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: ${e=>e.lastDayNumber===31?"repeat(4, 50px)":"repeat(3, 50px)"};
        gap: 20px;
    }
    @media screen and (min-width: 1440px) {
        gap: 20px;
    }
`,Fa=Y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 32px;
    height: 52px;

    font-weight: var(font-weight);

    color: #7FAAFD;
`,Oa=Y.button`
    width: 32px;
    height: 32px;
    padding: 7px 6px;
    border: 1px solid ${({percentage:e})=>e===100?"var(--background)":"var(--orange-color)"};
    border-radius: 20px;
    font-size: 14px;
    line-height: 1.28;

    color: var(--text);
    background: ${({isToday:e})=>e?"#7FAAFD":"var(--background)"}; // todo

    @media screen and (min-width: 768px) {
        width: 34px;
        height: 34px;
        padding: 7px;

        font-size: vat(font-size);
        line-height: var(line-height);
    }

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`,Ra=Y.p`
    font-size: 10px;
    line-height: 1.6;

    color: var(--text-passowrd);

    @media screen and (min-width: 768px) {
        font-size: 13px;
        line-height: 1.5;
    }

    @media screen and (min-width: 1440px) {
        font-size: 12px;
    }
`,Wa=()=>{const e=xe(),[t,n]=p.useState(new Date),[r,o]=p.useState(!0),[a,s]=p.useState(null),[c,l]=p.useState(null),{monthStats:u,waterRecords:h}=Le(),m=!!a,f=di("(min-width:768px)"),b=Ze(t),g=Ue(t),y=oo({start:b,end:g}),S=g.getDate(),E=p.useMemo(()=>y.map(w=>{const D=ke(w,"yyyy-MM-dd");return{day:ii(w),isToday:ai(w),fullDate:D}}),[y]),C=()=>{n(w=>Ze(kt(w,-1)))},x=()=>{n(w=>{const D=kt(w,1);return Ue(D)})},v=w=>{const D=w.target.value,k=R(u,D);l(k),s(w.currentTarget)},M=()=>{s(null)};p.useEffect(()=>{const w=new Date,D=Ze(w),k=Ue(w);o(si(t,{start:D,end:k}))},[t]),p.useEffect(()=>{e(Dn(ke(t,"yyyy-MM-dd")))},[e,t]);const R=(w,D)=>{const[k]=w.filter(O=>O.date===D);if(k){const O=(k.percentage/10).toFixed(1)*10>100?100:(k.percentage/10).toFixed(1)*10;return{data:t,dailyNorma:O===0?1.5:k.dailyNorma/1e3,percentage:ke(t,"yyyy-MM-dd")===D?h.percentageOfWaterConsumption:O,totalRecords:k.totalRecords}}else return{data:t,dailyNorma:1.5,percentage:0,totalRecords:0}};return i.jsxs(Sa,{children:[i.jsxs(Pa,{children:[i.jsx("h2",{children:"Month"}),i.jsxs(Ta,{children:[i.jsx(_t,{onClick:C,children:i.jsx(Bt,{children:i.jsx(xn,{})})}),i.jsx(Ca,{children:ke(t,"MMMM yyyy")}),i.jsx(_t,{onClick:x,disabled:r,children:i.jsx(Bt,{isCurrentMonth:r,children:i.jsx(fn,{})})})]})]}),i.jsx(Da,{lastDayNumber:S,children:E.map(w=>{const D=R(u,w.fullDate);return i.jsxs(Fa,{children:[i.jsx(Oa,{percentage:D.percentage,isToday:w.isToday,"aria-owns":m?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:v,onMouseLeave:M,value:w.fullDate,children:w.day}),i.jsxs(Ra,{children:[D.percentage,"%"]})]},w.day)})}),i.jsx(ma,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:m,anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:f?"left":"center"},onClose:M,disableRestoreFocus:!0,children:i.jsx(Ma,{dayInfo:c})})]})};d.div`
  background-color: #ecf2ff;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  margin-top: 40px;
  width: 280px;
  height: 836px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 14px 0px #407bff4d;

  @media (min-width: 768px) {
    width: 1000px;
    height: 688px;
  }
  @media (min-width: 1440px) {
    width: 1000px;
    height: 688px;
    position: absolute;
    top: 80px;
    left: 32px;
  }
`;const Na=d.div`
  width: 264px;
  height: 258px;
  margin: 0 auto;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 656px;
    height: 260px;
  }
  @media (min-width: 1440px) {
    width: 544px;
    height: 260px;
    position: relative;
  }
`,_a=d.p`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  margin: 0;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Ba=d.div`
  width: 264px;
  position: relative;
  margin-bottom: 12px;

  max-height: 180px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 4px;
    height: 170px;
  }
  ::-webkit-scrollbar-track {
    background: #d7e3ff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
    border-radius: 8px;
  }
  scrollbar-width: thin;
  scrollbar-color: #9ebbff #d7e3ff;

  @media (min-width: 768px) {
    max-height: 176px;
    width: 656px;
    }
    @media (min-width: 1440px){
        width: 544px;
    }
`,Aa=d.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`,La=d.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
border-bottom:1px #d7e3ff solid;
  padding-right: 4px;
  line-height: 26px;
//   width: 254px;
  height:48px;
  gap: 38px;

   
  
  @media (min-width: 768px) {
    line-height: 36px;
    gap: 390px;
    width: 646px;
  }
  @media (min-width: 1158px) {
    gap: 278px;
    // width: 534px;
  }
`,Ia=d.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,mn=d.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding-top: 1px;
  padding-bottom: 1px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`,$a=d.div`
  display: flex;
  gap: 18px;
  align-items: center;
  `,za=d.div`
  display: flex;
  width: 26px;
  height: 26px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
  //
`,Ha=d.button`

  display: flex;
  align-items: center;
  width: 16px;
  height: 19px;
  margin: 0;
  padding: 0;
  color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  justify-content: center;
&:hover{
    border-bottom:1px #9EBBFF solid;
}
  &:active {
    cursor: pointer;
  }
`,Ya=d.button`

  display: flex;
  align-items: center;
  width: 16px;
  height: 19px;
  margin: 0;
  padding: 0;
  color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  justify-content: center;
&:hover{
    border-bottom:1px #EF5050 solid;
}
  &:active {
    cursor: pointer;
  }
`,qa=d.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #407bff;
`,Va=d.time`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #2f2f2f;
`,Ua=d.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 97px;
  height: 20px;
  margin: 0;
  justify-content: space-between;
  padding: 0;
  color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
stroke:#407BFF;
color:#407BFF;
  &:hover {
   color:#FF9D43;
   stroke:#FF9D43;
 cursor: pointer;
  }

  &:active {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    height: 24px;
    width: 114px;
  }
`,Za=d.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{stroke:#FF9D43;}
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Ga=d.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: current-color;
  &:hover{color:#FF9D43;}
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,Qa=e=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none",...e,children:i.jsx("path",{stroke:"#9EBBFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M10.241 1.991 11.366.866a1.25 1.25 0 0 1 1.768 1.768l-7.08 7.08a3 3 0 0 1-1.264.753L3 11l.533-1.79a3 3 0 0 1 .754-1.265l5.954-5.954Zm0 0L12 3.75m-1 4.583V11.5A1.5 1.5 0 0 1 9.5 13h-7A1.5 1.5 0 0 1 1 11.5v-7A1.5 1.5 0 0 1 2.5 3h3.167"})}),Xa=e=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:14,fill:"none",...e,children:i.jsx("path",{stroke:"#EF5050",strokeLinecap:"round",strokeLinejoin:"round",d:"m7.827 5-.231 6m-3.192 0-.23-6m6.645-2.14c.228.035.454.071.681.11m-.681-.11-.712 9.255A1.5 1.5 0 0 1 8.61 13.5H3.389a1.5 1.5 0 0 1-1.496-1.385L1.181 2.86m9.638 0A32.071 32.071 0 0 0 8.5 2.595m-7.319.265c-.228.034-.454.07-.681.11m.681-.11c.77-.116 1.543-.205 2.319-.265m5 0v-.61c0-.787-.607-1.443-1.393-1.468a34.642 34.642 0 0 0-2.214 0C4.107.542 3.5 1.2 3.5 1.985v.61m5 0a32.446 32.446 0 0 0-5 0"})}),Ka=e=>i.jsx(Ha,{type:"button",children:e.children}),gn=e=>i.jsx(za,{children:e.children}),Ja=e=>i.jsx(Ya,{type:"button",children:e.children}),es=e=>i.jsxs("svg",{width:17,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[i.jsx("path",{d:"m.522.26 1.544 21.42v.06h13.298L16.91.327V.26H.522ZM14.818 21.14H2.617L1.458 5.095h.637l1.048 14.14c.006.074.04.143.093.194.054.051.125.08.198.08h.025a.287.287 0 0 0 .2-.1.296.296 0 0 0 .071-.216L2.683 5.095h13.293l-1.158 16.044Zm1.2-16.644H2.637l-.23-3.126a.306.306 0 0 0-.1-.198.297.297 0 0 0-.205-.077.299.299 0 0 0-.2.105.307.307 0 0 0-.07.216l.23 3.084h-.646L1.154.857H16.28l-.263 3.638Z",fill:"#407BFF"}),i.jsx("path",{d:"M5.23 8.062a.96.96 0 0 0 .538-.166.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.213.973.973 0 0 0-.436.362.994.994 0 0 0 .121 1.242.963.963 0 0 0 .686.288Zm0-1.371a.378.378 0 0 1 .352.24.393.393 0 0 1-.082.422.38.38 0 0 1-.653-.274.39.39 0 0 1 .112-.274.38.38 0 0 1 .27-.114ZM5.225 11.258a.993.993 0 0 0 .17.544.957.957 0 0 0 1.491.134.988.988 0 0 0 .202-1.072.98.98 0 0 0-.359-.439.96.96 0 0 0-1.434.454.996.996 0 0 0-.07.38Zm1.348 0a.392.392 0 0 1-.236.358.377.377 0 0 1-.416-.084.39.39 0 0 1 .27-.661.38.38 0 0 1 .27.113.39.39 0 0 1 .112.274ZM12.115 11.283a.96.96 0 0 0 .538-.165.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.214.972.972 0 0 0-.435.363.993.993 0 0 0 .12 1.241.962.962 0 0 0 .686.288Zm0-1.367a.379.379 0 0 1 .353.24.393.393 0 0 1-.085.424.38.38 0 0 1-.65-.28.39.39 0 0 1 .113-.272.38.38 0 0 1 .269-.112ZM8.738 9.429a.96.96 0 0 0 .538-.166.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.213.973.973 0 0 0-.435.362.994.994 0 0 0 .12 1.242.963.963 0 0 0 .686.288Zm0-1.371a.378.378 0 0 1 .353.24.393.393 0 0 1-.083.421.38.38 0 0 1-.652-.274.393.393 0 0 1 .23-.377c.048-.02.1-.031.152-.03v.02ZM6.89 15.005a.82.82 0 0 0 .144.445.803.803 0 0 0 .825.328.797.797 0 0 0 .405-.227.816.816 0 0 0 .164-.883.811.811 0 0 0-.295-.361.793.793 0 0 0-.443-.136.816.816 0 0 0-.568.252.84.84 0 0 0-.233.582Zm.8-.217a.212.212 0 0 1 .198.134.22.22 0 0 1-.047.236.213.213 0 0 1-.233.047.215.215 0 0 1-.131-.2c0-.058.022-.113.062-.154a.212.212 0 0 1 .151-.063ZM10.763 14.1a.814.814 0 0 0 .781-.498.844.844 0 0 0-.168-.92.818.818 0 0 0-.906-.181.825.825 0 0 0-.369.315.842.842 0 0 0 .107 1.038c.147.15.346.24.555.247Zm0-1.029c.057 0 .111.023.151.064a.218.218 0 0 1 0 .306.212.212 0 0 1-.303 0 .222.222 0 0 1-.065-.153.22.22 0 0 1 .064-.155.214.214 0 0 1 .153-.062ZM12.456 7.374a.813.813 0 0 0 .456-.14.845.845 0 0 0 .124-1.282.818.818 0 0 0-.895-.181.825.825 0 0 0-.368.307.842.842 0 0 0 .102 1.052.816.816 0 0 0 .58.244Zm0-1.029a.21.21 0 0 1 .187.035.215.215 0 0 1 .085.173.218.218 0 0 1-.085.173.212.212 0 0 1-.187.036.21.21 0 0 1-.25-.112.218.218 0 0 1 .152-.31.21.21 0 0 1 .098.005ZM4.424 20.093a.297.297 0 0 0-.17.3c.003.04.015.08.035.117a.304.304 0 0 0 .263.162.275.275 0 0 0 .131-.029 8.86 8.86 0 0 1 4.055-1c1.492.022 2.964.358 4.322.988a.292.292 0 0 0 .336-.044.301.301 0 0 0 .074-.336.307.307 0 0 0-.156-.166 11.207 11.207 0 0 0-4.576-1.042 9.43 9.43 0 0 0-4.314 1.05Z",fill:"#407BFF"})]}),ts=e=>i.jsxs("svg",{width:23,height:30,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[i.jsx("path",{d:"M.261.13 2.4 29.79v.08h18.412L22.951.224V.13H.26ZM20.056 29.04H3.162L1.558 6.824h.882l1.45 19.578c.009.103.055.199.13.27.074.07.172.11.274.11h.034a.401.401 0 0 0 .356-.279.415.415 0 0 0 .02-.159L3.252 6.824H21.66l-1.604 22.215Zm1.66-23.046H3.19l-.318-4.328a.423.423 0 0 0-.137-.274.412.412 0 0 0-.284-.107.413.413 0 0 0-.276.146.425.425 0 0 0-.1.299l.319 4.27h-.893L1.137.956h20.944l-.364 5.037Z",fill:"#407BFF"}),i.jsx("path",{d:"M6.78 10.932c.265 0 .525-.08.745-.23.221-.149.393-.362.495-.61a1.38 1.38 0 0 0-.291-1.485 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.502 1.376 1.376 0 0 0 .167 1.72c.252.255.594.398.95.398Zm0-1.898a.524.524 0 0 1 .488.331.544.544 0 0 1-.114.585.527.527 0 0 1-.903-.38.54.54 0 0 1 .155-.38c.099-.1.233-.156.374-.156ZM6.774 15.358c.003.269.085.53.235.752.15.222.36.394.607.494a1.325 1.325 0 0 0 1.457-.309 1.38 1.38 0 0 0 .28-1.484 1.358 1.358 0 0 0-.497-.607 1.33 1.33 0 0 0-1.697.182 1.363 1.363 0 0 0-.385.972Zm1.865 0a.542.542 0 0 1-.326.495.522.522 0 0 1-.577-.116.539.539 0 0 1 .375-.916c.14 0 .274.057.374.157.099.1.155.237.155.38ZM16.313 15.392c.265 0 .525-.08.746-.23.22-.149.392-.361.494-.61a1.38 1.38 0 0 0-.29-1.484 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.251.255.593.398.949.398Zm0-1.892a.524.524 0 0 1 .49.332.543.543 0 0 1-.118.586.527.527 0 0 1-.901-.387.54.54 0 0 1 .157-.376.525.525 0 0 1 .372-.155ZM11.637 12.825c.266 0 .525-.08.746-.23.22-.15.393-.362.495-.611a1.38 1.38 0 0 0-.292-1.484 1.326 1.326 0 0 0-1.463-.295 1.346 1.346 0 0 0-.602.501 1.376 1.376 0 0 0 .167 1.72c.252.255.593.399.95.399Zm0-1.899a.524.524 0 0 1 .489.332.543.543 0 0 1-.115.584.527.527 0 0 1-.576.117.53.53 0 0 1-.327-.496.546.546 0 0 1 .145-.398.528.528 0 0 1 .384-.168v.03ZM9.078 20.545c.005.221.075.436.2.617s.3.321.504.402a1.093 1.093 0 0 0 1.199-.262 1.13 1.13 0 0 0 .228-1.223 1.122 1.122 0 0 0-.409-.5 1.097 1.097 0 0 0-.613-.188 1.13 1.13 0 0 0-.786.348 1.163 1.163 0 0 0-.323.806Zm1.109-.3a.293.293 0 0 1 .273.185.304.304 0 0 1-.064.327.295.295 0 0 1-.322.065.297.297 0 0 1-.183-.277c0-.08.031-.156.087-.212a.294.294 0 0 1 .209-.088ZM14.441 19.293c.228.008.453-.054.646-.177s.345-.302.436-.514a1.17 1.17 0 0 0-.234-1.274 1.132 1.132 0 0 0-1.254-.25c-.21.09-.387.242-.51.437a1.166 1.166 0 0 0 .147 1.436c.204.21.48.332.77.342Zm0-1.425c.079 0 .154.031.21.088a.303.303 0 0 1 0 .424.294.294 0 0 1-.42 0 .308.308 0 0 1-.091-.212.305.305 0 0 1 .089-.215.294.294 0 0 1 .212-.085ZM16.785 9.98c.225 0 .445-.068.632-.194a1.15 1.15 0 0 0 .42-.518 1.17 1.17 0 0 0-.247-1.258 1.133 1.133 0 0 0-1.24-.25 1.142 1.142 0 0 0-.51.425 1.166 1.166 0 0 0 .14 1.457c.214.216.503.338.805.338Zm0-1.425a.292.292 0 0 1 .346.154.304.304 0 0 1-.087.374.294.294 0 0 1-.259.049.292.292 0 0 1-.346-.155.304.304 0 0 1 .087-.373.294.294 0 0 1 .26-.05ZM5.665 27.59a.41.41 0 0 0-.218.247.421.421 0 0 0 .03.33.419.419 0 0 0 .364.225.382.382 0 0 0 .182-.04 12.27 12.27 0 0 1 5.614-1.385c2.067.03 4.104.496 5.984 1.368a.405.405 0 0 0 .465-.061.416.416 0 0 0 .104-.464.425.425 0 0 0-.216-.231 15.518 15.518 0 0 0-6.337-1.443c-2.076.002-4.122.5-5.972 1.454Z",fill:"#407BFF"})]}),ns=e=>i.jsx("svg",{width:10,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:i.jsx("path",{d:"M5 1v8m4-4H1",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),rs=d.div`
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
`,os=d.div`
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
  @media (min-width: 1440px){
    width: 592px;
}
`,bn=d.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,is=d.div`
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
  
`,as=d.div`
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
`,ss=d.p`
font-size: 18px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#407BFF;
`,cs=d.p`

font-size: 12px;
font-weight: 400;
line-height: 24px;
text-align: left;

`;d.div`
display:flex;
gap:12px;
align-items:center;
padding-top:1px;
padding-bottom:1px;
@media (min-width: 768px){
   gap:16px;
    }`;const ls=d.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-bottom:16px;
`,et=d.p`
font-size: 16px;
font-weight: 400;
line-height: 20px;
text-align: left;
margin-bottom:12px;
`,ds=d.div`
display:flex;
flex-direction:column;
gap:24px;
align-items: center;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
  }
`,us=d.button`
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
  
`,ps=d.div`
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
   
`,wn=d.p`
font-family: Roboto;
font-size: 26px;
font-weight: 500;
line-height: 32px;
text-align: left;

`,hs=d.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-top:24px;
`,fs=d.div`
display:flex;
flex-direction:column;
gap:24px;
margin-top:24px;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
    }  
    @media (min-width: 1158px){
    
    }`,xs=d.button`
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
`,ms=d.button`
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
`,gs=d.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#FFFFFF;

`,bs=d.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#407BFF;

`,ws=({isOpen:e,onClose:t,recordData:n})=>{const{amountWater:r,date:o,_id:a}=n,s=xe(),[c,l]=p.useState(r),[u,h]=p.useState(y()),m=()=>{l(k=>k+50)},f=()=>{c>=50&&l(k=>k-50)},b=()=>{const[k,O]=u.split(":"),$=new Date;$.setUTCHours(k,O);const B=$.toISOString();s(Fn({id:a,amountWater:c,date:B})),s(Pe(!0)),t(),h(y())},g=k=>{const O=parseInt(k.target.value);l(O)};function y(){const k=new Date(o),O=k.getUTCHours().toString().padStart(2,"0"),$=k.getUTCMinutes().toString().padStart(2,"0");return`${O}:${$}`}if(p.useEffect(()=>{const k=O=>{O.key==="Escape"&&t()};return e&&document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)}},[e,t]),e===!1)return null;const C=n.date.toLocaleString(),x=new Date(C),v=x.getUTCHours(),M=x.getUTCMinutes(),R=M<10?"0"+M:M,w=v<10?"0"+v:v,D=v>=12?"PM":"AM";return i.jsx(rs,{children:i.jsxs(os,{children:[i.jsxs(bn,{children:[i.jsx(wn,{children:"Edit the entered amount of water"}),i.jsx(at,{onClick:t,children:i.jsx(it,{})})]}),i.jsxs(is,{children:[i.jsxs(as,{children:[i.jsx(gn,{children:i.jsx(ts,{})}),i.jsxs(mn,{children:[i.jsxs(ss,{children:[r," ml"]}),i.jsxs(cs,{children:[w,":",R," ",D]})]})]}),i.jsxs("div",{children:[i.jsx(ls,{children:"Correct entered data:"}),i.jsx(et,{children:"Amount of water:"}),i.jsxs(Vt,{children:[i.jsx(Ut,{onClick:f,children:i.jsx(Yt,{})}),i.jsx(Gt,{children:i.jsxs(Qt,{children:[c," ml"]})}),i.jsx(Zt,{onClick:m,children:i.jsx(qt,{})})]})]}),i.jsxs("div",{children:[i.jsx(et,{children:"Recording time:"}),i.jsx(Xt,{type:"time",step:300,value:u,onChange:k=>h(k.target.value)})]}),i.jsxs("div",{children:[i.jsx(et,{children:"Enter the value of the water used:"}),i.jsx(Kt,{type:"number",value:c,onChange:g})]}),i.jsxs(ds,{children:[i.jsxs(Jt,{children:[c," ml"]}),i.jsx(us,{onClick:b,children:"Save"})]})]})]})})},ys=({isOpen:e,onClose:t,recordData:n})=>{const r=xe();if(p.useEffect(()=>{const a=s=>{s.key==="Escape"&&t()};return e&&document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[e,t]),e===!1)return null;const o=()=>{const a=n._id;r(On(a)),r(Pe(!0)),t()};return i.jsx("div",{children:i.jsxs(ps,{children:[i.jsxs(bn,{children:[i.jsx(wn,{children:"Delete entry"}),i.jsx(at,{onClick:t,children:i.jsx(it,{})})]}),i.jsx(hs,{children:"Are you sure you want to delete the entry?"}),i.jsxs(fs,{children:[i.jsx(xs,{children:i.jsx(gs,{onClick:o,children:"Delete"})}),i.jsx(ms,{onClick:t,children:i.jsx(bs,{children:"Cancel"})})]})]})})},vs=()=>{const[e,t]=p.useState(!1),[n,r]=p.useState(!1),[o,a]=p.useState(!1),[s,c]=p.useState(null),{waterRecords:l}=Le().waterRecords,u=()=>{t(!0)},h=()=>{t(!1)},m=E=>{c(E),r(!0)},f=()=>{r(!1)},b=E=>{a(!0),c(E)},g=()=>{a(!1)},y=()=>{if(!(!l||l.length===0))return l.map(E=>{const v=E.date.toLocaleString(),M=new Date(v),R=M.getUTCHours(),w=M.getUTCMinutes(),D=w<10?"0"+w:w,k=R<10?"0"+R:R;return i.jsxs(La,{children:[i.jsxs(Ia,{children:[i.jsx(gn,{children:i.jsx(es,{})}),i.jsxs(mn,{children:[i.jsxs(qa,{children:[E.amountWater," ml"]}),i.jsxs(Va,{children:[k,":",D]})]})]}),i.jsxs($a,{children:[i.jsx(Ka,{children:i.jsx(Qa,{onClick:()=>m(E)})}),i.jsx(Ja,{children:i.jsx(Xa,{onClick:()=>b(E)})})]})]},E._id)})},S=()=>i.jsx(Ba,{children:i.jsx(Aa,{children:i.jsx(y,{})})});return i.jsxs("div",{children:[e&&i.jsx(Ht,{onClick:h}),i.jsxs(Na,{children:[i.jsx(_a,{children:"Today"}),i.jsx(S,{}),i.jsxs(Ua,{onClick:u,children:[i.jsx(Za,{children:i.jsx(ns,{})}),i.jsx(Ga,{children:"Add water"})]})]}),n&&i.jsx(ws,{isOpen:n,onClose:f,recordData:s}),i.jsx(en,{isOpen:e,onClose:h}),o&&i.jsx(ys,{isOpen:o,onClose:g,recordData:s})]})},ks="https://bekhuriy.github.io/WaterTracker/assets/Bubbles_bg_main_desk-ffd148af.svg",Es="https://bekhuriy.github.io/WaterTracker/assets/Bubbles_bg_home_tablet-f54d97ba.svg",js="https://bekhuriy.github.io/WaterTracker/assets/Bubbles_bg_home_mob-0163f2d5.svg",Ms=d.div`
  // position: relative;
  background-position: center 28px;
  background-image: url(${js});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${Es});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${ks});
    background-size: 100%;
    background-size: contain;
    background-repeat: repeat;
  }
`,Ss=d.section`
  // // padding: 24px 20px 40px;
  // background-position: center center;
  // // додати сюди зображення
  // background-size: contain;
  // background-repeat: no-repeat;
  // width: 100%;
  // width: 1216px;

`,Ps=d.div`
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
  padding: 20px 112px 40px;
  gap: 32px;
  min-width: 1216px;



  // height: 92vh;
`,Ts=d.div`
  gap: 16px;
  
  @media screen and (min-width: 768px) {
    // padding: 0 24px;
    width: 704px;
    // width: 100%;
    // height: 688px;
    overflow: hidden;
    
  }
`,Cs=d.div`
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
    // margin: auto;
    min-width: 592px;
    height: 680px;
    padding: 32px 24px;
    align-items: center;
  }
`,Rs=()=>{const e=xe(),t=Le().forceRender;return p.useEffect(()=>{e(Rn()),e(Wn()),t&&e(Pe(!1))},[t,e]),i.jsx(Ms,{children:i.jsx(Ss,{children:i.jsxs(Ps,{children:[i.jsxs(Ts,{children:[i.jsx(Gr,{}),i.jsx(sr,{})]}),i.jsxs(Cs,{children:[i.jsx(vs,{}),i.jsx(Wa,{})]})]})})})};export{Rs as default};
