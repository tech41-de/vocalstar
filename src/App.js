
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
import Policy from "./Policy"
import FAQ from "./Faq"
import Impressum from "./Impressum"

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export default function App() {
  return (
    <ChakraProvider initialColorMode='dark' >
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/policy" element={<Policy/>} />
        <Route exact path="/faq" element={<FAQ/>} />
        <Route exact path="/impressum" element={<Impressum/>} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  )
}




