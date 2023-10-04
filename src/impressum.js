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


export default function ImpressunLayout(props) {

  const navigate = useNavigate();

  return (
<span>
<Header />

<div class="impressum">
 <br/> <br/><br/>
 <center>
  <h1 class="title2 ">Impressum</h1>
 Angaben gemäß § 5 TMG:<br/><br/>
Tech41 GmbH<br/>
Schützenstrasse 110<br/>
22761 Hamburg<br/><br/>
Telefonnummer: +49 172 169 6364<br/>
E-Mail: legal@tech41.de<br/>
Website: tech41.de<br/><br/>
Registergericht: Amtsgericht Berlin<br/>
Registernummer: HRB 234984 B<br/>
Vertretungsberechtigter Geschäftsführer: Mathias Dietrich<br/>
Umsatzsteuer-Identifikationsnummer gemäß § 27 UStG: DE359473027<br/>
Verantwortlich für den Inhalt „Musterkategorie“ nach § 55 Abs. 2 RStV:<br/>
Mathias Dietrich<br/>
Tech41 GmbH<br/>
Schü​tzenstrasse 110<br/>
22761 Hamburg
</center> 
    </div>
     <Footer />
     </span>
  )
}
