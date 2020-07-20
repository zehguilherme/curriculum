/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesMainContainer = styled.div`
  display: flex;
  margin: auto 60px auto 60px;

  .information {
    display: flex;
    box-shadow: 2px 2px 2px 2px #aaaaaa;
    border-radius: 10px;
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .information img.picture {
    width: 247px;
    height: 247px;
    margin-right: 50px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px #aaaaaa;
  }

  .information .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .information .text h1 {
    font-size: 28px;
    text-align: justify;
  }

  .information .text h2 {
    color: #4c7ceb;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .information .text .nationality-age-others {
    margin-bottom: 20px;
  }

  .information .text .nationality-age-others i {
    font-size: 22px;
    margin-right: 9px;
    color: #f7941b;
  }

  .information .text .phone {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  .information .text .phone .cellphone a,
  .information .text .phone .landline a {
    color: black;
  }

  .information .text .phone .cellphone a i,
  .information .text .phone .landline a i {
    font-size: 22px;
    margin-right: 9px;
    color: #008000;
  }

  .information .text .phone .cellphone a:hover,
  .information .text .phone .landline a:hover {
    color: gray;
  }

  .information .text .address {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .information .text .address i {
    color: #d31919;
    font-size: 22px;
    margin-right: 9px;
  }

  .information .text .address a {
    color: black;
    text-align: justify;
    line-height: 19px;
  }

  .information .text .address a:hover {
    color: gray;
  }

  .information .text p {
    text-align: justify;
    line-height: 18px;
    font-weight: 600;
  }
`;
