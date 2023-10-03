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
  Image,
  SimpleGrid,
  Link,
} from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'

export default function HeaderLayout(props) {
  return (

    <Flex width={"100vw"} height={"20vh"} alignContent={"center"} justifyContent={"center"}>
    <Link href="https://vocalstar.app">vocalstar.app</Link>
<Center>
     <Image  src="/vocalstar_header.png"  height={"16vh"}  width={"80vw"}  alt="Vocalstar" />
</Center>




</Flex>


  )
}