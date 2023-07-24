import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import Error from "./Error";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import DerivativeCard from "./DerivativeCard";

const Derivatives = () => {
  const [derivative, setDerivative] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDerivative = async () => {
      try {
        const response = await axios.get(`${server}/derivatives`);
        setDerivative(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchDerivative();
  }, []);

  if (error) return <Error message={"Error while fetching derivatives"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {derivative.slice(0,100).map((i) => (
              <DerivativeCard
                index_id={i.index_id}
                price={i.price}
                symbol={i.symbol}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Derivatives;
