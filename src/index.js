import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "react-oidc-context";
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './redux/store';
import { Provider } from 'react-redux'; 


const clientId = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
);

reportWebVitals();
