import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import theme from "./theme"
import {Auth0Provider} from "@auth0/auth0-react"


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-6277-9jy.us.auth0.com" clientId="P4P5a3ZupOjQ6QXuOHqk3VrWEa3WohNU" redirectUri="http://localhost:3000/home">
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
