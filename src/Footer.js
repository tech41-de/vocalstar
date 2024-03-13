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

import CookieConsent from "react-cookie-consent";

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
        <div class="copy"><a class="copy" href="https://tech41.de" target="_blank">©2024 TECH41 GmbH</a></div><Spacer/>
        <Link class="copy" href="https://vocalstar.app">Home</Link><Spacer/>
        <Link class="copy" href="impressum">Impressum</Link><Spacer/>
        <Link class="copy" href="policy">Privacy Policy</Link><Spacer/>
        <Link class="copy" href="/webterms.pdf" target="_blank">WebTerms</Link><Spacer/>
        <Link class="copy" href="/appterms.pdf" target="_blank">AppTerms</Link><Spacer/>
        <Link class="copy" href="faq">FAQ</Link><Spacer/>
        <div class="copy"><a class="copy" href="mailto:info@vocalstar.app" target="_blank">Contact Us</a></div><Spacer/>
       </HStack>

       <CookieConsent
          location="bottom"
          buttonText="I Accept"
          cookieName="Vocalstar"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}></span>
      </CookieConsent>

      </VStack>
      </Flex>
  )
}