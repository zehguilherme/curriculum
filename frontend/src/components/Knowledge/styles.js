/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesKnowledge = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 10px;
  margin: 6.0rem;

  @media(max-width: 650px){
    margin: 3.0rem 3.0rem;
  }

  @media(max-width: 425px){
    align-items: center;
  }

  h2 {
    color: #312cec;
    font-size: 2.2rem;

    @media(max-width: 1016px) {
      text-align: center;
    }

    @media(max-width: 354px){
      font-size: 2.1rem;
    }
  }

  .grid {
    margin-top: 30px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(192.5px, 1fr));
    grid-gap: 12px;

    @media (min-width: 426px) and (max-width: 556px){
      grid-auto-columns: repeat(auto-fit, max(192.5px));
    }
  }
`;
