import React from 'react';
import Routes from './routes';

import ScrollBackButton from './components/ScrollBackButton';

import GlobalStyles from './styles/Global';

const App = () => (
  <>
    <GlobalStyles />
    <ScrollBackButton />
    <Routes />
  </>
);

export default App;
