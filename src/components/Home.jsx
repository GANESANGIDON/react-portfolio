import { React, Fragment } from "react";
import { Flex, Img, Box, VStack, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Fragment>
      <Flex minH='65vh' my="10px" flexDirection={["column", null, "row"]} alignItems='center' justifyContent='space-around'>
        <Box borderRadius="10px" border="3px outset #ee223d" w="180px">
          <Img src="images/profile-picture.jpg" borderRadius="inherit" />
        </Box>
        <VStack>
          <Heading fontSize='26px' mb='5px'>Ganesan R</Heading>
          <Heading fontSize='24px'>Frontend Web Developer</Heading>
        </VStack>
      </Flex>
    </Fragment>
  );
}
