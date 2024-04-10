import{s as u,j as i,a as xe,r as p,b as vn,f as Pe,c as He,d as Lt,M as It,e as $t,g as kn,h as En,i as jn,k as tt,R as Mn,l as Sn,m as Pn,T as Tn,n as ve,o as De,_ as G,p as Ne,q as _e,t as me,v as M,w as xt,x as Be,y as te,z as Ae,A as ae,B as K,C as mt,D as Me,E as gt,F as bt,G as Cn,H as Dn,I as zt,J as Ht,K as q,L as Fn,N as On,O as Rn,P as Wn,Q as Nn}from"./index-3f6632f2.js";import{c as _n,a as Bn,b as Ye,u as An}from"./index.esm-f4de00ef.js";import{Q as Ln,B as qe}from"./react-toastify.esm-39a53b1d.js";function In(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const $n=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`,zn=u.div`
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
`,Hn=u.div`
  position: relative;
  height: 80px;
  display: flex;
  flex-direction: column;
`,Yn=u.p`
  color: #407bff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
`,qn=u.input`
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
`,Vn=u.span`
  height: 32px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`,Un=u.span`
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
`,Zn=u.span`
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
`,Gn=u.span`
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
`,Qn=u.button`
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
    background: rgba(64, 123, 255, 0.8);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    cursor: pointer;
  }

  &:active {
    background: #407bff;
    cursor: pointer;
  }
`,Xn=({width:e=24,height:t=24,color:n="#f8f6f6",...r})=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),i.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),Yt=()=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}),qt=()=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),it=()=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{border:"none",backgroundColor:"transparent"},children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Kn=u.div`
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
`,Jn=u.div`
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
`,at=u.button`
  border-left-style: none;
  border-block-style: none;
  border-right: none;
  background-color: transparent;
`,er=u.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`,tr=u.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: rgb(47, 47, 47);
  margin-bottom: 12px;
`,Vt=u.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`,Ut=u.button`
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
`,Zt=u.button`
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
`,Gt=u.div`
  border-radius: 40px;
  background: rgb(215, 227, 255);
  padding-left: 10px;
  padding-right: 16px;
  margin-left: 10px;
  margin-right: 10px;
`,Qt=u.p`
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
`,nr=u.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: rgb(47, 47, 47);
  margin-bottom: 12px;
`,Xt=u.input`
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
`,rr=u.p`
  margin-bottom: 16px;
  color: rgb(47, 47, 47);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,Kt=u.input`
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
`,or=u.div`
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
`,Jt=u.span`
  color: rgb(64, 123, 255);
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`,ir=u.button`
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
    background: rgba(64, 123, 255, 0.8);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    cursor: pointer;
  }

  &:active {
    background: #407bff;
    cursor: pointer;
  }
`,en=({isOpen:e,onClose:t,onSave:n})=>{const r=xe(),[o,a]=p.useState(0),[s,c]=p.useState(h()),l=()=>{a(x=>x+50)},d=()=>{o>=50&&a(x=>x-50)},f=()=>{const[x,w]=s.split(":"),j=new Date;j.setUTCHours(x,w);const E=j.toISOString();r(vn({amountWater:o,date:E})),r(Pe(!0)),t(),c(h())},g=x=>{const w=parseInt(x.target.value);a(w)};function h(){const x=new Date,w=x.getHours().toString().padStart(2,"0"),j=x.getMinutes().toString().padStart(2,"0");return`${w}:${j}`}const y=x=>{const w=x.target.value;c(w)};return p.useEffect(()=>{c(h())},[e,t]),p.useEffect(()=>{const x=w=>{w.key==="Escape"&&t()};return e&&document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[e,t]),e?i.jsxs(Kn,{children:[i.jsxs(Jn,{children:[i.jsx("h2",{children:"Add water"}),i.jsx(at,{onClick:t,children:i.jsx(it,{})})]}),i.jsx("div",{children:i.jsxs(er,{children:[i.jsx("h3",{style:{marginBottom:"16px"},children:"Choose a value:"}),i.jsxs("div",{style:{marginBottom:"24px"},children:[i.jsx(tr,{children:"Amount of water:"}),i.jsxs(Vt,{children:[i.jsx(Ut,{onClick:d,children:i.jsx(Yt,{})}),i.jsx(Gt,{children:i.jsxs(Qt,{children:[o," ml"]})}),i.jsx(Zt,{onClick:l,children:i.jsx(qt,{})})]})]}),i.jsxs("div",{style:{marginBottom:"24px"},children:[i.jsx(nr,{children:"Recording time:"}),i.jsx(Xt,{type:"time",step:300,value:s,onChange:y})]}),i.jsxs("div",{style:{marginBottom:"24px"},children:[i.jsx(rr,{children:"Enter the value of the water used:"}),i.jsx(Kt,{type:"number",value:o,onChange:g})]}),i.jsxs(or,{children:[i.jsxs(Jt,{children:[o," ml"]}),i.jsx(ir,{onClick:f,children:"Save"})]})]})})]}):null},ar=e=>e.water.waterRecords,sr=e=>e.water.monthStats,cr=e=>e.water.forceRender,Le=()=>({waterRecords:He(ar),monthStats:He(sr),forceRender:He(cr)}),lr=()=>{const[e,t]=p.useState(!1),[n,r]=p.useState(0),{percentageOfWaterConsumption:o}=Le().waterRecords,a=l=>{r(d=>d+l)},s=()=>{t(!0)},c=()=>{t(!1)};return i.jsxs(zn,{children:[e&&i.jsx($n,{onClick:c}),i.jsxs(Hn,{children:[i.jsx(Yn,{children:"Today"}),i.jsx(qn,{type:"range",min:0,max:100,value:o||0,style:{backgroundSize:`${o}% 100%`},readOnly:!0}),i.jsxs(Vn,{children:[i.jsx(Un,{children:"0%"}),o>1&&o<99&&i.jsxs(Gn,{style:{left:`calc(${o}% + 2px)`},id:"WaterMark",children:[o,"%"]}),i.jsx(Zn,{children:"100%"})]})]}),i.jsxs(Qn,{onClick:s,children:[i.jsx(Xn,{}),"Add Water"]}),e&&i.jsx(en,{isOpen:e,onClose:c,onSave:a})]})},dr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_mob_1x-min-d3b7da82.png",ur="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_mob_2x-min-f515f354.png",pr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_tablet_1x-min-59895b14.png",hr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_tablet_2x-min-58402861.png",fr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_desk_1x-min-3f10a7f5.png",xr="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_desk_2x-min-b133c1b6.png",mr=u.div`
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
`,gr=u.div`
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
`,br=u.p`
  font-size: 18px;
  color: var(--text);
  font-weight: 500;
  line-height: 1.3;
  width: 124px;
`,wr=u.div`
  display: flex;
  gap: 12px;
`,yr=u.p`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-blue);
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,vr=u.button`
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--text-passowrd);

  &:hover {
    color: var(--orange-color);
  }
`,kr=u.div`
  width: 280px;
  height: 208px;
  background-image: url(${dr});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${ur});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    //   position: relative;

    width: 518px;
    height: 386px;
    background-image: url(${pr});
    margin-top: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${hr});
  }

  @media screen and (min-width: 1440px) {
    margin-top: 2px;
    margin-left: -73px;
    width: 738px;
    min-height: 548px;
    background-image: url(${fr});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${xr});
  }
`,Er=e=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M6 18L18 6M6 6L18 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),jr=u.div`
    width: 256px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 656px;
    }

    @media screen and (min-width: 1440px) {
        width: 544px;
    }
`,Mr=u.div`
    margin-bottom: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
`,Sr=u.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`,Pr=u(Er)`
    stroke: var(--text-blue);
    width: 24px;
    height: 24px;

    &:hover{
        stroke: var(--orange-color);
    }
`,Tr=u.div`
    display: flex;
    align-items: center;
    gap: 24px;

    margin-bottom: 12px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: start;
        gap: 16px;
    }
`,wt=u.p`
    font-size: 16px;
    line-height: 1.25;
`,yt=u.span`
    font-size: 18px;
    line-height: 1.33;

    color: var(--text-blue);

    margin-left: 4px;
`,Cr=u.p`
    font-size: 12px;
    line-height: 1.33;

    color: #8f8f8f;
    border-radius: 10px;
    border: 1px solid var(--button-pup-up);

    padding: 10px;
    margin-bottom: 24px;
`,Dr=u.span`
    color: var(--text-blue);
`,Fr=u.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,Or=u.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;

    margin-bottom: 16px;
`,Rr=u.div`
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
`,vt=u.div`
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
`,Wr=u.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Nr=u.b`
    font-size: 18px;
    line-height: 1.33;
    width: 64px;
    color: var(--text-blue);
    display: flex;
    align-items: center;
`,_r=u.div`
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;

    @media screen and (min-width: 768px) {
        button {
            width: 160px;
            height: 44px;
        }
    }
`,Br=u.p`
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
`,Ar=_n({gender:Bn().required("Gender is required"),weight:Ye().required("Weight is required").min(0,"Weight must be a positive number"),activityTime:Ye().required("Activity is required").min(0,"Activity time must be a positive number"),waterAmount:Ye().required("Drank water amount is required").min(0,"Drank water amount must be a positive number")}),Lr=u.label`
    font-size: 18px;
    line-height: 1.33;

    display: flex;
    flex-direction: column;
    gap: 8px;
`,Ir=u.input`
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
`,$r=u.p`
    font-size: 14px;
    line-height: 1.28;
    color: var(--coral-color);
`,Ve=({inputType:e,label:t,error:n,...r})=>{if(e==="dailyNorma")return i.jsxs(Lr,{children:[t,i.jsx(Ir,{...r}),n&&i.jsx($r,{children:n})]})},zr=u.div`
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
`,Hr=u.div(({type:e})=>({borderRadius:"10px",background:"var(--background)",padding:e==="settings"?"32px 12px":"24px 12px"})),Yr=u(Hr)`
    margin-top: 320px;
    margin-bottom: 40px;
    @media screen and (min-width: 768px) {
        padding: 32px 24px;
        margin-top: 160px;
    }
