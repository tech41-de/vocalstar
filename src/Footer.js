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
    
        <Text class="copy">Please ontact us: <a href="mailto:info@vocalstar.app">info@vocalstar.app</a></Text><Spacer/>
         <Link href="">Impressum</Link><Spacer/>
         <Link href="">Policies</Link>
         <Text class="copy">© TECH41 GmbH, Hamburg, Germany, 2023</Text>
       </HStack>
      </VStack>
    </Flex>
  )
}