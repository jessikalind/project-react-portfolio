import styled from 'styled-components';

export const HeaderHeadlineOne = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.04em;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 18px;
  }
  @media (min-width: 1025px){ 
    font-size: 20px;
  }
`

export const HeaderHeadlineTwo = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 50px;
    line-height: 60px;
  }
  @media (min-width: 1025px){ 
    font-size: 60px;
    line-height: 60px;
  }
`

export const HeaderHeadlineThree = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media (min-width: 1025px){ 
    font-size: 30px;
  }
`

export const WhitePinkH2 = styled.h2`
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  color: white;
  background: #FF7777;
  align-self: center;
  justify-self: center;
  text-align: center;
  padding: 5px;
  margin-bottom: 5vh;
  display: inline-block;
`

export const PinkH3 = styled.h3`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 17px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: #FF7777;
  padding: 2vh 0px 1px 0px; 
`

export const SkillHeader = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 29px;
  color: #FF7777;
  text-align: center;
`