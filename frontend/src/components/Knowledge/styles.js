/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesKnowledge = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 0 0 15px rgba(0,0,0,0.4);
  border-radius: 10px;
  margin: 60px;

  h2 {
    color: #312cec;
    font-size: 22px;
  }

  .grid {
    margin-top: 30px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 12px;
  }

  .grid .card {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);

    transition: opacity 0.8s;
  }

  .grid .card i {
    font-size: 95px;
  }

  .grid .pascal img {
    height: 96px;
  }

  .grid .blender img {
    height: 120px;
    width: 120px;
  }

  .grid .svn img {
    height: 23px;
  }

  .grid .english h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;
