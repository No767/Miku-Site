import React from 'react'
import {
    Heading,
    VStack,
    Text,
    Box,
    Container,
    Flex,
    Img,

  } from "@chakra-ui/react";

export default function IndexShowcase() {
    return (
        <>
        <Flex color="white" direction="column">
        <Box w="100%" h={500} color="white" pt={50}>
          <Flex color="white" direction="row">
            <Container pt={115}>
              <VStack spacing={15}>
                {/* @ts-ignore*/}
                <Heading as="h4" size="lg" align="center">
                  Customization To It's Limits
                </Heading>
                <Text align="center">
                  Miku offers an easy-to-use web dashboard to customize and tailor it to your needs. From 
                  disabling and/or enabling features, to custom events and reminders, and even to anti-raid settings,
                  Miku literally has pretty much everything you need
                </Text>
              </VStack>
            </Container>
            <Container pt={100}>
              <Img
                src="/undraw_assets/customization.svg"
                alt="High Customization"
              />
            </Container>
          </Flex>
        </Box>
        

        <Box w="100%" h={500} color="white" pt={200}>
          <Flex color="white" direction="row">
            <Container pt={75}>
              <Img
                src="/undraw_assets/progress.svg"
                alt="Progress"
              />
            </Container>
            <Container pt={75}>
              <VStack spacing={15}>
                {/* @ts-ignore*/}
                <Heading as="h4" size="lg" align="center">
                  A Unique XP System{" "}
                </Heading>
                <Text align="center">
                  Miku offers an unique chat-based XP system. Earn more to outscore your opponents!
                </Text>
              </VStack>
            </Container>
          </Flex>
        </Box>

        <Box w="100%" h={500} color="white" pt={200}>
          <Flex color="white" direction="row">
            <Container pt={100}>
              <VStack spacing={15}>
                {/* @ts-ignore*/}
                <Heading as="h4" size="lg" align="center">
                  An Economy Unlike Others
                </Heading>
                <Text align="center">
                  Miku is built on an opt-in economy. The currency used is coins, and includes an live auction house system,
                  a full-fledged marketplace system, jobs, ranks, and much much more.
                </Text>
              </VStack>
            </Container>
            <Container pt={100}>
              <Img
                src="/undraw_assets/eco_investing.svg"
                alt="It's an investment"
              />
            </Container>
          </Flex>
        </Box>

        <Box w="100%" h={500} color="white" pt={200}>
          <Flex color="white" direction="row">
            <Container pt={75}>
              <Img
                src="/undraw_assets/git.svg"
                alt="It's FOSS and free real estate"
              />
            </Container>
            <Container pt={90}>
              <VStack spacing={15}>
                {/* @ts-ignore*/}
                <Heading as="h4" size="lg" align="center">
                  Completely Open Source
                </Heading>
                <Text align="center">
                  Miku is completely free and open source, and licesned under Apache-2.0. 
                  This level of transparency allows for rapid development, and new contributors and ideas to flow in much much quickly than other closed-source bots.
                </Text>
              </VStack>
            </Container>
          </Flex>
        </Box>

        </Flex>
        </>

    );
}