/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ItemContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px var(--section-item-border);
  border-radius: 8px;
  padding: 20px;

  @media(max-width: 1017px) {
    flex-direction: column;
    justify-content: center;
  }

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

    @media(max-width: 425px) {
      text-align: center;
    }
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

  .information p {
    @media(max-width: 425px) {
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
    color: var(--gray);
    transition: color 0.3s;
  }

  .information .github a i:hover {
    color: var(--black);
  }

  /* PDF file */
  .information .file a i {
    font-size: 30px;
    color: var(--gray);
    transition: color 0.3s;
  }

  .information .file a i:hover {
    color: var(--red);
  }

  .information h3 {
    font-weight: 700;
    margin-bottom: 15px;
  }

  .information p {
    margin-bottom: 20px;
    font-size: 17px;
    text-align: center;
    color: var(--text)
  }
`;
