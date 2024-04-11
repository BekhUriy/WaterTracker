import{t as G,c as He,s as it,u as l,j as n,b as ce,r as p,d as en,f as ve,e as Fe,g as Et,M as jt,h as St,Q as tn,i as nn,B as Ne,k as on,l as rn,m as Ze,R as sn,n as an,o as ln,T as dn,p as he,q as ke,_ as q,v as Se,w as Te,x as pe,y as k,z as rt,A as Ce,C as Q,D as Me,E as ne,F as Y,G as st,H as be,I as at,J as lt,K as cn,L as pn,N as Tt,O as Ct,P as $,S as fe,U as un,V as xn,W as hn,X as fn,Y as gn}from"./index-7e6863e9.js";import{c as mn,a as bn,b as Be,u as vn}from"./index.esm-3948beec.js";function dt(e,t){const o=G(e);if(isNaN(t))return He(e,NaN);if(!t)return o;const i=o.getDate(),s=He(e,o.getTime());s.setMonth(o.getMonth()+t+1,0);const r=s.getDate();return i>=r?s:(o.setFullYear(s.getFullYear(),s.getMonth(),i),o)}function wn(e){return He(e,Date.now())}function yn(e,t){const o=it(e),i=it(t);return+o==+i}function _e(e){const t=G(e),o=t.getMonth();return t.setFullYear(t.getFullYear(),o+1,0),t.setHours(23,59,59,999),t}function kn(e,t){const o=G(e.start),i=G(e.end);let s=+o>+i;const r=s?+o:+i,a=s?i:o;a.setHours(0,0,0,0);let d=(t==null?void 0:t.step)??1;if(!d)return[];d<0&&(d=-d,s=!s);const c=[];for(;+a<=r;)c.push(G(a)),a.setDate(a.getDate()+d),a.setHours(0,0,0,0);return s?c.reverse():c}function Ae(e){const t=G(e);return t.setDate(1),t.setHours(0,0,0,0),t}function En(e){return G(e).getDate()}function jn(e){return yn(e,wn(e))}function Sn(e,t){const o=+G(e),[i,s]=[+G(t.start),+G(t.end)].sort((r,a)=>r-a);return o>=i&&o<=s}function Tn(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Mt=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`,Cn=l.div`
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
`,Mn=l.div`
  position: relative;
  height: 80px;
  display: flex;
  flex-direction: column;
`,Pn=l.p`
  color: #407bff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
`,Rn=l.input`
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
`,Dn=l.span`
  height: 32px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`,Fn=l.span`
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
`,Nn=l.span`
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
`,Bn=l.span`
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
`,_n=l.button`
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
`,An=({width:e=24,height:t=24,color:o="#f8f6f6",...i})=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...i,children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),n.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),Pt=()=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}),Rt=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),qe=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{border:"none",backgroundColor:"transparent"},children:[n.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),On=l.div`
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
`,In=l.div`
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
`,Ke=l.button`
  border-left-style: none;
  border-block-style: none;
  border-right: none;
  background-color: transparent;
`,Ln=l.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`,zn=l.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: rgb(47, 47, 47);
  margin-bottom: 12px;
`,Dt=l.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`,Ft=l.button`
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
`,Nt=l.button`
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
`,Bt=l.div`
  border-radius: 40px;
  background: rgb(215, 227, 255);
  padding-left: 10px;
  padding-right: 16px;
  margin-left: 10px;
  margin-right: 10px;
`,_t=l.p`
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
`,Wn=l.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: rgb(47, 47, 47);
  margin-bottom: 12px;
`,At=l.input`
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
`,$n=l.p`
  margin-bottom: 16px;
  color: rgb(47, 47, 47);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,Ot=l.input`
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
`,Hn=l.div`
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
`,It=l.span`
  color: rgb(64, 123, 255);
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`,Zn=l.button`
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
`,Lt=({isOpen:e,onClose:t})=>{const o=ce(),[i,s]=p.useState(0),[r,a]=p.useState(m()),d=()=>{s(b=>b+50)},c=()=>{i>=50&&s(b=>b-50)},u=()=>{const[b,f]=r.split(":"),y=new Date;y.setUTCHours(b,f);const P=y.toISOString();o(en({amountWater:i,date:P})),o(ve(!0)),t(),a(m())},h=b=>{const f=parseInt(b.target.value);s(f)};function m(){const b=new Date,f=b.getHours().toString().padStart(2,"0"),y=b.getMinutes().toString().padStart(2,"0");return`${f}:${y}`}const x=b=>{const f=b.target.value;a(f)};return p.useEffect(()=>{a(m())},[e,t]),p.useEffect(()=>{const b=f=>{f.key==="Escape"&&t()};return e&&document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}},[e,t]),e?n.jsxs(On,{children:[n.jsxs(In,{children:[n.jsx("h2",{children:"Add water"}),n.jsx(Ke,{onClick:t,children:n.jsx(qe,{})})]}),n.jsx("div",{children:n.jsxs(Ln,{children:[n.jsx("h3",{style:{marginBottom:"16px"},children:"Choose a value:"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx(zn,{children:"Amount of water:"}),n.jsxs(Dt,{children:[n.jsx(Ft,{onClick:c,children:n.jsx(Pt,{})}),n.jsx(Bt,{children:n.jsxs(_t,{children:[i," ml"]})}),n.jsx(Nt,{onClick:d,children:n.jsx(Rt,{})})]})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx(Wn,{children:"Recording time:"}),n.jsx(At,{type:"time",step:300,value:r,onChange:x})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx($n,{children:"Enter the value of the water used:"}),n.jsx(Ot,{type:"number",value:i,onChange:h})]}),n.jsxs(Hn,{children:[n.jsxs(It,{children:[i," ml"]}),n.jsx(Zn,{onClick:u,children:"Save"})]})]})})]}):null},Un=e=>e.water.waterRecords,Vn=e=>e.water.monthStats,Gn=e=>e.water.forceRender,Pe=()=>({waterRecords:Fe(Un),monthStats:Fe(Vn),forceRender:Fe(Gn)}),qn=()=>{const[e,t]=p.useState(!1),{percentageOfWaterConsumption:o}=Pe().waterRecords,i=()=>{t(!0)},s=()=>{t(!1)};return n.jsxs(Cn,{children:[e&&n.jsx(Mt,{onClick:s}),n.jsxs(Mn,{children:[n.jsx(Pn,{children:"Today"}),n.jsx(Rn,{type:"range",min:0,max:100,value:o||0,style:{backgroundSize:`${o}% 100%`},readOnly:!0}),n.jsxs(Dn,{children:[n.jsx(Fn,{children:"0%"}),o>1&&o<99&&n.jsxs(Bn,{style:{left:`calc(${o}% + 2px)`},id:"WaterMark",children:[o,"%"]}),n.jsx(Nn,{children:"100%"})]})]}),n.jsxs(_n,{onClick:i,children:[n.jsx(An,{}),"Add Water"]}),e&&n.jsx(Lt,{isOpen:e,onClose:s})]})},Kn="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_mob_1x-min-d3b7da82.png",Yn="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_mob_2x-min-f515f354.png",Xn="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_tablet_1x-min-59895b14.png",Qn="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_tablet_2x-min-58402861.png",Jn="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_desk_1x-min-3f10a7f5.png",eo="https://bekhuriy.github.io/WaterTracker/assets/bottle_bg_home_page_desk_2x-min-b133c1b6.png",to=l.div`
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
`,no=l.div`
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
`,oo=l.p`
  font-size: 18px;
  color: var(--text);
  font-weight: 500;
  line-height: 1.3;
  width: 124px;
`,io=l.div`
  display: flex;
  gap: 12px;
`,ro=l.p`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-blue);
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,so=l.button`
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--text-passowrd);

  &:hover {
    color: var(--orange-color);
  }
`,ao=l.div`
  width: 280px;
  height: 208px;
  background-image: url(${Kn});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${Yn});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    //   position: relative;

    width: 518px;
    height: 386px;
    background-image: url(${Xn});
    margin-top: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${Qn});
  }

  @media screen and (min-width: 1440px) {
    margin-top: 2px;
    margin-left: -73px;
    width: 738px;
    min-height: 548px;
    background-image: url(${Jn});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${eo});
  }
`,lo=e=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M6 18L18 6M6 6L18 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),co=l.div`
    width: 256px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 656px;
    }

    @media screen and (min-width: 1440px) {
        width: 544px;
    }
`,po=l.div`
    margin-bottom: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
