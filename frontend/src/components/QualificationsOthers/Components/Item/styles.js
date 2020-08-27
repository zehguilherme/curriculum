/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 20px;

  @media(max-width: 1017px) {
    flex-direction: column;
    justify-content: center;
  }

  /* Except last item */
  :not(:last-child) {
    margin-bottom: 35px;
  }

  img {
    border-radius: 8px;
    height: 80px;
    width: auto;

    @media(max-width: 1017px){
      margin-bottom: 2rem;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media(max-width: 1017px){
      justify-content: center;
      align-items: center;
    }
  }

  .information h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .rocketseat-h2 {
    color: #9466FF;
  }

  .alura-h2 {
    color: #2A7AE4;
  }

  .ez-devs-h2 {
    color: #0A9B7C;
  }

  .unisagrado-h2 {
    color: #FF151F;
  }

  .senac-h2 {
    color: #F6931E;
  }

  .information h3 {
    line-height: 2.3rem;
    text-align: end;

    @media(max-width: 1017px){
      text-align: center;
    }
  }

  /* Icons */
  .information .icons {
    display: flex;

    .file:not(:last-child) {
      margin-right: 20px;
    }
  }

  .information .icons a {
    outline: none;
  }

  /* GitHub */
  .information .github a i {
    font-size: 30px;
    color: gray;
  }

  .information .github a i:hover {
    color: black;
  }

  /* PDF file */
  .information .file a i {
    font-size: 30px;
    color: gray;
  }

  .information .file a i:hover {
    color: red;
  }

  .information h3 {
    font-weight: 600;
    margin-bottom: 15px;
  }

  .information a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    margin-bottom: 15px;
    transition: color 0.2s;
  }

  .information a:hover {
    color: grey;
  }

  .information p {
    margin-bottom: 20px;
    font-size: 17px;
    text-align: center;
  }
`;
