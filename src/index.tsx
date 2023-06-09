import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UiProvider } from './context/Ui/UiProvider';
import { SWRConfig } from "swr";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './themes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SWRConfig value={ {
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }} >
      <UiProvider>
        <ThemeProvider theme={ darkTheme}>
          <CssBaseline/>
            <App />
        </ThemeProvider>
      </UiProvider>
    </SWRConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