`,qr=document.querySelector("#modal-root"),Vr=({type:e="default",onClose:t,children:n})=>{p.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)})),p.useEffect(()=>(document.body.style.overflowY="hidden",()=>{document.body.style.overflowY="auto"}));const r=o=>{(o.code==="Escape"||o.currentTarget===o.target)&&t()};return Lt.createPortal(i.jsx(zr,{onClick:r,children:i.jsx(Yr,{type:e,children:n})}),qr)},Ur=u.button(({width:e,buttonType:t})=>({width:`${e}px`,color:t==="cancel"?"var(--text-blue)":"var(--background)",backgroundColor:t==="cancel"?"var( --button-pup-up)":t==="delete"?"var(--coral-color)":"var(--text-blue)"})),Zr=u(Ur)`
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
`,Gr=({children:e,...t})=>i.jsx(Zr,{...t,children:e}),Qr=()=>{const e=p.useContext(It),t=$t(),n=xe(),r=()=>{e()},[o,a]=p.useState(0),s=p.useCallback(h=>{const y=h.gender==="female"?.03:.04,x=h.gender==="female"?.4:.6;if(h.weight>=0&&h.activityTime>=0){const w=h.weight*y+h.activityTime*x;a(w.toFixed(1))}else a("Error")},[]),c=h=>{d.handleChange(h)},l=async()=>{let h=d.values.waterAmount*1e3;h>=0&&h<=1e4?(n(kn({waterRate:h})),n(Pe(!0)),qe.success("Daily norma successfully updated")):qe.warning("The amount of water must be a positive number and no more than 10 liters"),d.resetForm(),e()},d=An({initialValues:{gender:t.gender,weight:0,activityTime:0,waterAmount:0},validationSchema:Ar,onSubmit:l}),f=(h,y)=>{y!=="waterAmount"&&(h.target.value="")},g=(h,y)=>{h.target.value>=0?y!=="wateramount"&&d.setFieldValue("waterAmount",o):(d.setFieldValue("waterAmount",0),qe.warning("Negative numbers are not allowed"))};return p.useEffect(()=>{s(d.values)},[s,d.values]),i.jsx(Vr,{onClose:e,children:i.jsx(jr,{children:i.jsxs(i.Fragment,{children:[i.jsxs(Mr,{children:["My daily norma",i.jsx(Sr,{onClick:r,children:i.jsx(Pr,{})})]}),i.jsxs(Tr,{children:[i.jsxs(wt,{children:["For girl:",i.jsx(yt,{children:"V=(M*0,03) + (T*0,4)"})]}),i.jsxs(wt,{children:["For man:",i.jsx(yt,{children:"V=(M*0,04) + (T*0,6)"})]})]}),i.jsxs(Cr,{children:[i.jsx(Dr,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]}),i.jsxs(Fr,{children:[i.jsx(Or,{children:"Calculate your rate:"}),i.jsxs(Rr,{children:[i.jsx(vt,{children:i.jsxs("label",{children:[i.jsx("input",{type:"radio",name:"gender",value:"female",onChange:()=>d.setFieldValue("gender","female"),checked:d.values.gender==="female"}),i.jsx("span",{children:"For women"})]})}),i.jsx(vt,{children:i.jsxs("label",{children:[i.jsx("input",{type:"radio",name:"gender",value:"male",onChange:()=>d.setFieldValue("gender","male"),checked:d.values.gender==="male"}),i.jsx("span",{children:"For men"})]})})]}),i.jsx(Ve,{label:"Your weight in kilograms:",inputType:"dailyNorma",value:d.values.weight,onChange:h=>c(h),onFocus:h=>f(h,"weight"),onBlur:h=>g(h,"weight"),name:"weight",type:"number",min:"0",step:"0.1",error:d.touched.weight&&d.errors.weight}),i.jsx(Ve,{label:`The time of active participation in sports
                        or other activities with a high physical. load in hours:`,inputType:"dailyNorma",value:d.values.activityTime,onChange:h=>c(h),onFocus:h=>f(h,"activityTime"),onBlur:h=>g(h,"activityTime"),name:"activityTime",type:"number",min:"0",max:"10",step:"0.1",error:d.touched.activityTime&&d.errors.activityTime}),i.jsxs(Wr,{children:[i.jsx(i.Fragment,{children:"The required amount of water in liters per day:"}),i.jsx(Nr,{children:isNaN(o)||o<0?i.jsx(Br,{children:"Input data error"}):`${o} L`})]}),i.jsx(Ve,{label:"Write down how much water you will drink:",inputType:"dailyNorma",value:d.values.waterAmount,onChange:h=>c(h),onFocus:h=>f(h,"waterAmount"),name:"waterAmount",type:"number",min:"0",max:"20",step:"0.1",error:d.touched.waterAmount&&d.errors.waterAmount}),i.jsx(_r,{children:i.jsx(Gr,{type:"submit",onClick:l,children:"Save"})}),i.jsx(Ln,{})]})]})})})},Xr=()=>{const{waterRate:e}=$t().user,t=p.useContext(It),n=(e/1e3).toFixed(1),r=()=>{t(i.jsx(Qr,{}))};return i.jsxs(mr,{children:[i.jsxs(gr,{children:[i.jsx(br,{children:"My daily norma"}),i.jsxs(wr,{children:[i.jsx(yr,{children:`${n}`}),i.jsx(vr,{onClick:r,children:"Edit"})]})]}),i.jsx(kr,{})]})};function A(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Q(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function kt(e,t){const n=A(e);if(isNaN(t))return Q(e,NaN);if(!t)return n;const r=n.getDate(),o=Q(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const a=o.getDate();return r>=a?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const tn=6048e5,Kr=864e5;let Jr={};function Ie(){return Jr}function Se(e,t){var c,l,d,f;const n=Ie(),r=(t==null?void 0:t.weekStartsOn)??((l=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((f=(d=n.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??0,o=A(e),a=o.getDay(),s=(a<r?7:0)+a-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function Fe(e){return Se(e,{weekStartsOn:1})}function nn(e){const t=A(e),n=t.getFullYear(),r=Q(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Fe(r),a=Q(e,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const s=Fe(a);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function Oe(e){const t=A(e);return t.setHours(0,0,0,0),t}function Et(e){const t=A(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function eo(e,t){const n=Oe(e),r=Oe(t),o=+n-Et(n),a=+r-Et(r);return Math.round((o-a)/Kr)}function to(e){const t=nn(e),n=Q(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Fe(n)}function no(e){return Q(e,Date.now())}function ro(e,t){const n=Oe(e),r=Oe(t);return+n==+r}function oo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function io(e){if(!oo(e)&&typeof e!="number")return!1;const t=A(e);return!isNaN(Number(t))}function Ue(e){const t=A(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function ao(e,t){const n=A(e.start),r=A(e.end);let o=+n>+r;const a=o?+n:+r,s=o?r:n;s.setHours(0,0,0,0);let c=(t==null?void 0:t.step)??1;if(!c)return[];c<0&&(c=-c,o=!o);const l=[];for(;+s<=a;)l.push(A(s)),s.setDate(s.getDate()+c),s.setHours(0,0,0,0);return o?l.reverse():l}function Ze(e){const t=A(e);return t.setDate(1),t.setHours(0,0,0,0),t}function so(e){const t=A(e),n=Q(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const co={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},lo=(e,t,n)=>{let r;const o=co[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Ge(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const uo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},po={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ho={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},fo={date:Ge({formats:uo,defaultWidth:"full"}),time:Ge({formats:po,defaultWidth:"full"}),dateTime:Ge({formats:ho,defaultWidth:"full"})},xo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},mo=(e,t,n,r)=>xo[e];function we(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,c=n!=null&&n.width?String(n.width):s;o=e.formattingValues[c]||e.formattingValues[s]}else{const s=e.defaultWidth,c=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[c]||e.values[s]}const a=e.argumentCallback?e.argumentCallback(t):t;return o[a]}}const go={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},bo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},wo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},yo={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},vo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ko={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Eo=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},jo={ordinalNumber:Eo,era:we({values:go,defaultWidth:"wide"}),quarter:we({values:bo,defaultWidth:"wide",argumentCallback:e=>e-1}),month:we({values:wo,defaultWidth:"wide"}),day:we({values:yo,defaultWidth:"wide"}),dayPeriod:we({values:vo,defaultWidth:"wide",formattingValues:ko,defaultFormattingWidth:"wide"})};function ye(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;const s=a[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(c)?So(c,g=>g.test(s)):Mo(c,g=>g.test(s));let d;d=e.valueCallback?e.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;const f=t.slice(s.length);return{value:d,rest:f}}}function Mo(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function So(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Po(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],a=t.match(e.parsePattern);if(!a)return null;let s=e.valueCallback?e.valueCallback(a[0]):a[0];s=n.valueCallback?n.valueCallback(s):s;const c=t.slice(o.length);return{value:s,rest:c}}}const To=/^(\d+)(th|st|nd|rd)?/i,Co=/\d+/i,Do={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Fo={any:[/^b/i,/^(a|c)/i]},Oo={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ro={any:[/1/i,/2/i,/3/i,/4/i]},Wo={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},No={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_o={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Bo={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ao={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Lo={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Io={ordinalNumber:Po({matchPattern:To,parsePattern:Co,valueCallback:e=>parseInt(e,10)}),era:ye({matchPatterns:Do,defaultMatchWidth:"wide",parsePatterns:Fo,defaultParseWidth:"any"}),quarter:ye({matchPatterns:Oo,defaultMatchWidth:"wide",parsePatterns:Ro,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ye({matchPatterns:Wo,defaultMatchWidth:"wide",parsePatterns:No,defaultParseWidth:"any"}),day:ye({matchPatterns:_o,defaultMatchWidth:"wide",parsePatterns:Bo,defaultParseWidth:"any"}),dayPeriod:ye({matchPatterns:Ao,defaultMatchWidth:"any",parsePatterns:Lo,defaultParseWidth:"any"})},$o={code:"en-US",formatDistance:lo,formatLong:fo,formatRelative:mo,localize:jo,match:Io,options:{weekStartsOn:0,firstWeekContainsDate:1}};function zo(e){const t=A(e);return eo(t,so(t))+1}function Ho(e){const t=A(e),n=+Fe(t)-+to(t);return Math.round(n/tn)+1}function rn(e,t){var f,g,h,y;const n=A(e),r=n.getFullYear(),o=Ie(),a=(t==null?void 0:t.firstWeekContainsDate)??((g=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??o.firstWeekContainsDate??((y=(h=o.locale)==null?void 0:h.options)==null?void 0:y.firstWeekContainsDate)??1,s=Q(e,0);s.setFullYear(r+1,0,a),s.setHours(0,0,0,0);const c=Se(s,t),l=Q(e,0);l.setFullYear(r,0,a),l.setHours(0,0,0,0);const d=Se(l,t);return n.getTime()>=c.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function Yo(e,t){var c,l,d,f;const n=Ie(),r=(t==null?void 0:t.firstWeekContainsDate)??((l=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(d=n.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1,o=rn(e,t),a=Q(e,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),Se(a,t)}function qo(e,t){const n=A(e),r=+Se(n,t)-+Yo(n,t);return Math.round(r/tn)+1}function W(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const ee={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return W(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):W(n+1,2)},d(e,t){return W(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return W(e.getHours()%12||12,t.length)},H(e,t){return W(e.getHours(),t.length)},m(e,t){return W(e.getMinutes(),t.length)},s(e,t){return W(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return W(o,t.length)}},pe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},jt={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return ee.y(e,t)},Y:function(e,t,n,r){const o=rn(e,r),a=o>0?o:1-o;if(t==="YY"){const s=a%100;return W(s,2)}return t==="Yo"?n.ordinalNumber(a,{unit:"year"}):W(a,t.length)},R:function(e,t){const n=nn(e);return W(n,t.length)},u:function(e,t){const n=e.getFullYear();return W(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ee.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=qo(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):W(o,t.length)},I:function(e,t,n){const r=Ho(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):W(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):ee.d(e,t)},D:function(e,t,n){const r=zo(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return W(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return W(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return W(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=pe.noon:r===0?o=pe.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=pe.evening:r>=12?o=pe.afternoon:r>=4?o=pe.morning:o=pe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return ee.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):ee.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):W(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):W(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ee.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ee.s(e,t)},S:function(e,t){return ee.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return St(r);case"XXXX":case"XX":return re(r);case"XXXXX":case"XXX":default:return re(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return St(r);case"xxxx":case"xx":return re(r);case"xxxxx":case"xxx":default:return re(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Mt(r,":");case"OOOO":default:return"GMT"+re(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Mt(r,":");case"zzzz":default:return"GMT"+re(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return W(r,t.length)},T:function(e,t,n){const r=e.getTime();return W(r,t.length)}};function Mt(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),a=r%60;return a===0?n+String(o):n+String(o)+t+W(a,2)}function St(e,t){return e%60===0?(e>0?"-":"+")+W(Math.abs(e)/60,2):re(e,t)}function re(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=W(Math.trunc(r/60),2),a=W(r%60,2);return n+o+t+a}const Pt=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},on=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Vo=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Pt(e,t);let a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",Pt(r,t)).replace("{{time}}",on(o,t))},Uo={p:on,P:Vo},Zo=/^D+$/,Go=/^Y+$/,Qo=["D","DD","YY","YYYY"];function Xo(e){return Zo.test(e)}function Ko(e){return Go.test(e)}function Jo(e,t,n){const r=ei(e,t,n);if(console.warn(r),Qo.includes(e))throw new RangeError(r)}function ei(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ti=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ni=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ri=/^'([^]*?)'?$/,oi=/''/g,ii=/[a-zA-Z]/;function ke(e,t,n){var f,g,h,y,x,w,j,E;const r=Ie(),o=(n==null?void 0:n.locale)??r.locale??$o,a=(n==null?void 0:n.firstWeekContainsDate)??((g=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((y=(h=r.locale)==null?void 0:h.options)==null?void 0:y.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((w=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:w.weekStartsOn)??r.weekStartsOn??((E=(j=r.locale)==null?void 0:j.options)==null?void 0:E.weekStartsOn)??0,c=A(e);if(!io(c))throw new RangeError("Invalid time value");let l=t.match(ni).map(C=>{const m=C[0];if(m==="p"||m==="P"){const v=Uo[m];return v(C,o.formatLong)}return C}).join("").match(ti).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const m=C[0];if(m==="'")return{isToken:!1,value:ai(C)};if(jt[m])return{isToken:!0,value:C};if(m.match(ii))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:C}});o.localize.preprocessor&&(l=o.localize.preprocessor(c,l));const d={firstWeekContainsDate:a,weekStartsOn:s,locale:o};return l.map(C=>{if(!C.isToken)return C.value;const m=C.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Ko(m)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Xo(m))&&Jo(m,t,String(e));const v=jt[m[0]];return v(c,m,o.localize,d)}).join("")}function ai(e){const t=e.match(ri);return t?t[1].replace(oi,"'"):e}function si(e){return A(e).getDate()}function ci(e){return ro(e,no(e))}function li(e,t){const n=+A(e),[r,o]=[+A(t.start),+A(t.end)].sort((a,s)=>a-s);return n>=r&&n<=o}function di(e,t,n,r,o){const[a,s]=p.useState(()=>o&&n?n(e).matches:r?r(e).matches:t);return tt(()=>{let c=!0;if(!n)return;const l=n(e),d=()=>{c&&s(l.matches)};return d(),l.addListener(d),()=>{c=!1,l.removeListener(d)}},[e,n]),a}const an=Mn["useSyncExternalStore"];function ui(e,t,n,r,o){const a=p.useCallback(()=>t,[t]),s=p.useMemo(()=>{if(o&&n)return()=>n(e).matches;if(r!==null){const{matches:f}=r(e);return()=>f}return a},[a,e,r,o,n]),[c,l]=p.useMemo(()=>{if(n===null)return[a,()=>()=>{}];const f=n(e);return[()=>f.matches,g=>(f.addListener(g),()=>{f.removeListener(g)})]},[a,n,e]);return an(l,c,s)}function pi(e,t={}){const n=En(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:a=r?window.matchMedia:null,ssrMatchMedia:s=null,noSsr:c=!1}=jn({name:"MuiUseMediaQuery",props:t,theme:n});let l=typeof e=="function"?e(n):e;return l=l.replace(/^@media( ?)/m,""),(an!==void 0?ui:di)(l,o,a,s,c)}function sn(){const e=Sn(Pn);return e[Tn]||e}const hi=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Tt=hi;function nt(e,t){return nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},nt(e,t)}function fi(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,nt(e,t)}const Ct={disabled:!1},cn=ve.createContext(null);var xi=function(t){return t.scrollTop},Ee="unmounted",oe="exited",ie="entering",fe="entered",rt="exiting",J=function(e){fi(t,e);function t(r,o){var a;a=e.call(this,r,o)||this;var s=o,c=s&&!s.isMounting?r.enter:r.appear,l;return a.appearStatus=null,r.in?c?(l=oe,a.appearStatus=ie):l=fe:r.unmountOnExit||r.mountOnEnter?l=Ee:l=oe,a.state={status:l},a.nextCallback=null,a}t.getDerivedStateFromProps=function(o,a){var s=o.in;return s&&a.status===Ee?{status:oe}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var a=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==ie&&s!==fe&&(a=ie):(s===ie||s===fe)&&(a=rt)}this.updateStatus(!1,a)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,a,s,c;return a=s=c=o,o!=null&&typeof o!="number"&&(a=o.exit,s=o.enter,c=o.appear!==void 0?o.appear:s),{exit:a,enter:s,appear:c}},n.updateStatus=function(o,a){if(o===void 0&&(o=!1),a!==null)if(this.cancelNextCallback(),a===ie){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:De.findDOMNode(this);s&&xi(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===oe&&this.setState({status:Ee})},n.performEnter=function(o){var a=this,s=this.props.enter,c=this.context?this.context.isMounting:o,l=this.props.nodeRef?[c]:[De.findDOMNode(this),c],d=l[0],f=l[1],g=this.getTimeouts(),h=c?g.appear:g.enter;if(!o&&!s||Ct.disabled){this.safeSetState({status:fe},function(){a.props.onEntered(d)});return}this.props.onEnter(d,f),this.safeSetState({status:ie},function(){a.props.onEntering(d,f),a.onTransitionEnd(h,function(){a.safeSetState({status:fe},function(){a.props.onEntered(d,f)})})})},n.performExit=function(){var o=this,a=this.props.exit,s=this.getTimeouts(),c=this.props.nodeRef?void 0:De.findDOMNode(this);if(!a||Ct.disabled){this.safeSetState({status:oe},function(){o.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:rt},function(){o.props.onExiting(c),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:oe},function(){o.props.onExited(c)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,a){a=this.setNextCallback(a),this.setState(o,a)},n.setNextCallback=function(o){var a=this,s=!0;return this.nextCallback=function(c){s&&(s=!1,a.nextCallback=null,o(c))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,a){this.setNextCallback(a);var s=this.props.nodeRef?this.props.nodeRef.current:De.findDOMNode(this),c=o==null&&!this.props.addEndListener;if(!s||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],d=l[0],f=l[1];this.props.addEndListener(d,f)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Ee)return null;var a=this.props,s=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var c=G(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ve.createElement(cn.Provider,{value:null},typeof s=="function"?s(o,c):ve.cloneElement(ve.Children.only(s),c))},t}(ve.Component);J.contextType=cn;J.propTypes={};function he(){}J.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:he,onEntering:he,onEntered:he,onExit:he,onExiting:he,onExited:he};J.UNMOUNTED=Ee;J.EXITED=oe;J.ENTERING=ie;J.ENTERED=fe;J.EXITING=rt;const ln=J,dn=e=>e.scrollTop;function Re(e,t){var n,r;const{timeout:o,easing:a,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof a=="object"?a[t.mode]:a,delay:s.transitionDelay}}function mi(e){return Ne("MuiPaper",e)}_e("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const gi=["className","component","elevation","square","variant"],bi=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,a={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Ae(a,mi,o)},wi=me("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return M({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&M({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${xt("#fff",Tt(t.elevation))}, ${xt("#fff",Tt(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),yi=p.forwardRef(function(t,n){const r=Be({props:t,name:"MuiPaper"}),{className:o,component:a="div",elevation:s=1,square:c=!1,variant:l="elevation"}=r,d=G(r,gi),f=M({},r,{component:a,elevation:s,square:c,variant:l}),g=bi(f);return i.jsx(wi,M({as:a,ownerState:f,className:te(g.root,o),ref:n},d))}),vi=yi;function un(e){return typeof e=="string"}function ki(e,t,n){return e===void 0||un(e)?t:M({},t,{ownerState:M({},t.ownerState,n)})}function pn(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function Ei(e,t,n){return typeof e=="function"?e(t,n):e}function Dt(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function ji(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:a}=e;if(!t){const y=te(n==null?void 0:n.className,a,o==null?void 0:o.className,r==null?void 0:r.className),x=M({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),w=M({},n,o,r);return y.length>0&&(w.className=y),Object.keys(x).length>0&&(w.style=x),{props:w,internalRef:void 0}}const s=pn(M({},o,r)),c=Dt(r),l=Dt(o),d=t(s),f=te(d==null?void 0:d.className,n==null?void 0:n.className,a,o==null?void 0:o.className,r==null?void 0:r.className),g=M({},d==null?void 0:d.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),h=M({},d,n,l,c);return f.length>0&&(h.className=f),Object.keys(g).length>0&&(h.style=g),{props:h,internalRef:d.ref}}const Mi=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function We(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:a=!1}=e,s=G(e,Mi),c=a?{}:Ei(r,o),{props:l,internalRef:d}=ji(M({},s,{externalSlotProps:c})),f=ae(d,c==null?void 0:c.ref,(t=e.additionalProps)==null?void 0:t.ref);return ki(n,M({},l,{ref:f}),o)}const Si=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Pi(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ti(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Ci(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ti(e))}function Di(e){const t=[],n=[];return Array.from(e.querySelectorAll(Si)).forEach((r,o)=>{const a=Pi(r);a===-1||!Ci(r)||(a===0?t.push(r):n.push({documentOrder:o,tabIndex:a,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Fi(){return!0}function Oi(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:a=Di,isEnabled:s=Fi,open:c}=e,l=p.useRef(!1),d=p.useRef(null),f=p.useRef(null),g=p.useRef(null),h=p.useRef(null),y=p.useRef(!1),x=p.useRef(null),w=ae(t.ref,x),j=p.useRef(null);p.useEffect(()=>{!c||!x.current||(y.current=!n)},[n,c]),p.useEffect(()=>{if(!c||!x.current)return;const m=K(x.current);return x.current.contains(m.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),y.current&&x.current.focus()),()=>{o||(g.current&&g.current.focus&&(l.current=!0,g.current.focus()),g.current=null)}},[c]),p.useEffect(()=>{if(!c||!x.current)return;const m=K(x.current),v=b=>{j.current=b,!(r||!s()||b.key!=="Tab")&&m.activeElement===x.current&&b.shiftKey&&(l.current=!0,f.current&&f.current.focus())},S=()=>{const b=x.current;if(b===null)return;if(!m.hasFocus()||!s()||l.current){l.current=!1;return}if(b.contains(m.activeElement)||r&&m.activeElement!==d.current&&m.activeElement!==f.current)return;if(m.activeElement!==h.current)h.current=null;else if(h.current!==null)return;if(!y.current)return;let D=[];if((m.activeElement===d.current||m.activeElement===f.current)&&(D=a(x.current)),D.length>0){var k,O;const $=!!((k=j.current)!=null&&k.shiftKey&&((O=j.current)==null?void 0:O.key)==="Tab"),B=D[0],z=D[D.length-1];typeof B!="string"&&typeof z!="string"&&($?z.focus():B.focus())}else b.focus()};m.addEventListener("focusin",S),m.addEventListener("keydown",v,!0);const R=setInterval(()=>{m.activeElement&&m.activeElement.tagName==="BODY"&&S()},50);return()=>{clearInterval(R),m.removeEventListener("focusin",S),m.removeEventListener("keydown",v,!0)}},[n,r,o,s,c,a]);const E=m=>{g.current===null&&(g.current=m.relatedTarget),y.current=!0,h.current=m.target;const v=t.props.onFocus;v&&v(m)},C=m=>{g.current===null&&(g.current=m.relatedTarget),y.current=!0};return i.jsxs(p.Fragment,{children:[i.jsx("div",{tabIndex:c?0:-1,onFocus:C,ref:d,"data-testid":"sentinelStart"}),p.cloneElement(t,{ref:w,onFocus:E}),i.jsx("div",{tabIndex:c?0:-1,onFocus:C,ref:f,"data-testid":"sentinelEnd"})]})}function Ri(e){return typeof e=="function"?e():e}const Wi=p.forwardRef(function(t,n){const{children:r,container:o,disablePortal:a=!1}=t,[s,c]=p.useState(null),l=ae(p.isValidElement(r)?r.ref:null,n);if(tt(()=>{a||c(Ri(o)||document.body)},[o,a]),tt(()=>{if(s&&!a)return mt(n,s),()=>{mt(n,null)}},[n,s,a]),a){if(p.isValidElement(r)){const d={ref:l};return p.cloneElement(r,d)}return i.jsx(p.Fragment,{children:r})}return i.jsx(p.Fragment,{children:s&&Lt.createPortal(r,s)})});function Ni(e){const t=K(e);return t.body===e?Me(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function je(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ft(e){return parseInt(Me(e).getComputedStyle(e).paddingRight,10)||0}function _i(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Ot(e,t,n,r,o){const a=[t,n,...r];[].forEach.call(e.children,s=>{const c=a.indexOf(s)===-1,l=!_i(s);c&&l&&je(s,o)})}function Qe(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function Bi(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Ni(r)){const s=In(K(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Ft(r)+s}px`;const c=K(r).querySelectorAll(".mui-fixed");[].forEach.call(c,l=>{n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Ft(l)+s}px`})}let a;if(r.parentNode instanceof DocumentFragment)a=K(r).body;else{const s=r.parentElement,c=Me(r);a=(s==null?void 0:s.nodeName)==="HTML"&&c.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return()=>{n.forEach(({value:a,el:s,property:c})=>{a?s.style.setProperty(c,a):s.style.removeProperty(c)})}}function Ai(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Li{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&je(t.modalRef,!1);const o=Ai(n);Ot(n,t.mount,t.modalRef,o,!0);const a=Qe(this.containers,s=>s.container===n);return a!==-1?(this.containers[a].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Qe(this.containers,a=>a.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=Bi(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Qe(this.containers,s=>s.modals.indexOf(t)!==-1),a=this.containers[o];if(a.modals.splice(a.modals.indexOf(t),1),this.modals.splice(r,1),a.modals.length===0)a.restore&&a.restore(),t.modalRef&&je(t.modalRef,n),Ot(a.container,t.mount,t.modalRef,a.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=a.modals[a.modals.length-1];s.modalRef&&je(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ii(e){return typeof e=="function"?e():e}function $i(e){return e?e.props.hasOwnProperty("in"):!1}const zi=new Li;function Hi(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=zi,closeAfterTransition:a=!1,onTransitionEnter:s,onTransitionExited:c,children:l,onClose:d,open:f,rootRef:g}=e,h=p.useRef({}),y=p.useRef(null),x=p.useRef(null),w=ae(x,g),[j,E]=p.useState(!f),C=$i(l);let m=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(m=!1);const v=()=>K(y.current),S=()=>(h.current.modalRef=x.current,h.current.mount=y.current,h.current),R=()=>{o.mount(S(),{disableScrollLock:r}),x.current&&(x.current.scrollTop=0)},b=gt(()=>{const T=Ii(t)||v().body;o.add(S(),T),x.current&&R()}),D=p.useCallback(()=>o.isTopModal(S()),[o]),k=gt(T=>{y.current=T,T&&(f&&D()?R():x.current&&je(x.current,m))}),O=p.useCallback(()=>{o.remove(S(),m)},[m,o]);p.useEffect(()=>()=>{O()},[O]),p.useEffect(()=>{f?b():(!C||!a)&&O()},[f,O,C,a,b]);const $=T=>F=>{var I;(I=T.onKeyDown)==null||I.call(T,F),!(F.key!=="Escape"||F.which===229||!D())&&(n||(F.stopPropagation(),d&&d(F,"escapeKeyDown")))},B=T=>F=>{var I;(I=T.onClick)==null||I.call(T,F),F.target===F.currentTarget&&d&&d(F,"backdropClick")};return{getRootProps:(T={})=>{const F=pn(e);delete F.onTransitionEnter,delete F.onTransitionExited;const I=M({},F,T);return M({role:"presentation"},I,{onKeyDown:$(I),ref:w})},getBackdropProps:(T={})=>{const F=T;return M({"aria-hidden":!0},F,{onClick:B(F),open:f})},getTransitionProps:()=>{const T=()=>{E(!1),s&&s()},F=()=>{E(!0),c&&c(),a&&O()};return{onEnter:bt(T,l==null?void 0:l.props.onEnter),onExited:bt(F,l==null?void 0:l.props.onExited)}},rootRef:w,portalRef:k,isTopModal:D,exited:j,hasTransition:C}}const Yi=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],qi={entering:{opacity:1},entered:{opacity:1}},Vi=p.forwardRef(function(t,n){const r=sn(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:a,appear:s=!0,children:c,easing:l,in:d,onEnter:f,onEntered:g,onEntering:h,onExit:y,onExited:x,onExiting:w,style:j,timeout:E=o,TransitionComponent:C=ln}=t,m=G(t,Yi),v=p.useRef(null),S=ae(v,c.ref,n),R=_=>P=>{if(_){const T=v.current;P===void 0?_(T):_(T,P)}},b=R(h),D=R((_,P)=>{dn(_);const T=Re({style:j,timeout:E,easing:l},{mode:"enter"});_.style.webkitTransition=r.transitions.create("opacity",T),_.style.transition=r.transitions.create("opacity",T),f&&f(_,P)}),k=R(g),O=R(w),$=R(_=>{const P=Re({style:j,timeout:E,easing:l},{mode:"exit"});_.style.webkitTransition=r.transitions.create("opacity",P),_.style.transition=r.transitions.create("opacity",P),y&&y(_)}),B=R(x),z=_=>{a&&a(v.current,_)};return i.jsx(C,M({appear:s,in:d,nodeRef:v,onEnter:D,onEntered:k,onEntering:b,onExit:$,onExited:B,onExiting:O,addEndListener:z,timeout:E},m,{children:(_,P)=>p.cloneElement(c,M({style:M({opacity:0,visibility:_==="exited"&&!d?"hidden":void 0},qi[_],j,c.props.style),ref:S},P))}))}),Ui=Vi;function Zi(e){return Ne("MuiBackdrop",e)}_e("MuiBackdrop",["root","invisible"]);const Gi=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Qi=e=>{const{classes:t,invisible:n}=e;return Ae({root:["root",n&&"invisible"]},Zi,t)},Xi=me("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>M({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Ki=p.forwardRef(function(t,n){var r,o,a;const s=Be({props:t,name:"MuiBackdrop"}),{children:c,className:l,component:d="div",components:f={},componentsProps:g={},invisible:h=!1,open:y,slotProps:x={},slots:w={},TransitionComponent:j=Ui,transitionDuration:E}=s,C=G(s,Gi),m=M({},s,{component:d,invisible:h}),v=Qi(m),S=(r=x.root)!=null?r:g.root;return i.jsx(j,M({in:y,timeout:E},C,{children:i.jsx(Xi,M({"aria-hidden":!0},S,{as:(o=(a=w.root)!=null?a:f.Root)!=null?o:d,className:te(v.root,l,S==null?void 0:S.className),ownerState:M({},m,S==null?void 0:S.ownerState),classes:v,ref:n,children:c}))}))}),Ji=Ki;function ea(e){return Ne("MuiModal",e)}_e("MuiModal",["root","hidden","backdrop"]);const ta=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],na=e=>{const{open:t,exited:n,classes:r}=e;return Ae({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},ea,r)},ra=me("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>M({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),oa=me(Ji,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ia=p.forwardRef(function(t,n){var r,o,a,s,c,l;const d=Be({name:"MuiModal",props:t}),{BackdropComponent:f=oa,BackdropProps:g,className:h,closeAfterTransition:y=!1,children:x,container:w,component:j,components:E={},componentsProps:C={},disableAutoFocus:m=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:S=!1,disablePortal:R=!1,disableRestoreFocus:b=!1,disableScrollLock:D=!1,hideBackdrop:k=!1,keepMounted:O=!1,onBackdropClick:$,open:B,slotProps:z,slots:_}=d,P=G(d,ta),T=M({},d,{closeAfterTransition:y,disableAutoFocus:m,disableEnforceFocus:v,disableEscapeKeyDown:S,disablePortal:R,disableRestoreFocus:b,disableScrollLock:D,hideBackdrop:k,keepMounted:O}),{getRootProps:F,getBackdropProps:I,getTransitionProps:H,portalRef:Z,isTopModal:Te,exited:V,hasTransition:Ce}=Hi(M({},T,{rootRef:n})),ne=M({},T,{exited:V}),X=na(ne),se={};if(x.props.tabIndex===void 0&&(se.tabIndex="-1"),Ce){const{onEnter:N,onExited:L}=H();se.onEnter=N,se.onExited=L}const ce=(r=(o=_==null?void 0:_.root)!=null?o:E.Root)!=null?r:ra,ge=(a=(s=_==null?void 0:_.backdrop)!=null?s:E.Backdrop)!=null?a:f,be=(c=z==null?void 0:z.root)!=null?c:C.root,le=(l=z==null?void 0:z.backdrop)!=null?l:C.backdrop,$e=We({elementType:ce,externalSlotProps:be,externalForwardedProps:P,getSlotProps:F,additionalProps:{ref:n,as:j},ownerState:ne,className:te(h,be==null?void 0:be.className,X==null?void 0:X.root,!ne.open&&ne.exited&&(X==null?void 0:X.hidden))}),ze=We({elementType:ge,externalSlotProps:le,additionalProps:g,getSlotProps:N=>I(M({},N,{onClick:L=>{$&&$(L),N!=null&&N.onClick&&N.onClick(L)}})),className:te(le==null?void 0:le.className,g==null?void 0:g.className,X==null?void 0:X.backdrop),ownerState:ne});return!O&&!B&&(!Ce||V)?null:i.jsx(Wi,{ref:Z,container:w,disablePortal:R,children:i.jsxs(ce,M({},$e,{children:[!k&&f?i.jsx(ge,M({},ze)):null,i.jsx(Oi,{disableEnforceFocus:v,disableAutoFocus:m,disableRestoreFocus:b,isEnabled:Te,open:B,children:p.cloneElement(x,se)})]}))})}),aa=ia,sa=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ot(e){return`scale(${e}, ${e**2})`}const ca={entering:{opacity:1,transform:ot(1)},entered:{opacity:1,transform:"none"}},Xe=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),hn=p.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:a,easing:s,in:c,onEnter:l,onEntered:d,onEntering:f,onExit:g,onExited:h,onExiting:y,style:x,timeout:w="auto",TransitionComponent:j=ln}=t,E=G(t,sa),C=Cn(),m=p.useRef(),v=sn(),S=p.useRef(null),R=ae(S,a.ref,n),b=P=>T=>{if(P){const F=S.current;T===void 0?P(F):P(F,T)}},D=b(f),k=b((P,T)=>{dn(P);const{duration:F,delay:I,easing:H}=Re({style:x,timeout:w,easing:s},{mode:"enter"});let Z;w==="auto"?(Z=v.transitions.getAutoHeightDuration(P.clientHeight),m.current=Z):Z=F,P.style.transition=[v.transitions.create("opacity",{duration:Z,delay:I}),v.transitions.create("transform",{duration:Xe?Z:Z*.666,delay:I,easing:H})].join(","),l&&l(P,T)}),O=b(d),$=b(y),B=b(P=>{const{duration:T,delay:F,easing:I}=Re({style:x,timeout:w,easing:s},{mode:"exit"});let H;w==="auto"?(H=v.transitions.getAutoHeightDuration(P.clientHeight),m.current=H):H=T,P.style.transition=[v.transitions.create("opacity",{duration:H,delay:F}),v.transitions.create("transform",{duration:Xe?H:H*.666,delay:Xe?F:F||H*.333,easing:I})].join(","),P.style.opacity=0,P.style.transform=ot(.75),g&&g(P)}),z=b(h),_=P=>{w==="auto"&&C.start(m.current||0,P),r&&r(S.current,P)};return i.jsx(j,M({appear:o,in:c,nodeRef:S,onEnter:k,onEntered:O,onEntering:D,onExit:B,onExited:z,onExiting:$,addEndListener:_,timeout:w==="auto"?null:w},E,{children:(P,T)=>p.cloneElement(a,M({style:M({opacity:0,transform:ot(.75),visibility:P==="exited"&&!c?"hidden":void 0},ca[P],x,a.props.style),ref:R},T))}))});hn.muiSupportAuto=!0;const la=hn;function da(e){return Ne("MuiPopover",e)}_e("MuiPopover",["root","paper"]);const ua=["onEntering"],pa=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],ha=["slotProps"];function Rt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Wt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Nt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Ke(e){return typeof e=="function"?e():e}const fa=e=>{const{classes:t}=e;return Ae({root:["root"],paper:["paper"]},da,t)},xa=me(aa,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ma=me(vi,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),ga=p.forwardRef(function(t,n){var r,o,a;const s=Be({props:t,name:"MuiPopover"}),{action:c,anchorEl:l,anchorOrigin:d={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:g="anchorEl",children:h,className:y,container:x,elevation:w=8,marginThreshold:j=16,open:E,PaperProps:C={},slots:m,slotProps:v,transformOrigin:S={vertical:"top",horizontal:"left"},TransitionComponent:R=la,transitionDuration:b="auto",TransitionProps:{onEntering:D}={},disableScrollLock:k=!1}=s,O=G(s.TransitionProps,ua),$=G(s,pa),B=(r=v==null?void 0:v.paper)!=null?r:C,z=p.useRef(),_=ae(z,B.ref),P=M({},s,{anchorOrigin:d,anchorReference:g,elevation:w,marginThreshold:j,externalPaperSlotProps:B,transformOrigin:S,TransitionComponent:R,transitionDuration:b,TransitionProps:O}),T=fa(P),F=p.useCallback(()=>{if(g==="anchorPosition")return f;const N=Ke(l),Y=(N&&N.nodeType===1?N:K(z.current).body).getBoundingClientRect();return{top:Y.top+Rt(Y,d.vertical),left:Y.left+Wt(Y,d.horizontal)}},[l,d.horizontal,d.vertical,f,g]),I=p.useCallback(N=>({vertical:Rt(N,S.vertical),horizontal:Wt(N,S.horizontal)}),[S.horizontal,S.vertical]),H=p.useCallback(N=>{const L={width:N.offsetWidth,height:N.offsetHeight},Y=I(L);if(g==="none")return{top:null,left:null,transformOrigin:Nt(Y)};const lt=F();let de=lt.top-Y.vertical,ue=lt.left-Y.horizontal;const dt=de+L.height,ut=ue+L.width,pt=Me(Ke(l)),ht=pt.innerHeight-j,ft=pt.innerWidth-j;if(j!==null&&de<j){const U=de-j;de-=U,Y.vertical+=U}else if(j!==null&&dt>ht){const U=dt-ht;de-=U,Y.vertical+=U}if(j!==null&&ue<j){const U=ue-j;ue-=U,Y.horizontal+=U}else if(ut>ft){const U=ut-ft;ue-=U,Y.horizontal+=U}return{top:`${Math.round(de)}px`,left:`${Math.round(ue)}px`,transformOrigin:Nt(Y)}},[l,g,F,I,j]),[Z,Te]=p.useState(E),V=p.useCallback(()=>{const N=z.current;if(!N)return;const L=H(N);L.top!==null&&(N.style.top=L.top),L.left!==null&&(N.style.left=L.left),N.style.transformOrigin=L.transformOrigin,Te(!0)},[H]);p.useEffect(()=>(k&&window.addEventListener("scroll",V),()=>window.removeEventListener("scroll",V)),[l,k,V]);const Ce=(N,L)=>{D&&D(N,L),V()},ne=()=>{Te(!1)};p.useEffect(()=>{E&&V()}),p.useImperativeHandle(c,()=>E?{updatePosition:()=>{V()}}:null,[E,V]),p.useEffect(()=>{if(!E)return;const N=Dn(()=>{V()}),L=Me(l);return L.addEventListener("resize",N),()=>{N.clear(),L.removeEventListener("resize",N)}},[l,E,V]);let X=b;b==="auto"&&!R.muiSupportAuto&&(X=void 0);const se=x||(l?K(Ke(l)).body:void 0),ce=(o=m==null?void 0:m.root)!=null?o:xa,ge=(a=m==null?void 0:m.paper)!=null?a:ma,be=We({elementType:ge,externalSlotProps:M({},B,{style:Z?B.style:M({},B.style,{opacity:0})}),additionalProps:{elevation:w,ref:_},ownerState:P,className:te(T.paper,B==null?void 0:B.className)}),le=We({elementType:ce,externalSlotProps:(v==null?void 0:v.root)||{},externalForwardedProps:$,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:se,open:E},ownerState:P,className:te(T.root,y)}),{slotProps:$e}=le,ze=G(le,ha);return i.jsx(ce,M({},ze,!un(ce)&&{slotProps:$e,disableScrollLock:k},{children:i.jsx(R,M({appear:!0,in:E,onEntering:Ce,onExited:ne,timeout:X},O,{children:i.jsx(ge,M({},be,{children:h}))}))}))}),ba=ga;var st={},wa=Ht;Object.defineProperty(st,"__esModule",{value:!0});var fn=st.default=void 0,ya=wa(zt()),va=i;fn=st.default=(0,ya.default)((0,va.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var ct={},ka=Ht;Object.defineProperty(ct,"__esModule",{value:!0});var xn=ct.default=void 0,Ea=ka(zt()),ja=i;xn=ct.default=(0,Ea.default)((0,ja.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const Ma=q.div`
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
`;q.div`
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

`;const Sa=q.p`
    margin: 0; // todo
    color: #407bff; // todo
`,Je=q.p`
    margin: 0;
    color: #2f2f2f;

    span {
        margin-left: 6px;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.33333;
        color: #407bff;
    }
`,Pa=({dayInfo:e})=>{const{data:t,dailyNorma:n,percentage:r,totalRecords:o}=e;return i.jsxs(Ma,{children:[i.jsx(Sa,{children:ke(t,"dd, MMMM")}),i.jsxs(Je,{children:["Daily norma:",i.jsxs("span",{children:[n," L"]})]}),i.jsxs(Je,{children:["Fulfillment of the daily norm:",i.jsxs("span",{children:[r,"%"]})]}),i.jsxs(Je,{children:["How many servings of water:",i.jsx("span",{children:o})]})]})},Ta=q.div`
    width: 264px;
    background-color: var(--background-tracker);

    @media screen and (min-width: 768px) {
        min-width: 656px;
    }

    @media screen and (min-width: 1440px) {
        min-width: 538px;
    }
`,Ca=q.div`
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
`,Da=q.div`
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: var(font-size);
    font-weight: 400;
    line-height: var(line-height);

    color: var(--text-blue);
`,_t=q.button`
    border: none;
    padding: 0;

    color: inherit;
    background-color: transparent;

    &:hover {
        color: #7FAAFD; // todo
    }
`,Bt=q.div`
    svg {
        color: ${e=>e.isCurrentMonth?"transparent":"inherit"};
        width: 14px;
        height: 14px;
    }
`,Fa=q.div`
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
`,Oa=q.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 32px;
    height: 52px;

    font-weight: var(font-weight);

    color: #7FAAFD;
`,Ra=q.button`
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
`,Wa=q.p`
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
`,Na=()=>{const e=xe(),[t,n]=p.useState(new Date),[r,o]=p.useState(!0),[a,s]=p.useState(null),[c,l]=p.useState(null),{monthStats:d,waterRecords:f}=Le(),g=!!a,h=pi("(min-width:768px)"),y=Ze(t),x=Ue(t),w=ao({start:y,end:x}),j=x.getDate(),E=p.useMemo(()=>w.map(b=>{const D=ke(b,"yyyy-MM-dd");return{day:si(b),isToday:ci(b),fullDate:D}}),[w]),C=()=>{n(b=>Ze(kt(b,-1)))},m=()=>{n(b=>{const D=kt(b,1);return Ue(D)})},v=b=>{const D=b.target.value,k=R(d,D);l(k),s(b.currentTarget)},S=()=>{s(null)};p.useEffect(()=>{const b=new Date,D=Ze(b),k=Ue(b);o(li(t,{start:D,end:k}))},[t]),p.useEffect(()=>{e(Fn(ke(t,"yyyy-MM-dd")))},[e,t]);const R=(b,D)=>{const[k]=b.filter(O=>O.date===D);if(k){const O=(k.percentage/10).toFixed(1)*10>100?100:(k.percentage/10).toFixed(1)*10;return{data:t,dailyNorma:O===0?1.5:k.dailyNorma/1e3,percentage:ke(t,"yyyy-MM-dd")===D?f.percentageOfWaterConsumption:O,totalRecords:k.totalRecords}}else return{data:t,dailyNorma:1.5,percentage:0,totalRecords:0}};return i.jsxs(Ta,{children:[i.jsxs(Ca,{children:[i.jsx("h2",{children:"Month"}),i.jsxs(Da,{children:[i.jsx(_t,{onClick:C,children:i.jsx(Bt,{children:i.jsx(xn,{})})}),i.jsx("span",{children:ke(t,"MMMM yyyy")}),i.jsx(_t,{onClick:m,disabled:r,children:i.jsx(Bt,{isCurrentMonth:r,children:i.jsx(fn,{})})})]})]}),i.jsx(Fa,{lastDayNumber:j,children:E.map(b=>{const D=R(d,b.fullDate);return i.jsxs(Oa,{children:[i.jsx(Ra,{percentage:D.percentage,isToday:b.isToday,"aria-owns":g?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:v,onMouseLeave:S,value:b.fullDate,children:b.day}),i.jsxs(Wa,{children:[D.percentage,"%"]})]},b.day)})}),i.jsx(ba,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:g,anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:h?"left":"center"},onClose:S,disableRestoreFocus:!0,children:i.jsx(Pa,{dayInfo:c})})]})};u.div`
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

`;const _a=u.div`
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
`,Ba=u.p`
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
`,Aa=u.div`
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
`,La=u.ul`
list-style:none;
margin:0 auto;
padding:0;
`,Ia=u.li`
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
`,$a=u.div`
display:flex;
gap:12px;
align-items:center;`,mn=u.div`
display:flex;
gap:12px;
align-items:center;
padding-top:1px;
padding-bottom:1px;
@media (min-width: 768px){
   gap:16px;
    }`,za=u.div`
display:flex;
gap:18px;
align-items:center;`,Ha=u.div`

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
// `,Ya=u.button`
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
background-color: transparent`,qa=u.p`
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#407BFF;
`,Va=u.time`
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#2F2F2F;
`,Ua=u.button`
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
`,Za=u.div`
width: 16px;
  height: 16px;
  display:flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px){
    width: 24px;
  height: 24px;

     }
`,Ga=u.span`
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
`,Qa=e=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none",...e,children:i.jsx("path",{stroke:"#9EBBFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M10.241 1.991 11.366.866a1.25 1.25 0 0 1 1.768 1.768l-7.08 7.08a3 3 0 0 1-1.264.753L3 11l.533-1.79a3 3 0 0 1 .754-1.265l5.954-5.954Zm0 0L12 3.75m-1 4.583V11.5A1.5 1.5 0 0 1 9.5 13h-7A1.5 1.5 0 0 1 1 11.5v-7A1.5 1.5 0 0 1 2.5 3h3.167"})}),Xa=e=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:14,fill:"none",...e,children:i.jsx("path",{stroke:"#EF5050",strokeLinecap:"round",strokeLinejoin:"round",d:"m7.827 5-.231 6m-3.192 0-.23-6m6.645-2.14c.228.035.454.071.681.11m-.681-.11-.712 9.255A1.5 1.5 0 0 1 8.61 13.5H3.389a1.5 1.5 0 0 1-1.496-1.385L1.181 2.86m9.638 0A32.071 32.071 0 0 0 8.5 2.595m-7.319.265c-.228.034-.454.07-.681.11m.681-.11c.77-.116 1.543-.205 2.319-.265m5 0v-.61c0-.787-.607-1.443-1.393-1.468a34.642 34.642 0 0 0-2.214 0C4.107.542 3.5 1.2 3.5 1.985v.61m5 0a32.446 32.446 0 0 0-5 0"})}),At=e=>i.jsx(Ya,{type:"button",children:e.children}),gn=e=>i.jsx(Ha,{children:e.children}),Ka=e=>i.jsxs("svg",{width:17,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[i.jsx("path",{d:"m.522.26 1.544 21.42v.06h13.298L16.91.327V.26H.522ZM14.818 21.14H2.617L1.458 5.095h.637l1.048 14.14c.006.074.04.143.093.194.054.051.125.08.198.08h.025a.287.287 0 0 0 .2-.1.296.296 0 0 0 .071-.216L2.683 5.095h13.293l-1.158 16.044Zm1.2-16.644H2.637l-.23-3.126a.306.306 0 0 0-.1-.198.297.297 0 0 0-.205-.077.299.299 0 0 0-.2.105.307.307 0 0 0-.07.216l.23 3.084h-.646L1.154.857H16.28l-.263 3.638Z",fill:"#407BFF"}),i.jsx("path",{d:"M5.23 8.062a.96.96 0 0 0 .538-.166.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.213.973.973 0 0 0-.436.362.994.994 0 0 0 .121 1.242.963.963 0 0 0 .686.288Zm0-1.371a.378.378 0 0 1 .352.24.393.393 0 0 1-.082.422.38.38 0 0 1-.653-.274.39.39 0 0 1 .112-.274.38.38 0 0 1 .27-.114ZM5.225 11.258a.993.993 0 0 0 .17.544.957.957 0 0 0 1.491.134.988.988 0 0 0 .202-1.072.98.98 0 0 0-.359-.439.96.96 0 0 0-1.434.454.996.996 0 0 0-.07.38Zm1.348 0a.392.392 0 0 1-.236.358.377.377 0 0 1-.416-.084.39.39 0 0 1 .27-.661.38.38 0 0 1 .27.113.39.39 0 0 1 .112.274ZM12.115 11.283a.96.96 0 0 0 .538-.165.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.214.972.972 0 0 0-.435.363.993.993 0 0 0 .12 1.241.962.962 0 0 0 .686.288Zm0-1.367a.379.379 0 0 1 .353.24.393.393 0 0 1-.085.424.38.38 0 0 1-.65-.28.39.39 0 0 1 .113-.272.38.38 0 0 1 .269-.112ZM8.738 9.429a.96.96 0 0 0 .538-.166.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.213.973.973 0 0 0-.435.362.994.994 0 0 0 .12 1.242.963.963 0 0 0 .686.288Zm0-1.371a.378.378 0 0 1 .353.24.393.393 0 0 1-.083.421.38.38 0 0 1-.652-.274.393.393 0 0 1 .23-.377c.048-.02.1-.031.152-.03v.02ZM6.89 15.005a.82.82 0 0 0 .144.445.803.803 0 0 0 .825.328.797.797 0 0 0 .405-.227.816.816 0 0 0 .164-.883.811.811 0 0 0-.295-.361.793.793 0 0 0-.443-.136.816.816 0 0 0-.568.252.84.84 0 0 0-.233.582Zm.8-.217a.212.212 0 0 1 .198.134.22.22 0 0 1-.047.236.213.213 0 0 1-.233.047.215.215 0 0 1-.131-.2c0-.058.022-.113.062-.154a.212.212 0 0 1 .151-.063ZM10.763 14.1a.814.814 0 0 0 .781-.498.844.844 0 0 0-.168-.92.818.818 0 0 0-.906-.181.825.825 0 0 0-.369.315.842.842 0 0 0 .107 1.038c.147.15.346.24.555.247Zm0-1.029c.057 0 .111.023.151.064a.218.218 0 0 1 0 .306.212.212 0 0 1-.303 0 .222.222 0 0 1-.065-.153.22.22 0 0 1 .064-.155.214.214 0 0 1 .153-.062ZM12.456 7.374a.813.813 0 0 0 .456-.14.845.845 0 0 0 .124-1.282.818.818 0 0 0-.895-.181.825.825 0 0 0-.368.307.842.842 0 0 0 .102 1.052.816.816 0 0 0 .58.244Zm0-1.029a.21.21 0 0 1 .187.035.215.215 0 0 1 .085.173.218.218 0 0 1-.085.173.212.212 0 0 1-.187.036.21.21 0 0 1-.25-.112.218.218 0 0 1 .152-.31.21.21 0 0 1 .098.005ZM4.424 20.093a.297.297 0 0 0-.17.3c.003.04.015.08.035.117a.304.304 0 0 0 .263.162.275.275 0 0 0 .131-.029 8.86 8.86 0 0 1 4.055-1c1.492.022 2.964.358 4.322.988a.292.292 0 0 0 .336-.044.301.301 0 0 0 .074-.336.307.307 0 0 0-.156-.166 11.207 11.207 0 0 0-4.576-1.042 9.43 9.43 0 0 0-4.314 1.05Z",fill:"#407BFF"})]}),Ja=e=>i.jsxs("svg",{width:23,height:30,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[i.jsx("path",{d:"M.261.13 2.4 29.79v.08h18.412L22.951.224V.13H.26ZM20.056 29.04H3.162L1.558 6.824h.882l1.45 19.578c.009.103.055.199.13.27.074.07.172.11.274.11h.034a.401.401 0 0 0 .356-.279.415.415 0 0 0 .02-.159L3.252 6.824H21.66l-1.604 22.215Zm1.66-23.046H3.19l-.318-4.328a.423.423 0 0 0-.137-.274.412.412 0 0 0-.284-.107.413.413 0 0 0-.276.146.425.425 0 0 0-.1.299l.319 4.27h-.893L1.137.956h20.944l-.364 5.037Z",fill:"#407BFF"}),i.jsx("path",{d:"M6.78 10.932c.265 0 .525-.08.745-.23.221-.149.393-.362.495-.61a1.38 1.38 0 0 0-.291-1.485 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.502 1.376 1.376 0 0 0 .167 1.72c.252.255.594.398.95.398Zm0-1.898a.524.524 0 0 1 .488.331.544.544 0 0 1-.114.585.527.527 0 0 1-.903-.38.54.54 0 0 1 .155-.38c.099-.1.233-.156.374-.156ZM6.774 15.358c.003.269.085.53.235.752.15.222.36.394.607.494a1.325 1.325 0 0 0 1.457-.309 1.38 1.38 0 0 0 .28-1.484 1.358 1.358 0 0 0-.497-.607 1.33 1.33 0 0 0-1.697.182 1.363 1.363 0 0 0-.385.972Zm1.865 0a.542.542 0 0 1-.326.495.522.522 0 0 1-.577-.116.539.539 0 0 1 .375-.916c.14 0 .274.057.374.157.099.1.155.237.155.38ZM16.313 15.392c.265 0 .525-.08.746-.23.22-.149.392-.361.494-.61a1.38 1.38 0 0 0-.29-1.484 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.251.255.593.398.949.398Zm0-1.892a.524.524 0 0 1 .49.332.543.543 0 0 1-.118.586.527.527 0 0 1-.901-.387.54.54 0 0 1 .157-.376.525.525 0 0 1 .372-.155ZM11.637 12.825c.266 0 .525-.08.746-.23.22-.15.393-.362.495-.611a1.38 1.38 0 0 0-.292-1.484 1.326 1.326 0 0 0-1.463-.295 1.346 1.346 0 0 0-.602.501 1.376 1.376 0 0 0 .167 1.72c.252.255.593.399.95.399Zm0-1.899a.524.524 0 0 1 .489.332.543.543 0 0 1-.115.584.527.527 0 0 1-.576.117.53.53 0 0 1-.327-.496.546.546 0 0 1 .145-.398.528.528 0 0 1 .384-.168v.03ZM9.078 20.545c.005.221.075.436.2.617s.3.321.504.402a1.093 1.093 0 0 0 1.199-.262 1.13 1.13 0 0 0 .228-1.223 1.122 1.122 0 0 0-.409-.5 1.097 1.097 0 0 0-.613-.188 1.13 1.13 0 0 0-.786.348 1.163 1.163 0 0 0-.323.806Zm1.109-.3a.293.293 0 0 1 .273.185.304.304 0 0 1-.064.327.295.295 0 0 1-.322.065.297.297 0 0 1-.183-.277c0-.08.031-.156.087-.212a.294.294 0 0 1 .209-.088ZM14.441 19.293c.228.008.453-.054.646-.177s.345-.302.436-.514a1.17 1.17 0 0 0-.234-1.274 1.132 1.132 0 0 0-1.254-.25c-.21.09-.387.242-.51.437a1.166 1.166 0 0 0 .147 1.436c.204.21.48.332.77.342Zm0-1.425c.079 0 .154.031.21.088a.303.303 0 0 1 0 .424.294.294 0 0 1-.42 0 .308.308 0 0 1-.091-.212.305.305 0 0 1 .089-.215.294.294 0 0 1 .212-.085ZM16.785 9.98c.225 0 .445-.068.632-.194a1.15 1.15 0 0 0 .42-.518 1.17 1.17 0 0 0-.247-1.258 1.133 1.133 0 0 0-1.24-.25 1.142 1.142 0 0 0-.51.425 1.166 1.166 0 0 0 .14 1.457c.214.216.503.338.805.338Zm0-1.425a.292.292 0 0 1 .346.154.304.304 0 0 1-.087.374.294.294 0 0 1-.259.049.292.292 0 0 1-.346-.155.304.304 0 0 1 .087-.373.294.294 0 0 1 .26-.05ZM5.665 27.59a.41.41 0 0 0-.218.247.421.421 0 0 0 .03.33.419.419 0 0 0 .364.225.382.382 0 0 0 .182-.04 12.27 12.27 0 0 1 5.614-1.385c2.067.03 4.104.496 5.984 1.368a.405.405 0 0 0 .465-.061.416.416 0 0 0 .104-.464.425.425 0 0 0-.216-.231 15.518 15.518 0 0 0-6.337-1.443c-2.076.002-4.122.5-5.972 1.454Z",fill:"#407BFF"})]}),es=e=>i.jsx("svg",{width:10,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:i.jsx("path",{d:"M5 1v8m4-4H1",stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round"})}),bn=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  max-height: 700vh
  z-index: 1300;
