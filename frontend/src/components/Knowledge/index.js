import React from 'react'

import { StylesKnowledge } from './styles'

import blenderLogo from '../../assets/blender-logo.svg'
import svnLogo from '../../assets/svn-logo.png'
import pascalLogo from '../../assets/pascal-logo.png'

const ContainerKnowledge = () => {
  return (
    <StylesKnowledge>
      <h2>Conhecimentos</h2>

      <div className="grid">
        <div className="pascal card">
          <img src={pascalLogo} alt="Pascal logo" />
        </div>

        <div className="c-sharp card">
          <i class="devicon-csharp-line colored"></i>

          <div className="information">
            <p>Nível: Básico</p>
            <p>Criação de aplicações web - Visual Studio</p>
          </div>
        </div>

        <div className="java card">
          <i class="devicon-java-plain-wordmark colored"></i>
        </div>

        <div className="javascript card">
          <i class="devicon-javascript-plain colored"></i>
        </div>

        <div className="html5 card">
          <i class="devicon-html5-plain-wordmark colored"></i>
        </div>

        <div className="css3 card">
          <i class="devicon-css3-plain-wordmark colored"></i>
        </div>

        <div className="mysql card">
          <i class="devicon-mysql-plain-wordmark colored"></i>
        </div>

        <div className="oracle card">
          <i class="devicon-oracle-original colored"></i>
        </div>

        <div className="blender card">
          <img src={blenderLogo} alt="Blender logo" />
        </div>

        <div className="git card">
          <i class="devicon-git-plain-wordmark colored"></i>
        </div>

        <div className="svn card">
          <img src={svnLogo} alt="SVN logo" />
        </div>

        <div className="react card">
          <i class="devicon-react-original-wordmark colored"></i>
        </div>

        <div className="react-native card">
          <i class="devicon-react-original colored"></i>
        </div>

        <div className="node card">
          <i class="devicon-nodejs-plain colored"></i>
        </div>

        <div className="c-plus-plus card">
          <i class="devicon-cplusplus-line-wordmark colored"></i>
        </div>

        <div className="english">
          <h3>Inglês técnico</h3>
        </div>
      </div>
    </StylesKnowledge>
  )
}

export default ContainerKnowledge
