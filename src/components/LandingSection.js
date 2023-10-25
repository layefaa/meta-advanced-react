import React from "react";
import { Avatar, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Flex
      direction={"column"}
      alignItems="center"
      justifyContent="center"
      w="100%"
      py={2}
      color="white"
    >
      <Avatar name="Dan Abrahmov" src="https://i.pravatar.cc/150?img=7" />
      <Text mt={2}>{greeting}</Text>
    </Flex>
    <Box>
      <Heading as="h3" size="xl">
        {bio1}
      </Heading>
      <Heading as="h3" size="xl">
      {bio2}
    </Heading>

    </Box>
  </FullScreenSection>
);

export default LandingSection;
