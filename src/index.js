import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context/Product-context";
import { FilterContextProvider } from "./Context/Filter-context";
import { CartProvider } from "./Context/Card-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterContextProvider>
    </AppProvider>
);
