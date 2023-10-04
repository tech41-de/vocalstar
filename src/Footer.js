import React from "react"
import { Flex } from "@chakra-ui/react"
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
  Link,
  HStack,
  VStack,
  Divider,
  Spacer,
} from '@chakra-ui/react'



export default function FooterLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
    <VStack>
       <Spacer/>
       <Spacer/>
       <Divider/>
      <HStack>
        <div class="copy">©2023 TECH41 GmbH</div><Spacer/>
         <Link class="copy" href="">Privacy Policy</Link><Spacer/>
        <Link class="copy" href="">WebTerms</Link><Spacer/>
        <Link class="copy" href="">AppTerms</Link><Spacer/>
        <Link class="copy" href="">FAQ</Link><Spacer/>
        <div class="copy"><a class="copy" href="mailto:info@vocalstar.app">Contact Us</a></div><Spacer/>

        
       </HStack>
      </VStack>
    </Flex>
  )
}