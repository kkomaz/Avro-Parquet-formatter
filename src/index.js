/** @jsx, jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import colors from 'utils/colors'

const theme = {
  colors,
}

ReactDOM.render(
  (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            font-family: Poppins, sans-serif;
          }

          body {
            background: #fafbfc;
          }

          .small {
            font-size: 11px;
          }
        `}
      />
      <App />
    </ThemeProvider>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
