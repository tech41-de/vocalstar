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

 <h1 class="title">Impressum</h1>
 <br/> <br/>
 <center>
 <Center width="800px" color="white">
     
 Angaben gemäß § 5 TMG:<br/><br/>

 

Tech41 GmbH<br/>

Schützenstrasse 110<br/>

22761 Hamburg<br/><br/>

 

Telefonnummer: +49 172 169 6364<br/><br/>

 

E-Mail: legal@tech41.de<br/>

Website: Tech41.de<br/><br/>

 

Registergericht: Amtsgericht Berlin<br/>

Registernummer: HRB 234984 B<br/>

Vertretungsberechtigter Geschäftsführer: Mathias Dietrich<br/>

Umsatzsteuer-Identifikationsnummer gemäß § 27 UStG: DE359473027<br/>

​

Verantwortlich für den Inhalt „Musterkategorie“ nach § 55 Abs. 2 RStV:<br/>

Mathias Dietrich<br/>

Tech41 GmbH<br/>

Schü​tzenstrasse 110<br/>

22761 Hamburg<br/>

     </Center>
      <Footer />

</center> 
    </div>
  )
}
