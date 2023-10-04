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
  Text, SimpleGrid, Image, Center, Square, Circle } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";



export default function LandingLayout(props) {

  const navigate = useNavigate();

  function goApple() {
    navigate("https://apple.com");
  }

  return (

<div>
<img src="/logo3.png" class="logo" width="286" height="59" />  
    <Flex
      direction="column"
      m="0 auto"
      {...props}
    >
        
    
      <SimpleGrid columns={2} spacing={5}>

      <VStack>

      <Spacer/>
      <ul class="mylist">
        <li class="mylist">Sing along with your favourite tunes</li>
        <li class="mylist">Hear yourself like a pro</li>
        <li class="mylist">Use  wired Apple EarPods for low latency</li>
        <li class="mylist">Use songs from your iTunes library</li>
        <li class="mylist">Use songs from  Spotify <span class="small">(coming soon)</span></li>
         <li class="mylist">Basic Version free forever</li>
        <li class="mylist">Vocalstar Pro with many additional features <span class="small">(coming 2024)</span></li>
      </ul>

<br/><br/>
      <a href="https://apple.com" target="_blank" >
        <Image  src="appstore.svg" alt="Appstore Vocalstar" />
      </a>

<br/><br/>  <br/>
      <Text>Get notified when Vocalstar Pro is available</Text>
      <Input placeholder='email' w="300px"/>
      <Button colorScheme='orange' variant='outline' size='lg'>Notify me</Button>

      </VStack>
           <img src="iPhone2.png" width="390" alt="Vocalstar iPhone" />
      </SimpleGrid>
      <Footer />
    </Flex>
    </div>
  )
}