`,ts=u.div`
width: 280px;
height: 648px;
padding: 24px 12px 24px 12px;
border-radius: 10px;
z-index: 100;
box-shadow: 0px 4px 8px 0px #407BFF33;
position: absolute;
background-color: #fff;
top: 40px;
@media (min-width: 768px){
  max-height: 580px;
  width: 704px;
  padding: 32px 24px 32px 24px;
  }
  @media (min-width: 1158px){
    width: 592px;
    top:110px;
}
`,wn=u.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,ns=u.div`
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
  
`,rs=u.div`
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
`,os=u.p`
font-size: 18px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#407BFF;
`,is=u.p`

font-size: 12px;
font-weight: 400;
line-height: 24px;
text-align: left;

`;u.div`
display:flex;
gap:12px;
align-items:center;
padding-top:1px;
padding-bottom:1px;
@media (min-width: 768px){
   gap:16px;
    }`;const as=u.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-bottom:16px;
`,et=u.p`
font-size: 16px;
font-weight: 400;
line-height: 20px;
text-align: left;
margin-bottom:12px;
`,ss=u.div`
display:flex;
flex-direction:column;
gap:24px;
align-items: center;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
  }
`,cs=u.button`
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
  background: rgba(64, 123, 255, 0.8);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
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
  
`,ls=u.div`

    width: 280px;
    height: 288px;
    padding: 32px 24px 32px 24px;
    border-radius: 10px;
    z-index: 100;
    box-shadow: 0px 4px 8px 0px #407BFF33;
    position: absolute;
    background-color: #fff;
    top: 48px;
    @media (min-width: 768px){
      width: 592px;
      height: 208px;
      top: 200px;
        }  
        @media (min-width: 1158px){
          top: 296px;
        }
   
`,yn=u.p`
font-family: Roboto;
font-size: 26px;
font-weight: 500;
line-height: 32px;
text-align: left;

`,ds=u.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-top:24px;
`,us=u.div`
display:flex;
flex-direction:column;
gap:24px;
margin-top:24px;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
    }  
    @media (min-width: 1158px){
    
    }`,ps=u.button`
