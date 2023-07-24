import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minHeight={"48"}
      paddingX={"16"}
      paddingY={["16", "8"]}
      fontFamily={"Bebas Neue"}
    >
      <Stack
        direction={["column", "row"]}
        height={"full"}
        alignItems={"center"}
      >
        <VStack width={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            About Us
          </Text>
          <Text
            width={["80%","50%"]}
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            In an era defined by rapid technological
            advancements, cryptocurrencies have emerged as a groundbreaking
            innovation, disrupting traditional financial systems and
            transforming the way we perceive and transact value. At D-Crypto, we
            recognize the significance of this digital revolution, and our
            mission is to empower you with knowledge and insights that will
            navigate you through this exciting new frontier.
          </Text>
        </VStack>
        <VStack>
          <Avatar
            src={"https://d.newsweek.com/en/full/1784128/dogecoin.jpg"}
            boxSize={"28"}
            mt={["4", "0"]}
            transition={"all 1s"}
            css={{
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          ></Avatar>
          <Text>~ HERE WE GO!</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
