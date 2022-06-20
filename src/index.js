import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-tndhrspz.us.auth0.com"
    clientId="m4UAHCelM5udQBqQj3Y1MybaXP6CkcR0"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