width: 232px;
height: 36px;
padding: 8px 30px 8px 30px;
border-radius: 10px;
opacity: 0px;
background-color:#EF5050;
box-shadow: 0px 4px 8px 0px #407BFF57;
border:none;
&:hover {
  background: rgba(64, 123, 255, 0.8);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
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
`,hs=u.button`
width: 232px;
height: 36px;
padding: 8px 30px 8px 30px;
border-radius: 10px;
opacity: 0px;
background-color:#D7E3FF;
border:none;
&:hover {
  background: rgba(64, 123, 255, 0.8);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
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
`,fs=u.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#FFFFFF;

`,xs=u.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#407BFF;
`,ms=({isOpen:e,onClose:t,recordData:n})=>{const{amountWater:r,date:o,_id:a}=n,s=xe(),[c,l]=p.useState(r),[d,f]=p.useState(w()),g=()=>{l(k=>k+50)},h=()=>{c>=50&&l(k=>k-50)},y=()=>{const[k,O]=d.split(":"),$=new Date;$.setUTCHours(k,O);const B=$.toISOString();s(On({id:a,amountWater:c,date:B})),s(Pe(!0)),t(),f(w())},x=k=>{const O=parseInt(k.target.value);l(O)};function w(){const k=new Date(o),O=k.getUTCHours().toString().padStart(2,"0"),$=k.getUTCMinutes().toString().padStart(2,"0");return`${O}:${$}`}if(p.useEffect(()=>{const k=O=>{O.key==="Escape"&&t()};return e&&document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)}},[e,t]),e===!1)return null;const C=n.date.toLocaleString(),m=new Date(C),v=m.getUTCHours(),S=m.getUTCMinutes(),R=S<10?"0"+S:S,b=v<10?"0"+v:v,D=v>=12?"PM":"AM";return i.jsx(bn,{children:i.jsxs(ts,{children:[i.jsxs(wn,{children:[i.jsx(yn,{children:"Edit the entered amount of water"}),i.jsx(at,{onClick:t,children:i.jsx(it,{})})]}),i.jsxs(ns,{children:[i.jsxs(rs,{children:[i.jsx(gn,{children:i.jsx(Ja,{})}),i.jsxs(mn,{children:[i.jsxs(os,{children:[r," ml"]}),i.jsxs(is,{children:[b,":",R," ",D]})]})]}),i.jsxs("div",{children:[i.jsx(as,{children:"Correct entered data:"}),i.jsx(et,{children:"Amount of water:"}),i.jsxs(Vt,{children:[i.jsx(Ut,{onClick:h,children:i.jsx(Yt,{})}),i.jsx(Gt,{children:i.jsxs(Qt,{children:[c," ml"]})}),i.jsx(Zt,{onClick:g,children:i.jsx(qt,{})})]})]}),i.jsxs("div",{children:[i.jsx(et,{children:"Recording time:"}),i.jsx(Xt,{type:"time",step:300,value:d,onChange:k=>f(k.target.value)})]}),i.jsxs("div",{children:[i.jsx(et,{children:"Enter the value of the water used:"}),i.jsx(Kt,{type:"number",value:c,onChange:x})]}),i.jsxs(ss,{children:[i.jsxs(Jt,{children:[c," ml"]}),i.jsx(cs,{onClick:y,children:"Save"})]})]})]})})},gs=({isOpen:e,onClose:t,recordData:n})=>{const r=xe();if(e===!1)return null;const o=()=>{const a=n._id;r(Rn(a)),r(Pe(!0)),t()};return i.jsx("div",{children:i.jsx(bn,{children:i.jsxs(ls,{children:[i.jsxs(wn,{children:[i.jsx(yn,{children:"Delete entry"}),i.jsx(at,{onClick:t,children:i.jsx(it,{})})]}),i.jsx(ds,{children:"Are you sure you want to delete the entry?"}),i.jsxs(us,{children:[i.jsx(ps,{children:i.jsx(fs,{onClick:o,children:"Delete"})}),i.jsx(hs,{onClick:t,children:i.jsx(xs,{children:"Cancel"})})]})]})})})},bs=()=>{const[e,t]=p.useState(!1),[n,r]=p.useState(!1),[o,a]=p.useState(!1),[s,c]=p.useState(null),{waterRecords:l}=Le().waterRecords,d=()=>{t(!0)},f=()=>{t(!1)},g=E=>{c(E),r(!0)},h=()=>{r(!1)},y=E=>{a(!0),c(E)},x=()=>{a(!1)},w=()=>{if(!(!l||l.length===0))return l.map(E=>{const v=E.date.toLocaleString(),S=new Date(v),R=S.getUTCHours(),b=S.getUTCMinutes(),D=b<10?"0"+b:b,k=R<10?"0"+R:R;return i.jsxs(Ia,{children:[i.jsxs($a,{children:[i.jsx(gn,{children:i.jsx(Ka,{})}),i.jsxs(mn,{children:[i.jsxs(qa,{children:[E.amountWater," ml"]}),i.jsxs(Va,{children:[k,":",D]})]})]}),i.jsxs(za,{children:[i.jsx(At,{children:i.jsx(Qa,{onClick:()=>g(E)})}),i.jsx(At,{children:i.jsx(Xa,{onClick:()=>y(E)})})]})]},E._id)})},j=()=>i.jsx(Aa,{children:i.jsx(La,{children:i.jsx(w,{})})});return i.jsxs("div",{children:[i.jsxs(_a,{children:[i.jsx(Ba,{children:"Today"}),i.jsx(j,{}),i.jsxs(Ua,{onClick:d,children:[i.jsx(Za,{children:i.jsx(es,{})}),i.jsx(Ga,{children:"Add water"})]})]}),n&&i.jsx(ms,{isOpen:n,onClose:h,recordData:s}),i.jsx(en,{isOpen:e,onClose:f}),o&&i.jsx(gs,{isOpen:o,onClose:x,recordData:s})]})},ws="https://bekhuriy.github.io/WaterTracker/assets/Bubbles_bg_main_desk-ffd148af.svg",ys="https://bekhuriy.github.io/WaterTracker/assets/Bubbles_bg_home_tablet-f54d97ba.svg",vs="https://bekhuriy.github.io/WaterTracker/assets/Bubbles_bg_home_mob-0163f2d5.svg",ks=u.div`
  // position: relative;
  background-position: center 28px;
  background-image: url(${vs});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${ys});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${ws});
    background-size: 100%;
    background-size: contain;
    background-repeat: repeat;
  }
`,Es=u.section`
  // // padding: 24px 20px 40px;
  // background-position: center center;
  // // додати сюди зображення
  // background-size: contain;
  // background-repeat: no-repeat;
  // width: 100%;
`,js=u.div`
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
`,Ms=u.div`
  gap: 16px;
  
  @media screen and (min-width: 768px) {
    // padding: 0 24px;
    min-width: 704px;
    // width: 100%;
    // height: 688px;
    
  }
`,Ss=u.div`
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
`,Ds=()=>{const e=xe(),t=Le().forceRender;return p.useEffect(()=>{e(Wn()),e(Nn()),t&&e(Pe(!1))},[t,e]),i.jsx(ks,{children:i.jsx(Es,{children:i.jsxs(js,{children:[i.jsxs(Ms,{children:[i.jsx(Xr,{}),i.jsx(lr,{})]}),i.jsxs(Ss,{children:[i.jsx(bs,{}),i.jsx(Na,{})]})]})})})};export{Ds as default};
