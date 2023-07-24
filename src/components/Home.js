import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      width={"full"}
      height={"85vh"}
      fontFamily={"Bebas Neue"}
    >
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "-20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          width={"full"}
          height={"full"}
          objectFit={"contain"}
          src={btc}
          filter={"grayscale(1)"}
          transition={"all 1s"}
          _hover={{
            filter: "grayscale(0)",
          }}
        ></Image>
      </motion.div>
      <Text
        fontSize={"8xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        marginTop={"-20"}
        letterSpacing={"widest"}
      >
        D-CRYPTO
      </Text>
    </Box>
  );
};

export default Home;
