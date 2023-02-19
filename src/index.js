import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./scrollToTop"
import { GlobalStyle } from "./globalStyles"

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <App />
    </BrowserRouter>
)