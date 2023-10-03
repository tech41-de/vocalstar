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
  Text, SimpleGrid, Image, Center, Square, Circle } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";



export default function LandingLayout(props) {

  const navigate = useNavigate();

  function goApple() {
    navigate("https://apple.com");
  }

  return (
    <Flex

      direction="column"
      align="center"
      maxW={{ xl: "800px" }}
      m="0 auto"
      {...props}
    >
      <Header />


<SimpleGrid columns={2} spacing={10}>
<VStack  >
<UnorderedList class="mylist">

  <ListItem class="mylist">Sing along with your favourite tunes</ListItem>
  <ListItem class="mylist">Hear yourself like a pro</ListItem>
  <ListItem class="mylist">Works with wired Apple EarPods</ListItem>
  <ListItem class="mylist">Enjoy a professional vocal sound</ListItem>
  <ListItem class="mylist">Free for ever</ListItem>
  <ListItem class="mylist">Choose songs from your iTunes library</ListItem>
  <ListItem class="mylist">Spotify song select coming soon</ListItem>
  <ListItem class="mylist">Pro version with recording, editing and publishing features coming in 2024...</ListItem>
</UnorderedList>

<a href="https://apple.com" target="_blank" >
<Image  src="appstore.png" alt="Appstore Vocalstar" />
</a>

<Text>Get notified when Vocalstar Pro is available</Text>
<Input placeholder='email' size='lg'/>
 <Button colorScheme='orange' variant='outline' size='lg'>Notify me</Button>

</VStack>
     <Image src="iPhone.png" alt="Vocalstar iPhone" />
</SimpleGrid>



      <Footer />
    </Flex>
  )
}
