/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const EnterpriseContainer = styled.div`
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 875px){
    flex-direction: column;
    justify-content: center;
  }

  :not(:last-child){
    margin-bottom: 25px;
  }

  /* ABC71 */
  .abc71  {
    width: 148px;
    height: auto;

    @media(max-width: 875px){
      margin-bottom: 2.5rem;
    }
  }

  /* Speksciences */
  .speksciences  {
    width: 95px;
    height: auto;

    @media(max-width: 875px){
      margin-bottom: 2.5rem;
    }
  }

  /* TV UNESP */
  .tv-unesp  {
    width: 95px;
    height: auto;

    @media(max-width: 875px){
      margin-bottom: 2.5rem;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media(max-width: 875px){
      align-items: center;
      justify-content: center;
    }
  }

  .information h3 {
    margin-bottom: 20px;
  }

  .information h3 a {
    font-size: 1.8rem;
    color: #4e4cec;
  }

  .information h3 a:hover {
    color: #9999ef;
  }

  .information .position {
    margin-bottom: 10px;
    font-size: 1.8rem;
  }

  .information .date {
    font-size: 1.7rem;
  }
`;
