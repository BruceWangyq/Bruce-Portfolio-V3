import { Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NftsCard({ selectAddress }: { selectAddress: string }) {
  const { data, error } = useSWR(
    `https://eth-mainnet.alchemyapi.io/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}/getNFTs/?owner=${selectAddress}`,
    fetcher,
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);
  return (
    <>
      <Typography variant="body1" className="font-bold">
        NFTs
      </Typography>
      <hr />
      <div className="grid grid-cols-8 gap-4 my-4 ">
        {data?.ownedNfts?.map((nft: any) => (
          <div key={nft.id.tokenId}>
            <Link
              href={`https://opensea.io/assets/${
                nft.contract.address
              }/${parseInt(nft.id.tokenId, 16)}`}
              key={`${nft.contract}.${nft.id.tokenId}`}
            >
              <Tooltip
                placement="top"
                arrow
                title={
                  <>
                    <Typography className="">{nft.metadata.name}</Typography>
                    <Typography className="">Click to check</Typography>
                  </>
                }
              >
                <img
                  className="h-full w-full object-cover rounded-lg relative aspect-square"
                  alt={``}
                  src={
                    nft.media[0].gateway ||
                    `https://static.thenounproject.com/png/583402-200.png`
                  }
                />
              </Tooltip>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
