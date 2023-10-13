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


export default function FaqLayout(props) {

  const navigate = useNavigate();

  return (
<div>
<Header />
<br/><br/><br/>
<div class="impressum">
 <center>

  <h1 class="title1">FAQ</h1>
<br/>
  <div class="faqitem">
   <h2 class="title2">Why use wired Earbuds?</h2>
   <p>Bluetooth headsets introduce autio latency. You will hear your voice sounds like far away or even double.</p>
  </div>
<br/>

  <div class="faqitem">
   <h2 class="title2">Can i use Vocalstar with an USB Audiointerface?</h2>
   <p>Yes, you can use USB audiointerfaces which allows you to use large Dynamic Mics and Studio Condenser Mics.
   Use a powered USB Interface and the Apple Lightning to USB 3 Camera Adapter connected to your iPhone. Plug the Audiointerface, for example a Focusrite Scarlett in using a USB cable.
   Refresh Devices on the In & Out screen and you should see your USB interface. Choose the USB audio interface as Input Device.</p>
  </div>
 <br/>

 <div class="faqitem">
   <h2 class="title2">Can i select songs from Spotify?</h2>
   <p>Today you can select songs from your iTunes Music library. We are adding support for Spotify end of 2023.</p>
  </div>
 <br/>

  <div class="faqitem">
   <h2 class="title2">Can i record my self with Vocalstar?</h2>
   <p>The basic version of Vocalstar does not allow recording. The Pro Version will.</p>
  </div>
 <br/>

  <div class="faqitem">
   <h2 class="title2">When will Vocalstart Pro become available?</h2>
   <p>We aim to release Vocalstar Pro with lot of additional features like recording, editing and distribution in Q2 2024.</p>
    <Text>Get notified when Vocalstar Pro is available:</Text>
      <a href="mailto:info@vocalstar.app?subject=Notify Me&body=Hi, %0D%0A%0D%0APlease notify me when Vocalstar Pro is available! %0D%0A%0D%0AKind regards, %0D%0A[your name]" target="_blank"><Button colorScheme='orange' variant='outline' size='lg'>Notify me</Button></a>
  
  </div>
  <br/>

    <div class="faqitem">
   <h2 class="title2">Will Vocalstart Pro do stem separation and auto-tuning?</h2>
   <p>We will include support for stem separation (splitting audio tracks into vocal, drums, bass...) as well as auto-tuning of the vocal tracks</p>
   </div>
  <br/>


</center> 
    </div>
     <Footer />
</div>
  )
}
