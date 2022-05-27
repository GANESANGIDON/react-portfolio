import { React, Fragment } from "react";
import { Box, Stack, Badge, Heading, Icon, Text } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import StudiesData from "./assets/json/studiesData.json";

export default function Studies() {
  return (
    <Fragment>
    <Stack px="20px" my = '10px'>
    <Heading fontSize="xl" textAlign="center" my="20px">
      {" "}
      My Education
    </Heading>
    {StudiesData.map((obj) => {
      return (
        <Box key={obj.id}>
          <Stack direction="row" alignItems="center" spacing="5px">
            <Icon as={FaGraduationCap} fontSize="25px" color="#EC0B41" />
            <Heading alignItems="center" fontSize={["md", "lg"]}>
              {obj.title}
            </Heading>
          </Stack>
          <Badge fontSize={["xs", "sm"]} colorScheme='red' borderRadius='sm'>
            {obj.year}
          </Badge>
          <Text fontSize={["sm", "md"]}>
            {obj.details}
            <span
              style={{
                color: "#EC0B41",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              {obj.score}
            </span>
          </Text>
        </Box>
      );
    })}
    </Stack>
    </Fragment>
  );
}
