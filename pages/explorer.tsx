import Container from "components/Container";
import React, { useEffect, useState } from "react";

import { useAccount } from "wagmi";

import NFTCard from "components/NFTCard";
import { TextField, Typography } from "@mui/material";
import PoapCard from "components/PoapCard";
import NftsCard from "components/NftsCard";

export default function explorer() {
  const { address } = useAccount();
  const [selectAddress, setSelectAddress] = useState<string>(
    "0x7dC592ED3Ad7335Cf893D71C259D65C4704608ef"
  );
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (address) {
      setSelectAddress(address);
    }
  }, [address]);

  console.log("selectAddress", selectAddress);

  return (
    <Container>
      <Typography variant="h4" className="my-4">
        Explorer
      </Typography>

      <TextField
        id="outlined-name"
        label="Address"
        placeholder="Search Token"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSelectAddress(input);
          }
        }}
      />
      <NftsCard selectAddress={selectAddress} />
      {/* <NFTCard address={selectAddress} /> */}
      <PoapCard selectAddress={selectAddress} />
    </Container>
  );
}
