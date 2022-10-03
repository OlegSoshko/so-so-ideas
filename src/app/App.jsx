import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

import './app.css'

export const App = () => {
  return (
    <BrowserRouter basename={PUBLIC_PATH}>
      <Router />
    </BrowserRouter>
  );
}