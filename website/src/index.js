import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from "react-router-dom"
import MainProvider from './contexts/MainContext'

// styles
import "./styles/index.css"
import "./styles/Home.scss"
import "./styles/forms.scss"
import "./styles/colors.scss"
import "./styles/Footer.scss"
import "./styles/programs.scss"
import "./styles/contact.scss"
import "./styles/inputs.scss"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <MainProvider>
            <RouterProvider router={Router} />
        </MainProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
