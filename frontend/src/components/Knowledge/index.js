import React from 'react';

import { StylesKnowledge } from './styles';

import blenderLogo from '../../assets/blender-logo.svg';
import svnLogo from '../../assets/svn-logo.png';
import pascalLogo from '../../assets/pascal-logo.png';

const ContainerKnowledge = () => (
  <StylesKnowledge>
    <h2>Conhecimentos</h2>

    <div className="grid">
      <div className="pascal card">
        <img src={pascalLogo} alt="Pascal logo" />
      </div>

      <div className="c-sharp card">
        <i className="devicon-csharp-line colored" />
      </div>

      <div className="java card">
        <i className="devicon-java-plain-wordmark colored" />
      </div>

      <div className="javascript card">
        <i className="devicon-javascript-plain colored" />
      </div>

      <div className="html5 card">
        <i className="devicon-html5-plain-wordmark colored" />
      </div>

      <div className="css3 card">
        <i className="devicon-css3-plain-wordmark colored" />
      </div>

      <div className="mysql card">
        <i className="devicon-mysql-plain-wordmark colored" />
      </div>

      <div className="oracle card">
        <i className="devicon-oracle-original colored" />
      </div>

      <div className="blender card">
        <img src={blenderLogo} alt="Blender logo" />
      </div>

      <div className="git card">
        <i className="devicon-git-plain-wordmark colored" />
      </div>

      <div className="svn card">
        <img src={svnLogo} alt="SVN logo" />
      </div>

      <div className="react card">
        <i className="devicon-react-original-wordmark colored" />
      </div>

      <div className="react-native card">
        <i className="devicon-react-original colored" />
      </div>

      <div className="node card">
        <i className="devicon-nodejs-plain colored" />
      </div>

      <div className="c-plus-plus card">
        <i className="devicon-cplusplus-line-wordmark colored" />
      </div>

      <div className="english">
        <h3>Inglês técnico</h3>
      </div>
    </div>
  </StylesKnowledge>
);

export default ContainerKnowledge;