`,uo=l.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`,xo=l(lo)`
    stroke: var(--text-blue);
    width: 24px;
    height: 24px;

    &:hover{
        stroke: var(--orange-color);
    }
`,ho=l.div`
    display: flex;
    align-items: center;
    gap: 24px;

    margin-bottom: 12px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: start;
        gap: 16px;
    }
`,ct=l.p`
    font-size: 16px;
    line-height: 1.25;
`,pt=l.span`
    font-size: 18px;
    line-height: 1.33;

    color: var(--text-blue);

    margin-left: 4px;
`,fo=l.p`
    font-size: 12px;
    line-height: 1.33;

    color: #8f8f8f;
    border-radius: 10px;
    border: 1px solid var(--button-pup-up);

    padding: 10px;
    margin-bottom: 24px;
`,go=l.span`
    color: var(--text-blue);
`,mo=l.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,bo=l.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;

    margin-bottom: 16px;
`,vo=l.div`
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
`,ut=l.div`
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
`,wo=l.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,yo=l.b`
    font-size: 18px;
    line-height: 1.33;
    width: 64px;
    color: var(--text-blue);
    display: flex;
    align-items: center;
`,ko=l.div`
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;

    @media screen and (min-width: 768px) {
        button {
            width: 160px;
            height: 44px;
        }
    }
`,Eo=l.p`
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
`,jo=mn({gender:bn().required("Gender is required"),weight:Be().required("Weight is required").min(0,"Weight must be a positive number"),activityTime:Be().required("Activity is required").min(0,"Activity time must be a positive number"),waterAmount:Be().required("Drank water amount is required").min(0,"Drank water amount must be a positive number")}),So=l.label`
    font-size: 18px;
    line-height: 1.33;

    display: flex;
    flex-direction: column;
    gap: 8px;
`,To=l.input`
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
`,Co=l.p`
    font-size: 14px;
    line-height: 1.28;
    color: var(--coral-color);
`,Oe=({inputType:e,label:t,error:o,...i})=>{if(e==="dailyNorma")return n.jsxs(So,{children:[t,n.jsx(To,{...i}),o&&n.jsx(Co,{children:o})]})},Mo=l.div`
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
`,Po=l.div(({type:e})=>({borderRadius:"10px",background:"var(--background)",padding:e==="settings"?"32px 12px":"24px 12px"})),Ro=l(Po)`
    margin-top: 320px;
    margin-bottom: 40px;
    @media screen and (min-width: 768px) {
        padding: 32px 24px;
        margin-top: 160px;
    }
