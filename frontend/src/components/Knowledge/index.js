import React from 'react';

import { StylesKnowledge } from './styles';

import Item from './Components/Item';

import blenderLogo from '../../assets/blender-logo.svg';
import svnLogo from '../../assets/svn-logo.png';
import reactNativeLogo from '../../assets/react-native-logo.png';

const ContainerKnowledge = () => (
  <StylesKnowledge>
    <h2>Conhecimentos</h2>

    <div className="grid">
      <Item
        iconClassName="devicon-csharp-line colored"
      />

      <Item
        iconClassName="devicon-java-plain-wordmark colored"
      />

      <Item
        iconClassName="devicon-javascript-plain colored"
      />

      <Item
        iconClassName="devicon-html5-plain-wordmark colored"
      />

      <Item
        iconClassName="devicon-css3-plain-wordmark colored"
      />

      <Item
        iconClassName="devicon-mysql-plain-wordmark colored"
      />

      <Item
        iconClassName="devicon-oracle-original colored"
      />

      <Item
        image={blenderLogo}
        imageAlt="Blender"
      />

      <Item
        iconClassName="devicon-git-plain-wordmark colored"
      />

      <Item
        image={svnLogo}
        imageAlt="SVN"
      />

      <Item
        iconClassName="devicon-react-original-wordmark colored"
      />

      <Item
        image={reactNativeLogo}
        imageAlt="React Native"
      />

      <Item
        iconClassName="devicon-nodejs-plain colored"
      />

      <Item
        iconClassName="devicon-cplusplus-line-wordmark colored"
      />

      <Item
        title3="Inglês técnico"
      />
    </div>
  </StylesKnowledge>
);

export default ContainerKnowledge;
