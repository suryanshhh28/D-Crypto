import { Heading, VStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const TrendingCoins = ({ id, market_cap_rank, image, price_btc }) => {
  return (
    <VStack
      width={"52"}
      bgColor={"whiteAlpha.600"}
      shadow={"lg"}
      padding={"8"}
      borderRadius={"lg"}
      transition={"all 0.5s"}
      justifyContent={"flex-start"}
      margin={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
          backgroundColor: "gold",
        },
      }}
    >
      <Image
        src={image}
        width={"10"}
        height={"10"}
        objectFit={"contain"}
        alt={"Trendinf Coins"}
      />
      <Heading
        size={"md"}
        noOfLines={1}
        textTransform={"uppercase"}
        color={"black"}
      >
        {id}
      </Heading>
      <Heading size={"md"} noOfLines={1} color={"black"}>
        #{market_cap_rank}
      </Heading>
      <Text size={"sm"} noOfLines={1} color={"black"}>
        {price_btc}
      </Text>
    </VStack>
  );
};

const TrendingNFTs = ({ id, name, price, image }) => {
  return (
    <VStack
      width={"52"}
      bgColor={"whiteAlpha.600"}
      shadow={"lg"}
      padding={"8"}
      borderRadius={"lg"}
      transition={"all 0.5s"}
      justifyContent={"flex-start"}
      margin={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
          backgroundColor: "gold",
        },
      }}
    >
      <Image
        src={image}
        width={"10"}
        height={"10"}
        objectFit={"contain"}
        alt={"Trendinf Coins"}
      />
      <Heading
        size={"md"}
        noOfLines={1}
        textTransform={"uppercase"}
        color={"black"}
      >
        {id}
      </Heading>
      <Heading size={"md"} noOfLines={1} color={"black"} textTransform={"lowercase"}>
        {name}
      </Heading>
      <Text size={"sm"} noOfLines={1} color={"black"}>
        {price}
      </Text>
    </VStack>
  );
};

export { TrendingCoins, TrendingNFTs };
