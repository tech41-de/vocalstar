
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


export default function VideoLayout(props) {

  const navigate = useNavigate();

  return (
  	<div>
  	<Header />
	<br/><br/>

	<div class="video">
	<center>
		<a href="https://vocalstar.app"><Button colorScheme='yellow' variant='outline' size='lg'>Home</Button></a><br/><br/>
	<iframe width="400" height="680" src="https://www.youtube.com/embed/Vr9gXAHunds?si=OUXwC6cIVajfjzhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	<Footer/>
	</center>

	</div>
	
	
	</div>
	)
}