/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ReadProgressBarContainer = styled.div.attrs(({ width }) => ({
  style: {
    width: width || '0px',
  },
}))`
  height: 5px;
  position: fixed;
  background-color: #42566a;
  left: 0;
  top: 0;
  z-index: 9999;
`;
