import { React, Fragment } from "react";
import { IconButton, Flex, HStack, Text, Link } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <Fragment>
      <Flex w ='100%' pt="20px" pb='10px' position='fixed' bottom='0px' direction='column' alignItems='center'  bgColor="gray.700">
        <HStack spacing="15px">
          <IconButton
            icon={<FaLinkedinIn />}
            isRound
            colorScheme="red"
            onClick={() => {
              window.open("https://www.linkedin.com/in/ganesanrajalingam/");
            }}
          />
          <IconButton
            icon={<FaGithub />}
            isRound
            colorScheme="red"
            onClick={() => {
              window.open("https://github.com/GANESANGIDON");
            }}
          />
          <IconButton
            icon={<SiGmail />}
            isRound
            colorScheme="red"
            onClick={() => {
              window.open("mailto: ganesanr18g202@gmail.com");
            }}
          />
        </HStack>
        <Text mt="10px" color="white">
          &#169; 2022, made by{" "}
          <Link
            href="https://www.linkedin.com/in/ganesanrajalingam/"
            isExternal
            color="red"
            fontWeight="600"
          >
            Ganesan R
          </Link>
        </Text>
      </Flex>
    </Fragment>
  );
}
