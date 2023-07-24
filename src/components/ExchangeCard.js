import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = ({ name, image, rank, url }) => {
  return (
    <a href={url} target="blank">
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
            backgroundColor: "gold"
          },
        }}
      >
        <Image
          src={image}
          width={"10"}
          height={"10"}
          objectFit={"contain"}
          alt={"Exchanges"}
        />
        <Heading size={"md"} noOfLines={1} color={"black"}>
          #{rank}
        </Heading>
        <Text noOfLines={1} color={"black"}>{name}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
