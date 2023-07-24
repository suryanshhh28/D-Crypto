import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const DerivativeCard = ({ index_id, price, symbol }) => {
  return (
    <VStack
      width={"52"}
      bgColor={"whiteAlpha.600"}
      shadow={"lg"}
      padding={"8"}
      borderRadius={"lg"}
      transition={"all 0.5s"}
      margin={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
          backgroundColor: "gold",
        },
      }}
    >
      <Heading size={"md"} noOfLines={1} color={"black"}>
        {symbol}
      </Heading>
      <Text size={"sm"} noOfLines={1} fontWeight={"bold"} color={"black"}>
        {index_id}
      </Text>
      <Text size={"sm"} noOfLines={1} color={"black"}>
        Price: ${price}
      </Text>
    </VStack>
  );
};

export default DerivativeCard;
