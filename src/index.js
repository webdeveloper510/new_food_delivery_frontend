import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { Provider } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from "./store";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Auth0Provider
    domain="dev-rbres5e803a0aak1.us.auth0.com"
    clientId="T4OpxfoIHiQXqxKmSGnH3FozQEOXqt1l"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  </Auth0Provider>,

);

serviceWorker.unregister()
