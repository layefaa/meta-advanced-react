import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" color="black" borderRadius={'lg'}>
      <HStack w="100%">
        <Image src={imageSrc}  borderRadius={'lg'}/>
      </HStack>
      <VStack p="4" alignItems={'flex-start'}>
        <Heading as="h4" size='md'>{title}</Heading>
        <Text opacity={.7}>{description}</Text>
        <Text>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
