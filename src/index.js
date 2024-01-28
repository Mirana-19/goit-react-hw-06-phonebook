import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import './index.css';
import { GlobalStyle } from 'styles/CreateGlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
