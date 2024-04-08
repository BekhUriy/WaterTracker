import styled from 'styled-components';



export const Text = styled.h1`
margin-top: 15px;
font-size: 32px;
font-weight: 400;
line-height: 1.23;
text-align: center;
color: var(--text-blue);

  @media screen and (min-width: 768px) {
font-size: 40px;
font-weight: 600;
  }
  @media screen and (min-width: 1440px) {
font-size: 56px;
font-weight: 800;
    }
`

export const Span = styled.h2`
font-size: 26px;
font-weight: 400;
line-height: 1.23;
text-align: center;
color: var(--text-blue);

  @media screen and (min-width: 768px) {
font-size: 36px;
font-weight: 700;
  }
  @media screen and (min-width: 1440px) {
font-size: 46px;
font-weight: 700;
    }
`