/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ItemContainer = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 15px var(--section-item-border);
  i {
    font-size: 9.5rem;
  }

  /* English */
  h3 {
    font-size: 2rem;
    font-weight: 700;
  }
`;
