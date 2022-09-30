import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainTheme, GlowingRing } from '../ideas';


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainTheme />}/>
      <Route path='spiner' element={<GlowingRing />} />
    </Routes>
  )
}