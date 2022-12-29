import Container from 'src/components/Container';
import React, { useEffect, useState } from 'react';

import { useAccount, useEnsAvatar, useEnsName } from 'wagmi';

import NFTCard from 'src/components/NFTCard';
import { Typography } from '@mui/material';

export default function explorer() {
  const { address } = useAccount();
  const [selectAddress, setSelectAddress] = useState<string>(
    '0x7dC592ED3Ad7335Cf893D71C259D65C4704608ef',
  );
  const [input, setInput] = useState<string>('');
  const { data: ens } = useEnsName({ address: selectAddress });
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address });

  const truncatedAddress =
    selectAddress?.slice(0, 6) + '...' + selectAddress?.slice(-4);

  useEffect(() => {
    if (address) {
      setSelectAddress(address);
    }
  }, [address]);

  return (
    <Container>
      <Typography variant="h5" className="my-4 font-bold">
        Explorer
      </Typography>
      <input
        id="outlined-name"
        placeholder="Search an Address"
        onChange={(e) => setInput(e.target.value)}
        className="rounded-lg w-1/2 h-12 border-2 border-gray-300 px-4"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setSelectAddress(input);
          }
        }}
      />

      <Typography variant="body1" className="font-semibold text-gray-500 my-4">
        Address: {ens || truncatedAddress}
      </Typography>
      {ens && (
        <Typography variant="body1" className="font-bold">
          {ens}
        </Typography>
      )}
      {/* <NftsCard selectAddress={selectAddress} /> */}
      <NFTCard address={selectAddress} />
    </Container>
  );
}
