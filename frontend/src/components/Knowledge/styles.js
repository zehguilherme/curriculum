/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesKnowledge = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 10px;
  margin: 6.0rem;

  @media(max-width: 650px){
    margin: 3.0rem 3.0rem;
  }

  @media(max-width: 425px){
    align-items: center;
  }

  h2 {
    color: #312cec;
    font-size: 2.2rem;

    @media(max-width: 354px){
      font-size: 2.1rem;
    }
  }

  .grid {
    margin-top: 30px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(192.5px, 1fr));
    grid-gap: 12px;

    @media (min-width: 426px) and (max-width: 556px){
      grid-auto-columns: repeat(auto-fit, max(192.5px));
    }
  }

  .grid .card {
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);

    transition: opacity 0.8s;
  }

  .grid .card i {
    font-size: 9.5rem;
  }

  /* Pascal */
  .grid .pascal img {
    height: 96px;
  }

  /* Blender */
  .grid .blender img {
    width: 160px;
    height: auto;
  }

  /* SVN */
  .grid .svn img {
    height: 23px;
  }

  /* English */
  .grid .english h3 {
    font-size: 2rem;
    font-weight: 700;
  }
`;
