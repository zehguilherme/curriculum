import React from 'react'

import { StylesEducation } from './styles'

import unisagradoLogo from '../../assets/unisagrado-logo.png'

const ContainerEducation = () => {
  return (
    <StylesEducation>
      <h2>Formação</h2>

      <div className="unisagrado">
        <img src={unisagradoLogo} alt="Unisagrado" />

        <div className="information">
          <h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unisagrado.edu.br/">
              Centro Universitário Sagrado Coração - Unisagrado
            </a>
          </h3>

          <p className="course">Ciência da Computação</p>
          <p className="years">2016 - 2019</p>
        </div>
      </div>
    </StylesEducation>
  )
}

export default ContainerEducation
