import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { UserProvider } from "./UserContext.jsx";
import { DonorsProvider } from "./DonorsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DonorsProvider>
          <App />
        </DonorsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
