import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HomePage } from './pages/home/home.page';
import { Routes } from './routes/route';
import GlobalStyles from "./styles/global";
import { Theme } from './styles/theme';

export const App: React.FC = () => {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Routes>

        </Routes>
      </ThemeProvider>

      <GlobalStyles />
    </>

  )
}