`,Do=document.querySelector("#modal-root"),Fo=({type:e="default",onClose:t,children:o})=>{p.useEffect(()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)})),p.useEffect(()=>(document.body.style.overflowY="hidden",()=>{document.body.style.overflowY="auto"}));const i=s=>{(s.code==="Escape"||s.currentTarget===s.target)&&t()};return Et.createPortal(n.jsx(Mo,{onClick:i,children:n.jsx(Ro,{type:e,children:o})}),Do)},No=l.button(({width:e,buttonType:t})=>({width:`${e}px`,color:t==="cancel"?"var(--text-blue)":"var(--background)",backgroundColor:t==="cancel"?"var( --button-pup-up)":t==="delete"?"var(--coral-color)":"var(--text-blue)"})),Bo=l(No)`
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
`,_o=({children:e,...t})=>n.jsx(Bo,{...t,children:e}),Ao=()=>{const e=p.useContext(jt),t=St(),o=ce(),i=()=>{e()},[s,r]=p.useState(0),a=p.useCallback(x=>{const b=x.gender==="female"?.03:.04,f=x.gender==="female"?.4:.6;if(x.weight>=0&&x.activityTime>=0){const y=x.weight*b+x.activityTime*f;r(y.toFixed(1))}else r("Error")},[]),d=x=>{u.handleChange(x)},c=async()=>{let x=u.values.waterAmount*1e3;x>=0&&x<=1e4?(o(nn({waterRate:x})),o(ve(!0)),Ne.success("Daily norma successfully updated")):Ne.warning("The amount of water must be a positive number and no more than 10 liters"),u.resetForm(),e()},u=vn({initialValues:{gender:t.gender,weight:0,activityTime:0,waterAmount:0},validationSchema:jo,onSubmit:c}),h=(x,b)=>{b!=="waterAmount"&&(x.target.value="")},m=(x,b)=>{x.target.value>=0?b!=="wateramount"&&u.setFieldValue("waterAmount",s):(u.setFieldValue("waterAmount",0),Ne.warning("Negative numbers are not allowed"))};return p.useEffect(()=>{a(u.values)},[a,u.values]),n.jsx(Fo,{onClose:e,children:n.jsx(co,{children:n.jsxs(n.Fragment,{children:[n.jsxs(po,{children:["My daily norma",n.jsx(uo,{onClick:i,children:n.jsx(xo,{})})]}),n.jsxs(ho,{children:[n.jsxs(ct,{children:["For girl:",n.jsx(pt,{children:"V=(M*0,03) + (T*0,4)"})]}),n.jsxs(ct,{children:["For man:",n.jsx(pt,{children:"V=(M*0,04) + (T*0,6)"})]})]}),n.jsxs(fo,{children:[n.jsx(go,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]}),n.jsxs(mo,{children:[n.jsx(bo,{children:"Calculate your rate:"}),n.jsxs(vo,{children:[n.jsx(ut,{children:n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gender",value:"female",onChange:()=>u.setFieldValue("gender","female"),checked:u.values.gender==="female"}),n.jsx("span",{children:"For women"})]})}),n.jsx(ut,{children:n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gender",value:"male",onChange:()=>u.setFieldValue("gender","male"),checked:u.values.gender==="male"}),n.jsx("span",{children:"For men"})]})})]}),n.jsx(Oe,{label:"Your weight in kilograms:",inputType:"dailyNorma",value:u.values.weight,onChange:x=>d(x),onFocus:x=>h(x,"weight"),onBlur:x=>m(x,"weight"),name:"weight",type:"number",min:"0",step:"0.1",error:u.touched.weight&&u.errors.weight}),n.jsx(Oe,{label:`The time of active participation in sports
                        or other activities with a high physical. load in hours:`,inputType:"dailyNorma",value:u.values.activityTime,onChange:x=>d(x),onFocus:x=>h(x,"activityTime"),onBlur:x=>m(x,"activityTime"),name:"activityTime",type:"number",min:"0",max:"10",step:"0.1",error:u.touched.activityTime&&u.errors.activityTime}),n.jsxs(wo,{children:[n.jsx(n.Fragment,{children:"The required amount of water in liters per day:"}),n.jsx(yo,{children:isNaN(s)||s<0?n.jsx(Eo,{children:"Input data error"}):`${s} L`})]}),n.jsx(Oe,{label:"Write down how much water you will drink:",inputType:"dailyNorma",value:u.values.waterAmount,onChange:x=>d(x),onFocus:x=>h(x,"waterAmount"),name:"waterAmount",type:"number",min:"0",max:"20",step:"0.1",error:u.touched.waterAmount&&u.errors.waterAmount}),n.jsx(ko,{children:n.jsx(_o,{type:"submit",onClick:c,children:"Save"})}),n.jsx(tn,{})]})]})})})},Oo=()=>{const{waterRate:e}=St().user,t=p.useContext(jt),o=(e/1e3).toFixed(1),i=()=>{t(n.jsx(Ao,{}))};return n.jsxs(to,{children:[n.jsxs(no,{children:[n.jsx(oo,{children:"My daily norma"}),n.jsxs(io,{children:[n.jsxs(ro,{children:[`${o}`," L"]}),n.jsx(so,{onClick:i,children:"Edit"})]})]}),n.jsx(ao,{})]})};function Io(e,t,o,i,s){const[r,a]=p.useState(()=>s&&o?o(e).matches:i?i(e).matches:t);return Ze(()=>{let d=!0;if(!o)return;const c=o(e),u=()=>{d&&a(c.matches)};return u(),c.addListener(u),()=>{d=!1,c.removeListener(u)}},[e,o]),r}const zt=sn["useSyncExternalStore"];function Lo(e,t,o,i,s){const r=p.useCallback(()=>t,[t]),a=p.useMemo(()=>{if(s&&o)return()=>o(e).matches;if(i!==null){const{matches:h}=i(e);return()=>h}return r},[r,e,i,s,o]),[d,c]=p.useMemo(()=>{if(o===null)return[r,()=>()=>{}];const h=o(e);return[()=>h.matches,m=>(h.addListener(m),()=>{h.removeListener(m)})]},[r,o,e]);return zt(c,d,a)}function zo(e,t={}){const o=on(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:r=i?window.matchMedia:null,ssrMatchMedia:a=null,noSsr:d=!1}=rn({name:"MuiUseMediaQuery",props:t,theme:o});let c=typeof e=="function"?e(o):e;return c=c.replace(/^@media( ?)/m,""),(zt!==void 0?Lo:Io)(c,s,r,a,d)}function Wt(){const e=an(ln);return e[dn]||e}const Wo=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},xt=Wo;function Ue(e,t){return Ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Ue(e,t)}function $o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ue(e,t)}const ht={disabled:!1},$t=he.createContext(null);var Ho=function(t){return t.scrollTop},ge="unmounted",ee="exited",te="entering",de="entered",Ve="exiting",X=function(e){$o(t,e);function t(i,s){var r;r=e.call(this,i,s)||this;var a=s,d=a&&!a.isMounting?i.enter:i.appear,c;return r.appearStatus=null,i.in?d?(c=ee,r.appearStatus=te):c=de:i.unmountOnExit||i.mountOnEnter?c=ge:c=ee,r.state={status:c},r.nextCallback=null,r}t.getDerivedStateFromProps=function(s,r){var a=s.in;return a&&r.status===ge?{status:ee}:null};var o=t.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(s){var r=null;if(s!==this.props){var a=this.state.status;this.props.in?a!==te&&a!==de&&(r=te):(a===te||a===de)&&(r=Ve)}this.updateStatus(!1,r)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var s=this.props.timeout,r,a,d;return r=a=d=s,s!=null&&typeof s!="number"&&(r=s.exit,a=s.enter,d=s.appear!==void 0?s.appear:a),{exit:r,enter:a,appear:d}},o.updateStatus=function(s,r){if(s===void 0&&(s=!1),r!==null)if(this.cancelNextCallback(),r===te){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:ke.findDOMNode(this);a&&Ho(a)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ee&&this.setState({status:ge})},o.performEnter=function(s){var r=this,a=this.props.enter,d=this.context?this.context.isMounting:s,c=this.props.nodeRef?[d]:[ke.findDOMNode(this),d],u=c[0],h=c[1],m=this.getTimeouts(),x=d?m.appear:m.enter;if(!s&&!a||ht.disabled){this.safeSetState({status:de},function(){r.props.onEntered(u)});return}this.props.onEnter(u,h),this.safeSetState({status:te},function(){r.props.onEntering(u,h),r.onTransitionEnd(x,function(){r.safeSetState({status:de},function(){r.props.onEntered(u,h)})})})},o.performExit=function(){var s=this,r=this.props.exit,a=this.getTimeouts(),d=this.props.nodeRef?void 0:ke.findDOMNode(this);if(!r||ht.disabled){this.safeSetState({status:ee},function(){s.props.onExited(d)});return}this.props.onExit(d),this.safeSetState({status:Ve},function(){s.props.onExiting(d),s.onTransitionEnd(a.exit,function(){s.safeSetState({status:ee},function(){s.props.onExited(d)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(s,r){r=this.setNextCallback(r),this.setState(s,r)},o.setNextCallback=function(s){var r=this,a=!0;return this.nextCallback=function(d){a&&(a=!1,r.nextCallback=null,s(d))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},o.onTransitionEnd=function(s,r){this.setNextCallback(r);var a=this.props.nodeRef?this.props.nodeRef.current:ke.findDOMNode(this),d=s==null&&!this.props.addEndListener;if(!a||d){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=c[0],h=c[1];this.props.addEndListener(u,h)}s!=null&&setTimeout(this.nextCallback,s)},o.render=function(){var s=this.state.status;if(s===ge)return null;var r=this.props,a=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var d=q(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return he.createElement($t.Provider,{value:null},typeof a=="function"?a(s,d):he.cloneElement(he.Children.only(a),d))},t}(he.Component);X.contextType=$t;X.propTypes={};function le(){}X.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:le,onEntering:le,onEntered:le,onExit:le,onExiting:le,onExited:le};X.UNMOUNTED=ge;X.EXITED=ee;X.ENTERING=te;X.ENTERED=de;X.EXITING=Ve;const Ht=X,Zt=e=>e.scrollTop;function Ee(e,t){var o,i;const{timeout:s,easing:r,style:a={}}=e;return{duration:(o=a.transitionDuration)!=null?o:typeof s=="number"?s:s[t.mode]||0,easing:(i=a.transitionTimingFunction)!=null?i:typeof r=="object"?r[t.mode]:r,delay:a.transitionDelay}}function Zo(e){return Se("MuiPaper",e)}Te("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Uo=["className","component","elevation","square","variant"],Vo=e=>{const{square:t,elevation:o,variant:i,classes:s}=e,r={root:["root",i,!t&&"rounded",i==="elevation"&&`elevation${o}`]};return Me(r,Zo,s)},Go=pe("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return k({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&k({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${rt("#fff",xt(t.elevation))}, ${rt("#fff",xt(t.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[t.elevation]}))}),qo=p.forwardRef(function(t,o){const i=Ce({props:t,name:"MuiPaper"}),{className:s,component:r="div",elevation:a=1,square:d=!1,variant:c="elevation"}=i,u=q(i,Uo),h=k({},i,{component:r,elevation:a,square:d,variant:c}),m=Vo(h);return n.jsx(Go,k({as:r,ownerState:h,className:Q(m.root,s),ref:o},u))}),Ko=qo;function Ut(e){return typeof e=="string"}function Yo(e,t,o){return e===void 0||Ut(e)?t:k({},t,{ownerState:k({},t.ownerState,o)})}function Vt(e,t=[]){if(e===void 0)return{};const o={};return Object.keys(e).filter(i=>i.match(/^on[A-Z]/)&&typeof e[i]=="function"&&!t.includes(i)).forEach(i=>{o[i]=e[i]}),o}function Xo(e,t,o){return typeof e=="function"?e(t,o):e}function ft(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(o=>!(o.match(/^on[A-Z]/)&&typeof e[o]=="function")).forEach(o=>{t[o]=e[o]}),t}function Qo(e){const{getSlotProps:t,additionalProps:o,externalSlotProps:i,externalForwardedProps:s,className:r}=e;if(!t){const b=Q(o==null?void 0:o.className,r,s==null?void 0:s.className,i==null?void 0:i.className),f=k({},o==null?void 0:o.style,s==null?void 0:s.style,i==null?void 0:i.style),y=k({},o,s,i);return b.length>0&&(y.className=b),Object.keys(f).length>0&&(y.style=f),{props:y,internalRef:void 0}}const a=Vt(k({},s,i)),d=ft(i),c=ft(s),u=t(a),h=Q(u==null?void 0:u.className,o==null?void 0:o.className,r,s==null?void 0:s.className,i==null?void 0:i.className),m=k({},u==null?void 0:u.style,o==null?void 0:o.style,s==null?void 0:s.style,i==null?void 0:i.style),x=k({},u,o,c,d);return h.length>0&&(x.className=h),Object.keys(m).length>0&&(x.style=m),{props:x,internalRef:u.ref}}const Jo=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function je(e){var t;const{elementType:o,externalSlotProps:i,ownerState:s,skipResolvingSlotProps:r=!1}=e,a=q(e,Jo),d=r?{}:Xo(i,s),{props:c,internalRef:u}=Qo(k({},a,{externalSlotProps:d})),h=ne(u,d==null?void 0:d.ref,(t=e.additionalProps)==null?void 0:t.ref);return Yo(o,k({},c,{ref:h}),s)}const ei=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function ti(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function ni(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=i=>e.ownerDocument.querySelector(`input[type="radio"]${i}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function oi(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||ni(e))}function ii(e){const t=[],o=[];return Array.from(e.querySelectorAll(ei)).forEach((i,s)=>{const r=ti(i);r===-1||!oi(i)||(r===0?t.push(i):o.push({documentOrder:s,tabIndex:r,node:i}))}),o.sort((i,s)=>i.tabIndex===s.tabIndex?i.documentOrder-s.documentOrder:i.tabIndex-s.tabIndex).map(i=>i.node).concat(t)}function ri(){return!0}function si(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:i=!1,disableRestoreFocus:s=!1,getTabbable:r=ii,isEnabled:a=ri,open:d}=e,c=p.useRef(!1),u=p.useRef(null),h=p.useRef(null),m=p.useRef(null),x=p.useRef(null),b=p.useRef(!1),f=p.useRef(null),y=ne(t.ref,f),P=p.useRef(null);p.useEffect(()=>{!d||!f.current||(b.current=!o)},[o,d]),p.useEffect(()=>{if(!d||!f.current)return;const v=Y(f.current);return f.current.contains(v.activeElement)||(f.current.hasAttribute("tabIndex")||f.current.setAttribute("tabIndex","-1"),b.current&&f.current.focus()),()=>{s||(m.current&&m.current.focus&&(c.current=!0,m.current.focus()),m.current=null)}},[d]),p.useEffect(()=>{if(!d||!f.current)return;const v=Y(f.current),E=g=>{P.current=g,!(i||!a()||g.key!=="Tab")&&v.activeElement===f.current&&g.shiftKey&&(c.current=!0,h.current&&h.current.focus())},j=()=>{const g=f.current;if(g===null)return;if(!v.hasFocus()||!a()||c.current){c.current=!1;return}if(g.contains(v.activeElement)||i&&v.activeElement!==u.current&&v.activeElement!==h.current)return;if(v.activeElement!==x.current)x.current=null;else if(x.current!==null)return;if(!b.current)return;let M=[];if((v.activeElement===u.current||v.activeElement===h.current)&&(M=r(f.current)),M.length>0){var w,D;const L=!!((w=P.current)!=null&&w.shiftKey&&((D=P.current)==null?void 0:D.key)==="Tab"),A=M[0],z=M[M.length-1];typeof A!="string"&&typeof z!="string"&&(L?z.focus():A.focus())}else g.focus()};v.addEventListener("focusin",j),v.addEventListener("keydown",E,!0);const F=setInterval(()=>{v.activeElement&&v.activeElement.tagName==="BODY"&&j()},50);return()=>{clearInterval(F),v.removeEventListener("focusin",j),v.removeEventListener("keydown",E,!0)}},[o,i,s,a,d,r]);const S=v=>{m.current===null&&(m.current=v.relatedTarget),b.current=!0,x.current=v.target;const E=t.props.onFocus;E&&E(v)},_=v=>{m.current===null&&(m.current=v.relatedTarget),b.current=!0};return n.jsxs(p.Fragment,{children:[n.jsx("div",{tabIndex:d?0:-1,onFocus:_,ref:u,"data-testid":"sentinelStart"}),p.cloneElement(t,{ref:y,onFocus:S}),n.jsx("div",{tabIndex:d?0:-1,onFocus:_,ref:h,"data-testid":"sentinelEnd"})]})}function ai(e){return typeof e=="function"?e():e}const li=p.forwardRef(function(t,o){const{children:i,container:s,disablePortal:r=!1}=t,[a,d]=p.useState(null),c=ne(p.isValidElement(i)?i.ref:null,o);if(Ze(()=>{r||d(ai(s)||document.body)},[s,r]),Ze(()=>{if(a&&!r)return st(o,a),()=>{st(o,null)}},[o,a,r]),r){if(p.isValidElement(i)){const u={ref:c};return p.cloneElement(i,u)}return n.jsx(p.Fragment,{children:i})}return n.jsx(p.Fragment,{children:a&&Et.createPortal(i,a)})});function di(e){const t=Y(e);return t.body===e?be(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function me(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function gt(e){return parseInt(be(e).getComputedStyle(e).paddingRight,10)||0}function ci(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,i=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||i}function mt(e,t,o,i,s){const r=[t,o,...i];[].forEach.call(e.children,a=>{const d=r.indexOf(a)===-1,c=!ci(a);d&&c&&me(a,s)})}function Ie(e,t){let o=-1;return e.some((i,s)=>t(i)?(o=s,!0):!1),o}function pi(e,t){const o=[],i=e.container;if(!t.disableScrollLock){if(di(i)){const a=Tn(Y(i));o.push({value:i.style.paddingRight,property:"padding-right",el:i}),i.style.paddingRight=`${gt(i)+a}px`;const d=Y(i).querySelectorAll(".mui-fixed");[].forEach.call(d,c=>{o.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${gt(c)+a}px`})}let r;if(i.parentNode instanceof DocumentFragment)r=Y(i).body;else{const a=i.parentElement,d=be(i);r=(a==null?void 0:a.nodeName)==="HTML"&&d.getComputedStyle(a).overflowY==="scroll"?a:i}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:a,property:d})=>{r?a.style.setProperty(d,r):a.style.removeProperty(d)})}}function ui(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class xi{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let i=this.modals.indexOf(t);if(i!==-1)return i;i=this.modals.length,this.modals.push(t),t.modalRef&&me(t.modalRef,!1);const s=ui(o);mt(o,t.mount,t.modalRef,s,!0);const r=Ie(this.containers,a=>a.container===o);return r!==-1?(this.containers[r].modals.push(t),i):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),i)}mount(t,o){const i=Ie(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[i];s.restore||(s.restore=pi(s,o))}remove(t,o=!0){const i=this.modals.indexOf(t);if(i===-1)return i;const s=Ie(this.containers,a=>a.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(i,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&me(t.modalRef,o),mt(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const a=r.modals[r.modals.length-1];a.modalRef&&me(a.modalRef,!1)}return i}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function hi(e){return typeof e=="function"?e():e}function fi(e){return e?e.props.hasOwnProperty("in"):!1}const gi=new xi;function mi(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:i=!1,manager:s=gi,closeAfterTransition:r=!1,onTransitionEnter:a,onTransitionExited:d,children:c,onClose:u,open:h,rootRef:m}=e,x=p.useRef({}),b=p.useRef(null),f=p.useRef(null),y=ne(f,m),[P,S]=p.useState(!h),_=fi(c);let v=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(v=!1);const E=()=>Y(b.current),j=()=>(x.current.modalRef=f.current,x.current.mount=b.current,x.current),F=()=>{s.mount(j(),{disableScrollLock:i}),f.current&&(f.current.scrollTop=0)},g=at(()=>{const C=hi(t)||E().body;s.add(j(),C),f.current&&F()}),M=p.useCallback(()=>s.isTopModal(j()),[s]),w=at(C=>{b.current=C,C&&(h&&M()?F():f.current&&me(f.current,v))}),D=p.useCallback(()=>{s.remove(j(),v)},[v,s]);p.useEffect(()=>()=>{D()},[D]),p.useEffect(()=>{h?g():(!_||!r)&&D()},[h,D,_,r,g]);const L=C=>R=>{var I;(I=C.onKeyDown)==null||I.call(C,R),!(R.key!=="Escape"||R.which===229||!M())&&(o||(R.stopPropagation(),u&&u(R,"escapeKeyDown")))},A=C=>R=>{var I;(I=C.onClick)==null||I.call(C,R),R.target===R.currentTarget&&u&&u(R,"backdropClick")};return{getRootProps:(C={})=>{const R=Vt(e);delete R.onTransitionEnter,delete R.onTransitionExited;const I=k({},R,C);return k({role:"presentation"},I,{onKeyDown:L(I),ref:y})},getBackdropProps:(C={})=>{const R=C;return k({"aria-hidden":!0},R,{onClick:A(R),open:h})},getTransitionProps:()=>{const C=()=>{S(!1),a&&a()},R=()=>{S(!0),d&&d(),r&&D()};return{onEnter:lt(C,c==null?void 0:c.props.onEnter),onExited:lt(R,c==null?void 0:c.props.onExited)}},rootRef:y,portalRef:w,isTopModal:M,exited:P,hasTransition:_}}const bi=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],vi={entering:{opacity:1},entered:{opacity:1}},wi=p.forwardRef(function(t,o){const i=Wt(),s={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:r,appear:a=!0,children:d,easing:c,in:u,onEnter:h,onEntered:m,onEntering:x,onExit:b,onExited:f,onExiting:y,style:P,timeout:S=s,TransitionComponent:_=Ht}=t,v=q(t,bi),E=p.useRef(null),j=ne(E,d.ref,o),F=B=>T=>{if(B){const C=E.current;T===void 0?B(C):B(C,T)}},g=F(x),M=F((B,T)=>{Zt(B);const C=Ee({style:P,timeout:S,easing:c},{mode:"enter"});B.style.webkitTransition=i.transitions.create("opacity",C),B.style.transition=i.transitions.create("opacity",C),h&&h(B,T)}),w=F(m),D=F(y),L=F(B=>{const T=Ee({style:P,timeout:S,easing:c},{mode:"exit"});B.style.webkitTransition=i.transitions.create("opacity",T),B.style.transition=i.transitions.create("opacity",T),b&&b(B)}),A=F(f),z=B=>{r&&r(E.current,B)};return n.jsx(_,k({appear:a,in:u,nodeRef:E,onEnter:M,onEntered:w,onEntering:g,onExit:L,onExited:A,onExiting:D,addEndListener:z,timeout:S},v,{children:(B,T)=>p.cloneElement(d,k({style:k({opacity:0,visibility:B==="exited"&&!u?"hidden":void 0},vi[B],P,d.props.style),ref:j},T))}))}),yi=wi;function ki(e){return Se("MuiBackdrop",e)}Te("MuiBackdrop",["root","invisible"]);const Ei=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],ji=e=>{const{classes:t,invisible:o}=e;return Me({root:["root",o&&"invisible"]},ki,t)},Si=pe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>k({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Ti=p.forwardRef(function(t,o){var i,s,r;const a=Ce({props:t,name:"MuiBackdrop"}),{children:d,className:c,component:u="div",components:h={},componentsProps:m={},invisible:x=!1,open:b,slotProps:f={},slots:y={},TransitionComponent:P=yi,transitionDuration:S}=a,_=q(a,Ei),v=k({},a,{component:u,invisible:x}),E=ji(v),j=(i=f.root)!=null?i:m.root;return n.jsx(P,k({in:b,timeout:S},_,{children:n.jsx(Si,k({"aria-hidden":!0},j,{as:(s=(r=y.root)!=null?r:h.Root)!=null?s:u,className:Q(E.root,c,j==null?void 0:j.className),ownerState:k({},v,j==null?void 0:j.ownerState),classes:E,ref:o,children:d}))}))}),Ci=Ti;function Mi(e){return Se("MuiModal",e)}Te("MuiModal",["root","hidden","backdrop"]);const Pi=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Ri=e=>{const{open:t,exited:o,classes:i}=e;return Me({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Mi,i)},Di=pe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>k({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Fi=pe(Ci,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Ni=p.forwardRef(function(t,o){var i,s,r,a,d,c;const u=Ce({name:"MuiModal",props:t}),{BackdropComponent:h=Fi,BackdropProps:m,className:x,closeAfterTransition:b=!1,children:f,container:y,component:P,components:S={},componentsProps:_={},disableAutoFocus:v=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:j=!1,disablePortal:F=!1,disableRestoreFocus:g=!1,disableScrollLock:M=!1,hideBackdrop:w=!1,keepMounted:D=!1,onBackdropClick:L,open:A,slotProps:z,slots:B}=u,T=q(u,Pi),C=k({},u,{closeAfterTransition:b,disableAutoFocus:v,disableEnforceFocus:E,disableEscapeKeyDown:j,disablePortal:F,disableRestoreFocus:g,disableScrollLock:M,hideBackdrop:w,keepMounted:D}),{getRootProps:R,getBackdropProps:I,getTransitionProps:W,portalRef:V,isTopModal:we,exited:Z,hasTransition:ye}=mi(k({},C,{rootRef:o})),J=k({},C,{exited:Z}),K=Ri(J),oe={};if(f.props.tabIndex===void 0&&(oe.tabIndex="-1"),ye){const{onEnter:N,onExited:O}=W();oe.onEnter=N,oe.onExited=O}const ie=(i=(s=B==null?void 0:B.root)!=null?s:S.Root)!=null?i:Di,ue=(r=(a=B==null?void 0:B.backdrop)!=null?a:S.Backdrop)!=null?r:h,xe=(d=z==null?void 0:z.root)!=null?d:_.root,re=(c=z==null?void 0:z.backdrop)!=null?c:_.backdrop,Re=je({elementType:ie,externalSlotProps:xe,externalForwardedProps:T,getSlotProps:R,additionalProps:{ref:o,as:P},ownerState:J,className:Q(x,xe==null?void 0:xe.className,K==null?void 0:K.root,!J.open&&J.exited&&(K==null?void 0:K.hidden))}),De=je({elementType:ue,externalSlotProps:re,additionalProps:m,getSlotProps:N=>I(k({},N,{onClick:O=>{L&&L(O),N!=null&&N.onClick&&N.onClick(O)}})),className:Q(re==null?void 0:re.className,m==null?void 0:m.className,K==null?void 0:K.backdrop),ownerState:J});return!D&&!A&&(!ye||Z)?null:n.jsx(li,{ref:V,container:y,disablePortal:F,children:n.jsxs(ie,k({},Re,{children:[!w&&h?n.jsx(ue,k({},De)):null,n.jsx(si,{disableEnforceFocus:E,disableAutoFocus:v,disableRestoreFocus:g,isEnabled:we,open:A,children:p.cloneElement(f,oe)})]}))})}),Bi=Ni,_i=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ge(e){return`scale(${e}, ${e**2})`}const Ai={entering:{opacity:1,transform:Ge(1)},entered:{opacity:1,transform:"none"}},Le=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Gt=p.forwardRef(function(t,o){const{addEndListener:i,appear:s=!0,children:r,easing:a,in:d,onEnter:c,onEntered:u,onEntering:h,onExit:m,onExited:x,onExiting:b,style:f,timeout:y="auto",TransitionComponent:P=Ht}=t,S=q(t,_i),_=cn(),v=p.useRef(),E=Wt(),j=p.useRef(null),F=ne(j,r.ref,o),g=T=>C=>{if(T){const R=j.current;C===void 0?T(R):T(R,C)}},M=g(h),w=g((T,C)=>{Zt(T);const{duration:R,delay:I,easing:W}=Ee({style:f,timeout:y,easing:a},{mode:"enter"});let V;y==="auto"?(V=E.transitions.getAutoHeightDuration(T.clientHeight),v.current=V):V=R,T.style.transition=[E.transitions.create("opacity",{duration:V,delay:I}),E.transitions.create("transform",{duration:Le?V:V*.666,delay:I,easing:W})].join(","),c&&c(T,C)}),D=g(u),L=g(b),A=g(T=>{const{duration:C,delay:R,easing:I}=Ee({style:f,timeout:y,easing:a},{mode:"exit"});let W;y==="auto"?(W=E.transitions.getAutoHeightDuration(T.clientHeight),v.current=W):W=C,T.style.transition=[E.transitions.create("opacity",{duration:W,delay:R}),E.transitions.create("transform",{duration:Le?W:W*.666,delay:Le?R:R||W*.333,easing:I})].join(","),T.style.opacity=0,T.style.transform=Ge(.75),m&&m(T)}),z=g(x),B=T=>{y==="auto"&&_.start(v.current||0,T),i&&i(j.current,T)};return n.jsx(P,k({appear:s,in:d,nodeRef:j,onEnter:w,onEntered:D,onEntering:M,onExit:A,onExited:z,onExiting:L,addEndListener:B,timeout:y==="auto"?null:y},S,{children:(T,C)=>p.cloneElement(r,k({style:k({opacity:0,transform:Ge(.75),visibility:T==="exited"&&!d?"hidden":void 0},Ai[T],f,r.props.style),ref:F},C))}))});Gt.muiSupportAuto=!0;const Oi=Gt;function Ii(e){return Se("MuiPopover",e)}Te("MuiPopover",["root","paper"]);const Li=["onEntering"],zi=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Wi=["slotProps"];function bt(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function vt(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function wt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ze(e){return typeof e=="function"?e():e}const $i=e=>{const{classes:t}=e;return Me({root:["root"],paper:["paper"]},Ii,t)},Hi=pe(Bi,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Zi=pe(Ko,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Ui=p.forwardRef(function(t,o){var i,s,r;const a=Ce({props:t,name:"MuiPopover"}),{action:d,anchorEl:c,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:h,anchorReference:m="anchorEl",children:x,className:b,container:f,elevation:y=8,marginThreshold:P=16,open:S,PaperProps:_={},slots:v,slotProps:E,transformOrigin:j={vertical:"top",horizontal:"left"},TransitionComponent:F=Oi,transitionDuration:g="auto",TransitionProps:{onEntering:M}={},disableScrollLock:w=!1}=a,D=q(a.TransitionProps,Li),L=q(a,zi),A=(i=E==null?void 0:E.paper)!=null?i:_,z=p.useRef(),B=ne(z,A.ref),T=k({},a,{anchorOrigin:u,anchorReference:m,elevation:y,marginThreshold:P,externalPaperSlotProps:A,transformOrigin:j,TransitionComponent:F,transitionDuration:g,TransitionProps:D}),C=$i(T),R=p.useCallback(()=>{if(m==="anchorPosition")return h;const N=ze(c),H=(N&&N.nodeType===1?N:Y(z.current).body).getBoundingClientRect();return{top:H.top+bt(H,u.vertical),left:H.left+vt(H,u.horizontal)}},[c,u.horizontal,u.vertical,h,m]),I=p.useCallback(N=>({vertical:bt(N,j.vertical),horizontal:vt(N,j.horizontal)}),[j.horizontal,j.vertical]),W=p.useCallback(N=>{const O={width:N.offsetWidth,height:N.offsetHeight},H=I(O);if(m==="none")return{top:null,left:null,transformOrigin:wt(H)};const Qe=R();let se=Qe.top-H.vertical,ae=Qe.left-H.horizontal;const Je=se+O.height,et=ae+O.width,tt=be(ze(c)),nt=tt.innerHeight-P,ot=tt.innerWidth-P;if(P!==null&&se<P){const U=se-P;se-=U,H.vertical+=U}else if(P!==null&&Je>nt){const U=Je-nt;se-=U,H.vertical+=U}if(P!==null&&ae<P){const U=ae-P;ae-=U,H.horizontal+=U}else if(et>ot){const U=et-ot;ae-=U,H.horizontal+=U}return{top:`${Math.round(se)}px`,left:`${Math.round(ae)}px`,transformOrigin:wt(H)}},[c,m,R,I,P]),[V,we]=p.useState(S),Z=p.useCallback(()=>{const N=z.current;if(!N)return;const O=W(N);O.top!==null&&(N.style.top=O.top),O.left!==null&&(N.style.left=O.left),N.style.transformOrigin=O.transformOrigin,we(!0)},[W]);p.useEffect(()=>(w&&window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)),[c,w,Z]);const ye=(N,O)=>{M&&M(N,O),Z()},J=()=>{we(!1)};p.useEffect(()=>{S&&Z()}),p.useImperativeHandle(d,()=>S?{updatePosition:()=>{Z()}}:null,[S,Z]),p.useEffect(()=>{if(!S)return;const N=pn(()=>{Z()}),O=be(c);return O.addEventListener("resize",N),()=>{N.clear(),O.removeEventListener("resize",N)}},[c,S,Z]);let K=g;g==="auto"&&!F.muiSupportAuto&&(K=void 0);const oe=f||(c?Y(ze(c)).body:void 0),ie=(s=v==null?void 0:v.root)!=null?s:Hi,ue=(r=v==null?void 0:v.paper)!=null?r:Zi,xe=je({elementType:ue,externalSlotProps:k({},A,{style:V?A.style:k({},A.style,{opacity:0})}),additionalProps:{elevation:y,ref:B},ownerState:T,className:Q(C.paper,A==null?void 0:A.className)}),re=je({elementType:ie,externalSlotProps:(E==null?void 0:E.root)||{},externalForwardedProps:L,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:oe,open:S},ownerState:T,className:Q(C.root,b)}),{slotProps:Re}=re,De=q(re,Wi);return n.jsx(ie,k({},De,!Ut(ie)&&{slotProps:Re,disableScrollLock:w},{children:n.jsx(F,k({appear:!0,in:S,onEntering:ye,onExited:J,timeout:K},D,{children:n.jsx(ue,k({},xe,{children:x}))}))}))}),Vi=Ui;var Ye={},Gi=Ct;Object.defineProperty(Ye,"__esModule",{value:!0});var qt=Ye.default=void 0,qi=Gi(Tt()),Ki=n;qt=Ye.default=(0,qi.default)((0,Ki.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var Xe={},Yi=Ct;Object.defineProperty(Xe,"__esModule",{value:!0});var Kt=Xe.default=void 0,Xi=Yi(Tt()),Qi=n;Kt=Xe.default=(0,Xi.default)((0,Qi.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const Ji=$.div`
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
`;$.div`
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

`;const er=$.p`
    margin: 0; // todo
    color: #407bff; // todo
`,We=$.p`
    margin: 0;
    color: #2f2f2f;

    span {
        margin-left: 6px;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.33333;
        color: #407bff;
    }
`,tr=({dayInfo:e})=>{const{data:t,dailyNorma:o,percentage:i,totalRecords:s}=e;return n.jsxs(Ji,{children:[n.jsx(er,{children:fe(t,"dd, MMMM")}),n.jsxs(We,{children:["Daily norma:",n.jsxs("span",{children:[o," L"]})]}),n.jsxs(We,{children:["Fulfillment of the daily norm:",n.jsxs("span",{children:[i,"%"]})]}),n.jsxs(We,{children:["How many servings of water:",n.jsx("span",{children:s})]})]})},nr=$.div`
    width: 264px;
    background-color: var(--background-tracker);

    @media screen and (min-width: 768px) {
        min-width: 656px;
    }

    @media screen and (min-width: 1440px) {
        min-width: 538px;
    }
`,or=$.div`
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
`,ir=$.div`
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: var(font-size);
    font-weight: 400;
    line-height: var(line-height);

    color: var(--text-blue);
`,rr=$.span`
min-width: 118px;
    text-align: center;
`,yt=$.button`
    border: none;
    padding: 0;

    color: inherit;
    background-color: transparent;

    &:hover {
        color: #7FAAFD; // todo
    }
`,kt=$.div`
    svg {
        color: ${e=>e.isCurrentMonth?"transparent":"inherit"};
        width: 14px;
        height: 14px;
    }
`,sr=$.div`
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
`,ar=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 32px;
    height: 52px;

    font-weight: var(font-weight);

    color: #7FAAFD;
`,lr=$.button`
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
`,dr=$.p`
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
`,cr=()=>{const e=ce(),[t,o]=p.useState(new Date),[i,s]=p.useState(!0),[r,a]=p.useState(null),[d,c]=p.useState(null),{monthStats:u,waterRecords:h}=Pe(),m=!!r,x=zo("(min-width:768px)"),b=Ae(t),f=_e(t),y=kn({start:b,end:f}),P=f.getDate(),S=p.useMemo(()=>y.map(g=>{const M=fe(g,"yyyy-MM-dd");return{day:En(g),isToday:jn(g),fullDate:M}}),[y]),_=()=>{o(g=>Ae(dt(g,-1)))},v=()=>{o(g=>{const M=dt(g,1);return _e(M)})},E=g=>{const M=g.target.value,w=F(u,M);c(w),a(g.currentTarget)},j=()=>{a(null)};p.useEffect(()=>{const g=new Date,M=Ae(g),w=_e(g);s(Sn(t,{start:M,end:w}))},[t]),p.useEffect(()=>{e(un(fe(t,"yyyy-MM-dd")))},[e,t]);const F=(g,M)=>{const[w]=g.filter(D=>D.date===M);if(w){const D=(w.percentage/10).toFixed(1)*10>100?100:(w.percentage/10).toFixed(1)*10;return{data:t,dailyNorma:D===0?1.5:w.dailyNorma/1e3,percentage:fe(t,"yyyy-MM-dd")===M?h.percentageOfWaterConsumption:D,totalRecords:w.totalRecords}}else return{data:t,dailyNorma:1.5,percentage:0,totalRecords:0}};return n.jsxs(nr,{children:[n.jsxs(or,{children:[n.jsx("h2",{children:"Month"}),n.jsxs(ir,{children:[n.jsx(yt,{onClick:_,children:n.jsx(kt,{children:n.jsx(Kt,{})})}),n.jsx(rr,{children:fe(t,"MMMM yyyy")}),n.jsx(yt,{onClick:v,disabled:i,children:n.jsx(kt,{isCurrentMonth:i,children:n.jsx(qt,{})})})]})]}),n.jsx(sr,{lastDayNumber:P,children:S.map(g=>{const M=F(u,g.fullDate);return n.jsxs(ar,{children:[n.jsx(lr,{percentage:M.percentage,isToday:g.isToday,"aria-owns":m?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:E,onMouseLeave:j,value:g.fullDate,children:g.day}),n.jsxs(dr,{children:[M.percentage,"%"]})]},g.day)})}),n.jsx(Vi,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:m,anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:x?"left":"center"},onClose:j,disableRestoreFocus:!0,children:n.jsx(tr,{dayInfo:d})})]})};l.div`
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
`;const pr=l.div`
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
`,ur=l.p`
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
`,xr=l.div`
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
`,hr=l.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`,fr=l.li`
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
`,gr=l.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Yt=l.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding-top: 1px;
  padding-bottom: 1px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`,mr=l.div`
  display: flex;
  gap: 18px;
  align-items: center;
  `,br=l.div`
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
`,vr=l.button`

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
`,wr=l.button`

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
`,yr=l.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #407bff;
`,kr=l.time`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #2f2f2f;
`,Er=l.button`
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
`,jr=l.div`
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
`,Sr=l.p`
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
`,Tr=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none",...e,children:n.jsx("path",{stroke:"#9EBBFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M10.241 1.991 11.366.866a1.25 1.25 0 0 1 1.768 1.768l-7.08 7.08a3 3 0 0 1-1.264.753L3 11l.533-1.79a3 3 0 0 1 .754-1.265l5.954-5.954Zm0 0L12 3.75m-1 4.583V11.5A1.5 1.5 0 0 1 9.5 13h-7A1.5 1.5 0 0 1 1 11.5v-7A1.5 1.5 0 0 1 2.5 3h3.167"})}),Cr=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:14,fill:"none",...e,children:n.jsx("path",{stroke:"#EF5050",strokeLinecap:"round",strokeLinejoin:"round",d:"m7.827 5-.231 6m-3.192 0-.23-6m6.645-2.14c.228.035.454.071.681.11m-.681-.11-.712 9.255A1.5 1.5 0 0 1 8.61 13.5H3.389a1.5 1.5 0 0 1-1.496-1.385L1.181 2.86m9.638 0A32.071 32.071 0 0 0 8.5 2.595m-7.319.265c-.228.034-.454.07-.681.11m.681-.11c.77-.116 1.543-.205 2.319-.265m5 0v-.61c0-.787-.607-1.443-1.393-1.468a34.642 34.642 0 0 0-2.214 0C4.107.542 3.5 1.2 3.5 1.985v.61m5 0a32.446 32.446 0 0 0-5 0"})}),Mr=e=>n.jsx(vr,{type:"button",children:e.children}),Xt=e=>n.jsx(br,{children:e.children}),Pr=e=>n.jsx(wr,{type:"button",children:e.children}),Rr=e=>n.jsxs("svg",{width:17,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[n.jsx("path",{d:"m.522.26 1.544 21.42v.06h13.298L16.91.327V.26H.522ZM14.818 21.14H2.617L1.458 5.095h.637l1.048 14.14c.006.074.04.143.093.194.054.051.125.08.198.08h.025a.287.287 0 0 0 .2-.1.296.296 0 0 0 .071-.216L2.683 5.095h13.293l-1.158 16.044Zm1.2-16.644H2.637l-.23-3.126a.306.306 0 0 0-.1-.198.297.297 0 0 0-.205-.077.299.299 0 0 0-.2.105.307.307 0 0 0-.07.216l.23 3.084h-.646L1.154.857H16.28l-.263 3.638Z",fill:"#407BFF"}),n.jsx("path",{d:"M5.23 8.062a.96.96 0 0 0 .538-.166.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.213.973.973 0 0 0-.436.362.994.994 0 0 0 .121 1.242.963.963 0 0 0 .686.288Zm0-1.371a.378.378 0 0 1 .352.24.393.393 0 0 1-.082.422.38.38 0 0 1-.653-.274.39.39 0 0 1 .112-.274.38.38 0 0 1 .27-.114ZM5.225 11.258a.993.993 0 0 0 .17.544.957.957 0 0 0 1.491.134.988.988 0 0 0 .202-1.072.98.98 0 0 0-.359-.439.96.96 0 0 0-1.434.454.996.996 0 0 0-.07.38Zm1.348 0a.392.392 0 0 1-.236.358.377.377 0 0 1-.416-.084.39.39 0 0 1 .27-.661.38.38 0 0 1 .27.113.39.39 0 0 1 .112.274ZM12.115 11.283a.96.96 0 0 0 .538-.165.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.214.972.972 0 0 0-.435.363.993.993 0 0 0 .12 1.241.962.962 0 0 0 .686.288Zm0-1.367a.379.379 0 0 1 .353.24.393.393 0 0 1-.085.424.38.38 0 0 1-.65-.28.39.39 0 0 1 .113-.272.38.38 0 0 1 .269-.112ZM8.738 9.429a.96.96 0 0 0 .538-.166.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.213.973.973 0 0 0-.435.362.994.994 0 0 0 .12 1.242.963.963 0 0 0 .686.288Zm0-1.371a.378.378 0 0 1 .353.24.393.393 0 0 1-.083.421.38.38 0 0 1-.652-.274.393.393 0 0 1 .23-.377c.048-.02.1-.031.152-.03v.02ZM6.89 15.005a.82.82 0 0 0 .144.445.803.803 0 0 0 .825.328.797.797 0 0 0 .405-.227.816.816 0 0 0 .164-.883.811.811 0 0 0-.295-.361.793.793 0 0 0-.443-.136.816.816 0 0 0-.568.252.84.84 0 0 0-.233.582Zm.8-.217a.212.212 0 0 1 .198.134.22.22 0 0 1-.047.236.213.213 0 0 1-.233.047.215.215 0 0 1-.131-.2c0-.058.022-.113.062-.154a.212.212 0 0 1 .151-.063ZM10.763 14.1a.814.814 0 0 0 .781-.498.844.844 0 0 0-.168-.92.818.818 0 0 0-.906-.181.825.825 0 0 0-.369.315.842.842 0 0 0 .107 1.038c.147.15.346.24.555.247Zm0-1.029c.057 0 .111.023.151.064a.218.218 0 0 1 0 .306.212.212 0 0 1-.303 0 .222.222 0 0 1-.065-.153.22.22 0 0 1 .064-.155.214.214 0 0 1 .153-.062ZM12.456 7.374a.813.813 0 0 0 .456-.14.845.845 0 0 0 .124-1.282.818.818 0 0 0-.895-.181.825.825 0 0 0-.368.307.842.842 0 0 0 .102 1.052.816.816 0 0 0 .58.244Zm0-1.029a.21.21 0 0 1 .187.035.215.215 0 0 1 .085.173.218.218 0 0 1-.085.173.212.212 0 0 1-.187.036.21.21 0 0 1-.25-.112.218.218 0 0 1 .152-.31.21.21 0 0 1 .098.005ZM4.424 20.093a.297.297 0 0 0-.17.3c.003.04.015.08.035.117a.304.304 0 0 0 .263.162.275.275 0 0 0 .131-.029 8.86 8.86 0 0 1 4.055-1c1.492.022 2.964.358 4.322.988a.292.292 0 0 0 .336-.044.301.301 0 0 0 .074-.336.307.307 0 0 0-.156-.166 11.207 11.207 0 0 0-4.576-1.042 9.43 9.43 0 0 0-4.314 1.05Z",fill:"#407BFF"})]}),Dr=e=>n.jsxs("svg",{width:23,height:30,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[n.jsx("path",{d:"M.261.13 2.4 29.79v.08h18.412L22.951.224V.13H.26ZM20.056 29.04H3.162L1.558 6.824h.882l1.45 19.578c.009.103.055.199.13.27.074.07.172.11.274.11h.034a.401.401 0 0 0 .356-.279.415.415 0 0 0 .02-.159L3.252 6.824H21.66l-1.604 22.215Zm1.66-23.046H3.19l-.318-4.328a.423.423 0 0 0-.137-.274.412.412 0 0 0-.284-.107.413.413 0 0 0-.276.146.425.425 0 0 0-.1.299l.319 4.27h-.893L1.137.956h20.944l-.364 5.037Z",fill:"#407BFF"}),n.jsx("path",{d:"M6.78 10.932c.265 0 .525-.08.745-.23.221-.149.393-.362.495-.61a1.38 1.38 0 0 0-.291-1.485 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.502 1.376 1.376 0 0 0 .167 1.72c.252.255.594.398.95.398Zm0-1.898a.524.524 0 0 1 .488.331.544.544 0 0 1-.114.585.527.527 0 0 1-.903-.38.54.54 0 0 1 .155-.38c.099-.1.233-.156.374-.156ZM6.774 15.358c.003.269.085.53.235.752.15.222.36.394.607.494a1.325 1.325 0 0 0 1.457-.309 1.38 1.38 0 0 0 .28-1.484 1.358 1.358 0 0 0-.497-.607 1.33 1.33 0 0 0-1.697.182 1.363 1.363 0 0 0-.385.972Zm1.865 0a.542.542 0 0 1-.326.495.522.522 0 0 1-.577-.116.539.539 0 0 1 .375-.916c.14 0 .274.057.374.157.099.1.155.237.155.38ZM16.313 15.392c.265 0 .525-.08.746-.23.22-.149.392-.361.494-.61a1.38 1.38 0 0 0-.29-1.484 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.251.255.593.398.949.398Zm0-1.892a.524.524 0 0 1 .49.332.543.543 0 0 1-.118.586.527.527 0 0 1-.901-.387.54.54 0 0 1 .157-.376.525.525 0 0 1 .372-.155ZM11.637 12.825c.266 0 .525-.08.746-.23.22-.15.393-.362.495-.611a1.38 1.38 0 0 0-.292-1.484 1.326 1.326 0 0 0-1.463-.295 1.346 1.346 0 0 0-.602.501 1.376 1.376 0 0 0 .167 1.72c.252.255.593.399.95.399Zm0-1.899a.524.524 0 0 1 .489.332.543.543 0 0 1-.115.584.527.527 0 0 1-.576.117.53.53 0 0 1-.327-.496.546.546 0 0 1 .145-.398.528.528 0 0 1 .384-.168v.03ZM9.078 20.545c.005.221.075.436.2.617s.3.321.504.402a1.093 1.093 0 0 0 1.199-.262 1.13 1.13 0 0 0 .228-1.223 1.122 1.122 0 0 0-.409-.5 1.097 1.097 0 0 0-.613-.188 1.13 1.13 0 0 0-.786.348 1.163 1.163 0 0 0-.323.806Zm1.109-.3a.293.293 0 0 1 .273.185.304.304 0 0 1-.064.327.295.295 0 0 1-.322.065.297.297 0 0 1-.183-.277c0-.08.031-.156.087-.212a.294.294 0 0 1 .209-.088ZM14.441 19.293c.228.008.453-.054.646-.177s.345-.302.436-.514a1.17 1.17 0 0 0-.234-1.274 1.132 1.132 0 0 0-1.254-.25c-.21.09-.387.242-.51.437a1.166 1.166 0 0 0 .147 1.436c.204.21.48.332.77.342Zm0-1.425c.079 0 .154.031.21.088a.303.303 0 0 1 0 .424.294.294 0 0 1-.42 0 .308.308 0 0 1-.091-.212.305.305 0 0 1 .089-.215.294.294 0 0 1 .212-.085ZM16.785 9.98c.225 0 .445-.068.632-.194a1.15 1.15 0 0 0 .42-.518 1.17 1.17 0 0 0-.247-1.258 1.133 1.133 0 0 0-1.24-.25 1.142 1.142 0 0 0-.51.425 1.166 1.166 0 0 0 .14 1.457c.214.216.503.338.805.338Zm0-1.425a.292.292 0 0 1 .346.154.304.304 0 0 1-.087.374.294.294 0 0 1-.259.049.292.292 0 0 1-.346-.155.304.304 0 0 1 .087-.373.294.294 0 0 1 .26-.05ZM5.665 27.59a.41.41 0 0 0-.218.247.421.421 0 0 0 .03.33.419.419 0 0 0 .364.225.382.382 0 0 0 .182-.04 12.27 12.27 0 0 1 5.614-1.385c2.067.03 4.104.496 5.984 1.368a.405.405 0 0 0 .465-.061.416.416 0 0 0 .104-.464.425.425 0 0 0-.216-.231 15.518 15.518 0 0 0-6.337-1.443c-2.076.002-4.122.5-5.972 1.454Z",fill:"#407BFF"})]}),Fr=e=>n.jsx("svg",{width:10,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:n.jsx("path",{d:"M5 1v8m4-4H1",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Nr=l.div`
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
`,Br=l.div`
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
`,Qt=l.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,_r=l.div`
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
  
`,Ar=l.div`
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
`,Or=l.p`
font-size: 18px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#407BFF;
`,Ir=l.p`

font-size: 12px;
font-weight: 400;
line-height: 24px;
text-align: left;

`;l.div`
display:flex;
gap:12px;
align-items:center;
padding-top:1px;
padding-bottom:1px;
@media (min-width: 768px){
   gap:16px;
    }`;const Lr=l.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-bottom:16px;
`,$e=l.p`
font-size: 16px;
font-weight: 400;
line-height: 20px;
text-align: left;
margin-bottom:12px;
`,zr=l.div`
display:flex;
flex-direction:column;
gap:24px;
align-items: center;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
  }
`,Wr=l.button`
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
  
`,$r=l.div`
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
   
`,Jt=l.p`
font-family: Roboto;
font-size: 26px;
font-weight: 500;
line-height: 32px;
text-align: left;

`,Hr=l.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-top:24px;
`,Zr=l.div`
display:flex;
flex-direction:column;
gap:24px;
margin-top:24px;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
    }  
    @media (min-width: 1158px){
    
    }`,Ur=l.button`
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
`,Vr=l.button`
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
`,Gr=l.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#FFFFFF;

`,qr=l.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#407BFF;

`,Kr=({isOpen:e,onClose:t,recordData:o})=>{const{amountWater:i,date:s,_id:r}=o,a=ce(),[d,c]=p.useState(i),[u,h]=p.useState(y()),m=()=>{c(w=>w+50)},x=()=>{d>=50&&c(w=>w-50)},b=()=>{const[w,D]=u.split(":"),L=new Date;L.setUTCHours(w,D);const A=L.toISOString();a(xn({id:r,amountWater:d,date:A})),a(ve(!0)),t(),h(y())},f=w=>{const D=parseInt(w.target.value);c(D)};function y(){const w=new Date(s),D=w.getUTCHours().toString().padStart(2,"0"),L=w.getUTCMinutes().toString().padStart(2,"0");return`${D}:${L}`}if(p.useEffect(()=>{const w=D=>{D.key==="Escape"&&t()};return e&&document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[e,t]),e===!1)return null;const _=o.date.toLocaleString(),v=new Date(_),E=v.getUTCHours(),j=v.getUTCMinutes(),F=j<10?"0"+j:j,g=E<10?"0"+E:E,M=E>=12?"PM":"AM";return n.jsx(Nr,{children:n.jsxs(Br,{children:[n.jsxs(Qt,{children:[n.jsx(Jt,{children:"Edit the entered amount of water"}),n.jsx(Ke,{onClick:t,children:n.jsx(qe,{})})]}),n.jsxs(_r,{children:[n.jsxs(Ar,{children:[n.jsx(Xt,{children:n.jsx(Dr,{})}),n.jsxs(Yt,{children:[n.jsxs(Or,{children:[i," ml"]}),n.jsxs(Ir,{children:[g,":",F," ",M]})]})]}),n.jsxs("div",{children:[n.jsx(Lr,{children:"Correct entered data:"}),n.jsx($e,{children:"Amount of water:"}),n.jsxs(Dt,{children:[n.jsx(Ft,{onClick:x,children:n.jsx(Pt,{})}),n.jsx(Bt,{children:n.jsxs(_t,{children:[d," ml"]})}),n.jsx(Nt,{onClick:m,children:n.jsx(Rt,{})})]})]}),n.jsxs("div",{children:[n.jsx($e,{children:"Recording time:"}),n.jsx(At,{type:"time",step:300,value:u,onChange:w=>h(w.target.value)})]}),n.jsxs("div",{children:[n.jsx($e,{children:"Enter the value of the water used:"}),n.jsx(Ot,{type:"number",value:d,onChange:f})]}),n.jsxs(zr,{children:[n.jsxs(It,{children:[d," ml"]}),n.jsx(Wr,{onClick:b,children:"Save"})]})]})]})})},Yr=({isOpen:e,onClose:t,recordData:o})=>{const i=ce();if(p.useEffect(()=>{const r=a=>{a.key==="Escape"&&t()};return e&&document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[e,t]),e===!1)return null;const s=()=>{const r=o._id;i(hn(r)),i(ve(!0)),t()};return n.jsx("div",{children:n.jsxs($r,{children:[n.jsxs(Qt,{children:[n.jsx(Jt,{children:"Delete entry"}),n.jsx(Ke,{onClick:t,children:n.jsx(qe,{})})]}),n.jsx(Hr,{children:"Are you sure you want to delete the entry?"}),n.jsxs(Zr,{children:[n.jsx(Ur,{children:n.jsx(Gr,{onClick:s,children:"Delete"})}),n.jsx(Vr,{onClick:t,children:n.jsx(qr,{children:"Cancel"})})]})]})})},Xr=()=>{const[e,t]=p.useState(!1),[o,i]=p.useState(!1),[s,r]=p.useState(!1),[a,d]=p.useState(null),{waterRecords:c}=Pe().waterRecords,u=()=>{t(!0)},h=()=>{t(!1)},m=S=>{d(S),i(!0)},x=()=>{i(!1)},b=S=>{r(!0),d(S)},f=()=>{r(!1)},y=()=>{if(!(!c||c.length===0))return c.map(S=>{const E=S.date.toLocaleString(),j=new Date(E),F=j.getUTCHours(),g=j.getUTCMinutes(),M=g<10?"0"+g:g,w=F<10?"0"+F:F;return n.jsxs(fr,{children:[n.jsxs(gr,{children:[n.jsx(Xt,{children:n.jsx(Rr,{})}),n.jsxs(Yt,{children:[n.jsxs(yr,{children:[S.amountWater," ml"]}),n.jsxs(kr,{children:[w,":",M]})]})]}),n.jsxs(mr,{children:[n.jsx(Mr,{children:n.jsx(Tr,{onClick:()=>m(S)})}),n.jsx(Pr,{children:n.jsx(Cr,{onClick:()=>b(S)})})]})]},S._id)})},P=()=>n.jsx(xr,{children:n.jsx(hr,{children:n.jsx(y,{})})});return n.jsxs("div",{children:[e&&n.jsx(Mt,{onClick:h}),n.jsxs(pr,{children:[n.jsx(ur,{children:"Today"}),n.jsx(P,{}),n.jsxs(Er,{onClick:u,children:[n.jsx(jr,{children:n.jsx(Fr,{})}),n.jsx(Sr,{children:"Add water"})]})]}),o&&n.jsx(Kr,{isOpen:o,onClose:x,recordData:a}),n.jsx(Lt,{isOpen:e,onClose:h}),s&&n.jsx(Yr,{isOpen:s,onClose:f,recordData:a})]})},Qr="https://bekhuriy.github.io/WaterTracker/assets/Bubbles_bg_main_desk-ffd148af.svg",Jr="https://bekhuriy.github.io/WaterTracker/assets/Bubbles_bg_home_tablet-f54d97ba.svg",es="https://bekhuriy.github.io/WaterTracker/assets/Bubbles_bg_home_mob-0163f2d5.svg",ts=l.div`
  // position: relative;
  background-position: center 28px;
  background-image: url(${es});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${Jr});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${Qr});
    background-size: 100%;
    background-size: contain;
    background-repeat: repeat;
  }
`,ns=l.section`
  // // padding: 24px 20px 40px;
  // background-position: center center;
  // // додати сюди зображення
  // background-size: contain;
  // background-repeat: no-repeat;
  // width: 100%;
  // width: 1216px;

`,os=l.div`
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
`,is=l.div`
  gap: 16px;
  
  @media screen and (min-width: 768px) {
    // padding: 0 24px;
    width: 704px;
    // width: 100%;
    // height: 688px;
    overflow: hidden;
    
  }
`,rs=l.div`
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
`,ls=()=>{const e=ce(),t=Pe().forceRender;return p.useEffect(()=>{e(fn()),e(gn()),t&&e(ve(!1))},[t,e]),n.jsx(ts,{children:n.jsx(ns,{children:n.jsxs(os,{children:[n.jsxs(is,{children:[n.jsx(Oo,{}),n.jsx(qn,{})]}),n.jsxs(rs,{children:[n.jsx(Xr,{}),n.jsx(cr,{})]})]})})})};export{ls as default};
