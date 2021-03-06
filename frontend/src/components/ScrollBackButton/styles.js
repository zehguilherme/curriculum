/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 3%;
  height: 55px;
  width: 55px;
  border-radius: 100%;
  background: var(--blue);
  color: #fff;
  z-index: 1;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9);
  }

  @media(max-width: 810px){
    bottom: 145px;
  }

  @media(max-width: 650px){
    bottom: 88px;
    right: 2%;
  }

  @media(max-width: 610px){
    bottom: 241px;
    right: 2%;
  }

  .icon {
    height: 20px;
    width: auto;
  }
`;
