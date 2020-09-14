/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  height: 5px;
  width: ${(props) => props.width || '0px'};
  background-color: #42566a;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`;
