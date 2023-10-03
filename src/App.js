
import './App.css';
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

import * as React from 'react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from '@chakra-ui/react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from "react-dom"

import Landing from "./Landing"


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export default function App() {
  return (
    <ChakraProvider initialColorMode='dark' >
    <BrowserRouter>
      <Routes>
       <Route exact path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  )
}




