import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';
import { ApolloProvider } from '@apollo/client';
import client from '@apollo/ApolloClient';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import en from '@lang/en.json';
import de from '@lang/de.json';

import '@styles/index.css';

import App from './App';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      translation: en
    },
    de: {
      translation: de
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
