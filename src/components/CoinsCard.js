import React from "react";
import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinsCard = ({
  id,
  name,
  image,
  symbol,
  price,
  currencySymbol = "₹",
}) => {
  return (
    <Link to={`/coin/${id}`}>
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
        <Image
          src={image}
          width={"10"}
          height={"10"}
          objectFit={"contain"}
          alt={"Exchanges"}
        />
        <Heading color={"black"} size={"md"} noOfLines={1} textTransform={"uppercase"}>
          {symbol}
        </Heading>
        <Text color={"black"} fontWeight={"bold"} noOfLines={1}>{name}</Text>
        <Text color={"black"} noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
};

export default CoinsCard;
