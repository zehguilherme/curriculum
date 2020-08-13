/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesProfessionalExperience = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 2px 2px 2px 2px #aaaaaa;
  border-radius: 10px;
  margin: 60px;

  h2 {
    color: #312cec;
    font-size: 22px;
    margin-bottom: 35px;
  }

  img {
    object-fit: cover;
    transition: transform 500ms;
  }

  img:hover {
    transform: scale(1.2);
  }

  /* ABC71 */
  .abc71 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  .abc71 img {
    width: 148px;
    height: auto;
  }

  .abc71 .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .abc71 .information h3 {
    margin-bottom: 20px;
  }

  .abc71 .information h3 a {
    font-size: 18px;
    color: #4e4cec;
  }

  .abc71 .information h3 a:hover {
    color: #9999ef;
  }

  .abc71 .information .position {
    margin-bottom: 10px;
    font-size: 18px;
  }

  .abc71 .information .date {
    font-size: 17px;
  }

  /* Divider */
  .divider {
    margin-bottom: 25px;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    content: "";
    background-image: linear-gradient(to right, transparent, rgb(48,49,51), transparent);
  }

  /* Speksciences */
  .speksciences {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  .speksciences img {
    width: 95px;
    height: auto;
  }

  .speksciences .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .speksciences .information h3 {
    margin-bottom: 20px;
  }

  .speksciences .information h3 a {
    font-size: 18px;
    color: #4e4cec;
  }

  .speksciences .information h3 a:hover {
    color: #9999ef;
  }

  .speksciences .information .position {
    margin-bottom: 10px;
    font-size: 18px;
  }

  .speksciences .information .date {
    font-size: 17px;
  }

  /* TV UNESP */
  .tv-unesp {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tv-unesp img {
    width: 95px;
    height: auto;
  }

  .tv-unesp .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .tv-unesp .information h3 {
    margin-bottom: 20px;
  }

  .tv-unesp .information h3 a {
    font-size: 18px;
    color: #4e4cec;
  }

  .tv-unesp .information h3 a:hover {
    color: #9999ef;
  }

  .tv-unesp .information .position {
    margin-bottom: 10px;
    font-size: 18px;
  }

  .tv-unesp .information .date {
    font-size: 17px;
  }
`;
