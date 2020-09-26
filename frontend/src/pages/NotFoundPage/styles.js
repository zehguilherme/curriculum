/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NotFoundPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .error img {
    height: 460px;
    border-radius: 10px;
    margin-bottom: 20px;

    @media(max-width: 696px) {
      width: calc(0.9 * 613px);
      height: calc(0.9 * 460px);
    }

    @media(max-width: 619px) {
      width: calc(0.8 * 613px);
      height: calc(0.8 * 460px);
    }

    @media(max-width: 557px) {
      width: calc(0.7 * 613px);
      height: calc(0.7 * 460px);
    }

    @media(max-width: 485px) {
      width: calc(0.6 * 613px);
      height: calc(0.6 * 460px);
    }

    @media(max-width: 423px) {
      width: calc(0.55 * 613px);
      height: calc(0.55 * 460px);
    }

    @media(max-width: 393px) {
      width: calc(0.5 * 613px);
      height: calc(0.5 * 460px);
    }

    @media(max-width: 361px) {
      width: calc(0.45 * 613px);
      height: calc(0.45 * 460px);
    }

    @media(max-width: 327px) {
      width: calc(0.4 * 613px);
      height: calc(0.4 * 460px);
    }
  }

  .error a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color: #008000;
    color: #fff;
    border-radius: 10px;
    padding: 10px;
    transition: background-color 0.3s;
  }

  .error a:hover {
    background-color: #006600;
  }
`;
