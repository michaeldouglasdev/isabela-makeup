import React from 'react';
import { Route, Routes as RoutesReact, BrowserRouter } from "react-router-dom";
import { HomePage } from '../pages/home/home.page';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <RoutesReact>
      <Route path="/" element={<HomePage />} />
    </RoutesReact>
  </BrowserRouter>
)