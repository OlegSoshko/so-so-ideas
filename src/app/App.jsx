import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Router } from './Router';
import { GoBack } from '../components'; 

import './app.css';


export const App = () => {
  return (
    <HashRouter>
      <GoBack />
      <Router />
    </HashRouter>
  );
}