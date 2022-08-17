import "reflect-metadata"
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { IocProvider, mockContainer } from './inversify';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IocProvider container={mockContainer}>

      <App />
    </IocProvider>
  </React.StrictMode>
);
