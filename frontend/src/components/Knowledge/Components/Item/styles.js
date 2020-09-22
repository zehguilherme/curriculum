/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ItemContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);

  transition: opacity 0.8s;

  i {
    font-size: 9.5rem;
  }

  /* English */
  h3 {
    font-size: 2rem;
    font-weight: 700;
  }
`;
