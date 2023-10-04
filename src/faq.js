import React from "react"
import { Flex } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"
import {   
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Input,
  HStack,
  VStack,
  Button,  
  ButtonGroup,
  Link,
  Spacer, 
  Container,
  Text, SimpleGrid, Image, Center, Square, Circle } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";


export default function PolicyLayout(props) {

  const navigate = useNavigate();

  return (
<div>
<img src="/logo3.png" class="logo" width="286" height="59" />  

 <h1 class="title">FAQ</h1>
 <br/> <br/>
 <center>
 <Center width="800px" color="white">
     
     FAQ

     </Center>
      <Footer />

</center> 
    </div>
  )
}
