import React, { useState, useEffect } from 'react'

import { StylesMainContainer } from './styles'

import profileImg from '../../assets/profile.jpg'

const ContainerMain = () => {

  const [age, setAge] = useState(0)

  // Automatically updates the age
  function ageCalculate () {
    let actualDate = new Date().toLocaleDateString()
    let actualDateWithoutBars = actualDate.split('/')

    let actualDay = actualDateWithoutBars[0]
    let actualMonth = actualDateWithoutBars[1]
    let actualYear = actualDateWithoutBars[2]

    const birthdayDate = new Date('02/12/1997').toLocaleDateString()
    const birthdayDateWithoutBars = birthdayDate.split('/')

    const birthdayDay = birthdayDateWithoutBars[0]
    const birthdayMonth = birthdayDateWithoutBars[1]
    const birthdayYear = birthdayDateWithoutBars[2]

    let age = actualYear - birthdayYear

    // If you have not yet passed the birthday, you must subtract 1 from the age
    // For example, the year has increased but has not yet arrived on the birthday day and month
    if ((actualMonth < birthdayMonth) || (actualMonth === birthdayMonth) && (actualDay < birthdayDay)) {
      setAge(age--)
    }

    setAge(age)
  }

  useEffect(() => {
    ageCalculate()
  }, []);

  return (
    <StylesMainContainer>
      <div className="information">
        <img src={profileImg} alt="José Guilherme" className="picture" />

        <div className="text">
          <h1>José Guilherme Paro Monteiro Tomaine</h1>

          <h2>Desenvolvedor</h2>

          <div className="nationality-age-others">
            <span> Brasileiro, solteiro, {age} anos</span>
          </div>

          <div className="phone">
            <div className="cellphone">
              <a href="tel:+5514981195569">
                <i className="fas fa-mobile-alt"></i>
                <span>(14) 98119-5569</span>
              </a>
            </div>

            <div className="landline">
              <a href="tel:+551432274085">
                <i className="fas fa-phone"></i>
                <span>(14) 3227-4085</span>
              </a>
            </div>
          </div>

          <div className="address">
            <i className="fas fa-map-marker-alt"></i>

            <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=rua+eng.+alpheu+jose+ribas+sampaio%2C+2-25%2Cjardim+inf.+don+henrique%2Cbauru+-+sp">
              Rua Eng. Alpheu José Ribas Sampaio, 2-25, apto 703, Jardim Inf. Don Henrique, Bauru – SP.
            </a>
          </div>

          <p>Busco uma vaga no mercado no âmbito Front-end ou Back-end para colocar meus conhecimentos na área da programação e/ou modelagem 3D em prática, colaborando o máximo possível com as equipes de trabalho e assim proporcionando um crescimento tanto da empresa como pessoal.</p>

        </div>
      </div>
    </StylesMainContainer>
  )
}

export default ContainerMain
