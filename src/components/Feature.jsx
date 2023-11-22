import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Feature({ title, text, icon, titleColor, bgColor }) {
  return (
    <Stack align={"center"}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={bgColor ?? "gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color={"white"} textAlign={"center"}>
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
}

export default Feature;
