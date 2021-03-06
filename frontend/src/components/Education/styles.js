/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesEducation = styled.section`
  display: flex;
  flex-direction: column;
  margin: 6rem;
  padding: 3rem 5rem;
  box-shadow: 0 0 15px var(--section-item-border);
  border-radius: 10px;

  @media(max-width: 353px){
    padding: 3.0rem 3.0rem
  }

  @media(max-width: 650px){
    margin: 3.0rem 3.0rem;
  }

  @media(max-width: 425px){
    align-items: center;
  }

  h2 {
    color: var(--title-section);
    margin-bottom: 20px;
    font-size: 2.2rem;

    @media(max-width: 1016px) {
      text-align: center;
    }

    @media(max-width: 354px){
      font-size: 2.1rem;
    }
  }

  .unisagrado {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 720px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .unisagrado-img {
    width: 100%;
    height: auto;
    max-width: 179px;
  }

  .unisagrado .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media(max-width: 720px){
      align-items: center;
      justify-content: center;
    }
  }

  .unisagrado .information a {
    font-size: 1.8rem;
    color: var(--title-item);
    transition: color 0.3s;
  }

  .unisagrado .information a:hover {
    color: #9999ef;
  }

  .unisagrado .information .course {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 1.8rem;
  }

  .unisagrado .information .years {
    font-size: 1.7rem;
  }
`;
