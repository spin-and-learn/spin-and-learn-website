import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import axios from 'axios';
import MainProvider from './contexts/MainContext';

// Styles
import './index.css';
import 'antd/dist/antd.css'
import "./styles/main.css"
import "./styles/forms.scss"
import "./styles/employees.scss"
import "./styles/modals.scss"
import "./styles/dashboard.scss"
import "./styles/chart.scss"
import "./styles/responsive.css"

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

// Global axios
axios.defaults.baseURL = process.env.REACT_APP_API_MAIN_SERVER_URL


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <MainProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </MainProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
