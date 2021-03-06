/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesProfessionalExperience = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  box-shadow: 0 0 15px var(--section-item-border);
  border-radius: 10px;
  margin: 6.0rem;

  @media(max-width: 650px){
    margin: 3.0rem 3.0rem;
  }

  @media(max-width: 480px){
    padding: 3rem;
  }

  h2 {
    color: var(--title-section);
    font-size: 2.2rem;
    margin-bottom: 35px;

    @media(max-width: 1016px) {
      text-align: center;
    }

    @media(max-width: 425px){
      text-align: center;
    }

    @media(max-width: 354px){
      font-size: 2.1rem;
    }
  }
`;
