/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: fixed;
  height: 75px;
  width: 45px;
  top: 40vh;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: column;
  background-color: #fff;

  i {
    font-size: 30px;
    color: gray;
  }

  .pdf-curriculum:hover i {
    color: red;
  }

  .github:hover i {
    color: black;
  }
`;
