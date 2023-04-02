import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Container from './Container'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Container />
  </ChakraProvider>
)
