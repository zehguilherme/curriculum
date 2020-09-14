/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from 'react';

import { StylesMainContainer } from './styles';

import profileImg from '../../assets/profile.jpg';

const ContainerMain = () => {
  const [age, setAge] = useState(0);

  function ageCalculate () {
    const actualDate = new Date().toLocaleDateString();
    const actualDateWithoutBars = actualDate.split('/');

    const actualDay = actualDateWithoutBars[0];
    const actualMonth = actualDateWithoutBars[1];
    const actualYear = actualDateWithoutBars[2];

    const birthdayDate = new Date('02/12/1997').toLocaleDateString();
    const birthdayDateWithoutBars = birthdayDate.split('/');

    const birthdayDay = birthdayDateWithoutBars[0];
    const birthdayMonth = birthdayDateWithoutBars[1];
    const birthdayYear = birthdayDateWithoutBars[2];

    // If you have not yet passed the birthday, you must subtract 1 from the age
    // For example, the year has increased but has not yet arrived on the birthday day and month
    if ((actualMonth < birthdayMonth) || (actualMonth === birthdayMonth)
      && (actualDay < birthdayDay)) {
      setAge((actualYear - birthdayYear) - 1);
    } else {
      setAge(actualYear - birthdayYear);
    }
  }

  useEffect(() => {
    ageCalculate();
  }, []);

  return (
    <StylesMainContainer>
      <div className="information">
        <figure>
          <img src={profileImg} alt="José Guilherme" />
        </figure>

        <div className="text">
          <h1>José Guilherme Paro Monteiro Tomaine</h1>

          <h2>Desenvolvedor de Software</h2>

          <div className="age">
            <i className="fas fa-calendar-alt" />
            <span>
              12 / Fev / 1997
              -
              {' '}
              {age}
              {' '}
              anos
            </span>
          </div>

          <div className="phone">
            <div className="cellphone">
              <a href="tel:+5514981195569" title="Entrar em contato">
                <i className="fas fa-mobile-alt" />
                <span>(14) 98119-5569</span>
              </a>
            </div>

            <div className="landline">
              <a href="tel:+551432274085" title="Entrar em contato">
                <i className="fas fa-phone" />
                <span>(14) 3227-4085</span>
              </a>
            </div>
          </div>

          <div className="address">
            <i className="fas fa-map-marker-alt" />
            <p>
              Rua Eng. Alpheu José Ribas Sampaio, Jardim Inf. Don Henrique, Bauru – SP.
            </p>
          </div>

          <p>
            Busco uma vaga no mercado no âmbito Front-end para
            colocar meus conhecimentos na área da programação, colaborando o máximo possível com as equipes de trabalho e assim proporcionando um crescimento tanto da empresa como pessoal.
          </p>
        </div>
      </div>
    </StylesMainContainer>
  );
};

export default ContainerMain;
