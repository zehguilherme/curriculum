import React from 'react';
import Routes from './routes';

import ScrollBackButton from './components/ScrollBackButton';

import GlobalStyles from './styles/Global';

const App = () => (
  <>
    <ScrollBackButton />
    <Routes />
    <GlobalStyles />
  </>
);

export default App;
