import React from "react";
import ReactDOM from "react-dom/client";

// react-redux
import { Provider as ReduxProvider } from "react-redux";
import { store } from './store';

// React-route
import { BrowserRouter } from "react-router-dom";

// component
import App from "./App";

// Css
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>
)