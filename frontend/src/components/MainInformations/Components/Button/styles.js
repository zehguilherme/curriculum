/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  &:first-child {
    @media(max-width: 560px){
      margin-bottom: 1.5rem;
    }
  }

  a {
    color: var(--text-white);
    background-color: var(--green);
    border-radius: 10px;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    font-weight: 700;
    transition: background-color 0.3s;
  }

  a:hover {
    background-color: #006600;
  }

  a i {
    font-size: 2.2rem;
    color: var(--text-white);
    margin: 0 1rem 0 0;
  }
`;
