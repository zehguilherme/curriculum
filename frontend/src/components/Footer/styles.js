import styled from 'styled-components'

export const StylesFooter = styled.footer`
  box-shadow: 2px 2px 2px 2px #aaaaaa;
  border-radius: 10px;
  display: flex;
  margin: 60px 60px auto 60px;
  justify-content: space-between;
  padding: 20px;

  a i {
    font-size: 35px;
    color: gray;
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

`
