import styled from 'styled-components'

export const StylesProfessionalExperience = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 2px 2px 2px 2px #aaaaaa;
  border-radius: 10px;
  margin: 60px;

  h2 {
    color: #312cec;
    margin-bottom: 35px;
  }

  img {
    object-fit: cover;
    transition: transform 500ms;
  }

  img:hover {
    transform: scale(1.2);
  }

  /* ABC71 */
  .abc71 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  .abc71 img {
    width: 148px;
    height: auto;
  }

  .abc71 .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .abc71 .information h3 {
    margin-bottom: 20px;
  }

  .abc71 .information p {
    margin-bottom: 10px;
  }

  /* Speksciences */
  .speksciences {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  .speksciences img {
    width: 95px;
    height: auto;
  }

  .speksciences .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .speksciences .information h3 {
    margin-bottom: 20px;
  }

  .speksciences .information p {
    margin-bottom: 10px;
  }

  /* TV UNESP */
  .tv-unesp {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tv-unesp img {
    width: 95px;
    height: auto;
  }

  .tv-unesp .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .tv-unesp .information h3 {
    margin-bottom: 20px;
  }

  .tv-unesp p {
    margin-bottom: 10px;
  }
`
