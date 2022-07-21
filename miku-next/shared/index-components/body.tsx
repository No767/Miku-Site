import React from 'react'
import {
    Center,
    VStack,
    HStack,
    Text,
    Hide,
    Show,
    Container,
    Image
  } from "@chakra-ui/react";
  import { SiGithub } from "react-icons/si";
  import {MdDashboardCustomize, MdAttachMoney } from 'react-icons/md'

  
export default function MainBody() {
    return (
        <>
        <Center>
            <VStack spacing={25} mx={150} align="center">
                <Text fontSize="4xl" align="center" color="white" pt={65}>The Multipurpose Bot made to be simple</Text>
                
            </VStack>
            
        </Center>
        <HStack direction="row" spacing={25} mx={150} pt={25} align="center">
            <Image src="/logos/miku_smaller.png" pl={150}/>
                
        </HStack>
        <Hide below="lg">
            <HStack align="center" justify="center" spacing={150} pt={75} mx={50}>
              <Container>
                <Center pb={25}>
                  <MdDashboardCustomize size={50} style={{ color: "#cccccc" }} />
                </Center>
                <Text align="center" fontSize="xl">
                  In-depth Customization
                </Text>
                <Text align="center" pt={25} mx={15}>
                  Miku offers a web dashboard (coming soon), and commands to customize your experience. 
                </Text>
              </Container>
              <Container>
                <Center pb={25}>
                  <MdAttachMoney size={50} style={{ color: "#cccccc" }} />
                </Center>
                <Text align="center" fontSize="xl">
                  A Economy none like Others
                </Text>
                <Text align="center" pt={25} mx={15}>
                  Miku offers an economy where users can auction items, and compete for the richest user
                </Text>
              </Container>
              <Container>
                <Center pb={25}>
                  <SiGithub size={50} style={{ color: "#cccccc" }} />
                </Center>
                <Text align="center" fontSize="xl">
                  Completely free and Open Source
                </Text>
                <Text align="center" pt={25} mx={15}>
                  Miku will always remain as free and open source software
                </Text>
              </Container>
            </HStack>
          </Hide>

          <Show below="lg">
            <VStack align="center" justify="center" spacing={100} pt={75} mx={50}>
            <Container>
                <Center pb={25}>
                  <MdDashboardCustomize size={50} style={{ color: "#cccccc" }} />
                </Center>
                <Text align="center" fontSize="xl">
                  In-depth Customization
                </Text>
                <Text align="center" pt={25} mx={15}>
                  Miku offers a web dashboard (coming soon), and commands to customize your experience. 
                </Text>
              </Container>
              <Container>
                <Center pb={25}>
                  <MdAttachMoney size={50} style={{ color: "#cccccc" }} />
                </Center>
                <Text align="center" fontSize="xl">
                  A Economy none like Others
                </Text>
                <Text align="center" pt={25} mx={15}>
                  Miku offers an economy where users can auction items, and compete for the richest user
                </Text>
              </Container>
              <Container>
                <Center pb={25}>
                  <SiGithub size={50} style={{ color: "#cccccc" }} />
                </Center>
                <Text align="center" fontSize="xl">
                  Completely free and Open Source
                </Text>
                <Text align="center" pt={25} mx={15}>
                  Miku will always remain as free and open source software
                </Text>
              </Container>
            </VStack>
          </Show>
        </>
    );
}