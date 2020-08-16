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
  background: #312cec;
  color: #fff;
  z-index: 1;
  cursor: pointer;

  .icon {
    height: 40px;
    width: auto;
  }
`;
