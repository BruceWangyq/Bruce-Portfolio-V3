import Container from 'src/components/Container';
import React, { useEffect, useState } from 'react';

import { useAccount, useEnsName } from 'wagmi';

import NFTCard from 'src/components/NFTCard';
import { TextField, Typography } from '@mui/material';
import PoapCard from 'src/components/PoapCard';
import NftsCard from 'src/components/NftsCard';

export default function explorer() {
  const { address } = useAccount();
  const [selectAddress, setSelectAddress] = useState<string>(
    '0x7dC592ED3Ad7335Cf893D71C259D65C4704608ef',
  );
  const [input, setInput] = useState<string>('');
  const { data: ens } = useEnsName({ address: selectAddress });

  console.log('selectAddress', selectAddress);

  return (
    <Container>
      <Typography variant="h5" className="my-4 font-bold">
        Explorer
      </Typography>
      <TextField
        id="outlined-name"
        label="Search an Address"
        placeholder="Search Token"
        onChange={(e) => setInput(e.target.value)}
        className="w-1/2 rounded-lg"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setSelectAddress(input);
          }
        }}
      />
      <Typography variant="body1" className="font-semibold text-gray-500 my-4">
        Address: {selectAddress}
      </Typography>
      {ens && (
        <Typography variant="body1" className="font-bold">
          {ens}
        </Typography>
      )}
      {/* <NftsCard selectAddress={selectAddress} /> */}
      <NFTCard address={selectAddress} />
      <PoapCard selectAddress={selectAddress} />
    </Container>
  );
}
