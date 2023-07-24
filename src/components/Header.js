import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      padding={"4"}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      justifyContent={"space-evenly"}
      fontFamily={"Bebas Neue"}
    >
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">
          <Text letterSpacing={"wider"}>Home</Text>
        </Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">
          <Text letterSpacing={"wider"}>Exchanges</Text>
        </Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">
          <Text letterSpacing={"wider"}>Coins</Text>
        </Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/trending">
          <Text letterSpacing={"wider"}>Trending</Text>
        </Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/derivatives">
          <Text letterSpacing={"wider"}>Derivatives</Text>
        </Link>
      </Button>
    </HStack>
  );
};

export default Header;
