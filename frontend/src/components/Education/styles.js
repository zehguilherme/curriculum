import styled from 'styled-components'

export const StylesEducation = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  margin: 60px 60px;
  padding: 30px 50px;
  box-shadow: 2px 2px 2px 2px #aaaaaa;
  border-radius: 10px;

  h2 {
    color: #312cec;
    margin-bottom: 20px;
    font-size: 20px;
  }

  img {
    object-fit: cover;
    transition: transform 500ms;
  }

  img:hover {
    transform: scale(1.2);
  }

  .unisagrado {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 179px;
  }

  .unisagrado .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .unisagrado .information a {
    font-size: 18px;
    color: blue;
  }

  .unisagrado .information .course {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .unisagrado .information .years {
    font-size: 17px;
  }
`
