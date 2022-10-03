import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Router } from './Router';

import './app.css'

export const App = () => {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}