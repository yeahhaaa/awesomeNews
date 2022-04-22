import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import { BrowserRouter } from '../node_modules/react-router-dom/index';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/:category?" component={NewsPage} />
    </BrowserRouter>
  );
};

export default App;
