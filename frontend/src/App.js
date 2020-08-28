import React from 'react';
import Routes from './routes';

import ScrollBackButton from './components/ScrollBackButton';
import SideBar from './components/SideBar';

import GlobalStyles from './styles/Global';

const App = () => (
  <>
    <ScrollBackButton />
    <SideBar />
    <Routes />
    <GlobalStyles />
  </>
);

export default App;
