import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import CartProvider from './context/cartContext'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN || process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID || process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </Auth0Provider>
  </React.StrictMode>
)
