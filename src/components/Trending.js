import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import Error from "./Error";
import { Container, HStack, Heading } from "@chakra-ui/react";
import Loader from "./Loader";
import { TrendingCoins, TrendingNFTs } from "./TrendingCard";

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [trendingNFT, setTrendingNFT] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const { data } = await axios.get(`${server}/search/trending`);
        setTrendingCoins(data.coins);
        setTrendingNFT(data.nfts);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  if (error) return <Error message={"Error while fetching trending data"} />;

  return (
    <Container maxWidth={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Heading
            textAlign={"center"}
            size={"2xl"}
            paddingTop={"4"}
            fontFamily={"Bebase Neue"}
            color={"whiteAlpha.800"}
            letterSpacing={"wider"}
          >
            TRENDING COINS
          </Heading>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {trendingCoins.length === 0 ? (
              <Heading
                textAlign={"center"}
                size={"1xl"}
                paddingBottom={"4"}
                fontFamily={"Bebase Neue"}
                color={"white"}
                textTransform={"uppercase"}
                letterSpacing={"wider"}
              >
                Unable to fetch trending coins right now
              </Heading>
            ) : (
              trendingCoins.map((i) => (
                <TrendingCoins
                  id={i.item.id}
                  market_cap_rank={i.item.market_cap_rank}
                  image={i.item.large}
                  price_btc={i.item.price_btc}
                />
              ))
            )}
          </HStack>
          <Heading
            textAlign={"center"}
            size={"2xl"}
            paddingBottom={"4"}
            fontFamily={"Bebase Neue"}
            color={"whiteAlpha.800"}
            letterSpacing={"wider"}
            paddingTop={"4"}
          >
            TRENDING NFT'S
          </Heading>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {trendingNFT.length === 0 ? (
              <Heading
                textAlign={"center"}
                size={"1xl"}
                paddingBottom={"4"}
                fontFamily={"Bebase Neue"}
                color={"white"}
                textTransform={"uppercase"}
                letterSpacing={"wider"}
              >
                Unable to fetch trending NFT's right now
              </Heading>
            ) : (
              trendingNFT.map((i) => (
                <TrendingNFTs
                  id={i.id}
                  name={i.name}
                  price={i.floor_price_in_native_currency}
                  image={i.thumb}
                />
              ))
            )}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Trending;
