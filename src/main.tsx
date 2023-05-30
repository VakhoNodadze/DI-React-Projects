import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import StoreProvider from './store/StoreContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <StoreProvider>
        <CssBaseline />
        <ToastContainer />
        <App />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);
