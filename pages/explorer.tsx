import Container from "components/Container";
import React, { useEffect, useState } from "react";

import { useAccount } from "wagmi";

import NFTCard from "components/NFTCard";
import { TextField } from "@mui/material";

export default function explorer() {
  const { address } = useAccount();
  const [selectAddress, setSelectAddress] =
    useState<string>("brucewangdev.eth");
  const [input, setInput] = useState<string>("");

  const handleChange = () => {
    if (input !== "") {
      setSelectAddress(input);
    }
    setSelectAddress(input);
  };
  useEffect(() => {
    if (address) {
      setSelectAddress(address);
    }
  }, [address]);

  console.log("selectAddress", selectAddress);

  return (
    <Container>
      <div>explorer</div>
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
      <NFTCard address={selectAddress} />
    </Container>
  );
}
