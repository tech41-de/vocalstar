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
<Header />
    <Flex
      direction="column"
      m="0 auto"
      {...props}
    >
    
      <SimpleGrid columns={2} spacing={5}>

      <VStack>
      <div class="list">
      <ul class="mylist">
        <li class="mylist">&#8227; Sing along with your favourite tunes</li>
        <li class="mylist">&#8227; The perfecdt companion for Apple Music Sing</li>
        <li class="mylist">&#8227;  Hear yourself like a pro</li>
        <li class="mylist">&#8227;  Use  wired Apple EarPods for low latency</li>
        <li class="mylist">&#8227;  Select songs from iTunes</li>
        <li class="mylist">&#8227;  Select songs from Spotify <span class="small">(coming soon)</span></li>
        <li class="mylist">&#8227;  Basic Version free forever</li>
        <li class="mylist">&#8227;  Vocalstar Pro with many additional features in 2024</li>
      </ul>
      </div>

<br/><br/>
      <a href="https://apps.apple.com/us/app/vocalstar/id6468662839" target="_blank" >
        <Image  src="appstore.svg" alt="Appstore Vocalstar" />
      </a>

<br/><br/>  
      <Text>Get notified when Vocalstar Pro is available</Text>
      <a href="mailto:info@vocalstar.app?subject=Notify Me&body=Hi, %0D%0A%0D%0APlease notify me when Vocalstar Pro is available! %0D%0A%0D%0AKind regards, %0D%0A[your name]" target="_blank"><Button colorScheme='orange' variant='outline' size='lg'>Notify me</Button></a>
      <br/>
      <a href="/video"><Button colorScheme='yellow' variant='outline' size='lg'>Show me a video</Button></a>
      </VStack>
           <img src="iPhone4.png" class="mobile" width="380" alt="Vocalstar iPhone" />
      </SimpleGrid>
      <Footer />
    </Flex>
    </div>
  )
}
