import Container from "components/Container";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function explorer() {
  const { data, error } = useSWR(
    `https://eth-mainnet.alchemyapi.io/v2/${
      process.env.NEXT_PUBLIC_ALCHEMY_ID
    }/getNFTs/?owner=${"0x8ff7f00fc3888387e7459785f73769999a65cd57"}`,
    fetcher
  );

  console.log(data);
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <Container>
      <div>explorer</div>
    </Container>
  );
}
