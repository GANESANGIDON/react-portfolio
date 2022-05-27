import { React, Fragment } from "react";
import {FiSend} from 'react-icons/fi';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Container,
  VStack,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Fragment>
      <Container maxW={["xs", "sm", "lg"]} my="50px" bgColor="">
        <form action="https://formspree.io/f/xzbyqjqz" method="post">
          <VStack spacing="15px">
            <Input
              type="text"
              name="Website"
              value="React portfolio"
              display={"none"}
            />
            <FormControl isRequired>
              <FormLabel htmlFor="Name">Name:</FormLabel>
              <Input type="text" id="Name" name="name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="Email">Email ID:</FormLabel>
              <Input type="email" id="Email" name="mailID" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="Message">Message:</FormLabel>
              <Textarea resize="none" id="Message" name="message" />
            </FormControl>
            <Button type="submit" colorScheme="red" leftIcon={<FiSend />}>
              Send
            </Button>
          </VStack>
        </form>
      </Container>
    </Fragment>
  );
}
