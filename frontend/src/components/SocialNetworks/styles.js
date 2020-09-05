/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesSocialNetworks = styled.section`
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 10px;
  display: flex;
  margin: 6rem 6rem auto 6rem;
  justify-content: space-between;
  padding: 2rem;

  @media(max-width: 650px){
    margin: 3.0rem 3.0rem auto 3.0rem;
  }

  a i {
    font-size: 35px;
    color: gray;

    @media(max-width: 360px){
      font-size: 30px;
    }
  }

  a i {
    transition: color 0.3s;
  }

  /* Email */
  a i.fas:hover {
    color: blue;
  }

  /* GitHub */
  a i.fa-github:hover {
    color: black;
  }

  /* Linkedin */
  a i.fa-linkedin:hover {
    color: #0073b2;
  }

  /* WhatsApp */
  a i.fa-whatsapp:hover {
    color: #00E676;
  }

  /* Telegram */
  a i.fa-telegram:hover {
  color: #2CA5E0;
  }

`;
