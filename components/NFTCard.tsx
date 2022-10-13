import React from "react";
import useSWR from "swr";
import { useAccount } from "wagmi";
import {
  ButtonBase,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useUserNFTs } from "utils/useUserNFTs";
import Link from "next/link";
import Image from "next/image";

export default function NFTCard({ address }: { address: string }) {
  const {
    data: nfts,
    hasNextPage,
    isValidating: isLoading,
    setSize,
  } = useUserNFTs(address);
  console.log(nfts);

  return (
    <div className="flex flex-col">
      {nfts?.length && (
        <div className="grid grid-cols-8 gap-4 my-4 ">
          {nfts?.map((_nfts) =>
            _nfts?.map((nft) => (
              <Link
                href={`https://opensea.io/assets/${nft.contractAddress}/${nft.tokenId}`}
                key={`${nft.contractAddress}.${nft.tokenId}`}
              >
                <a>
                  <div className="relative aspect-square ">
                    <img
                      className="h-full w-full object-cover rounded-lg"
                      src={
                        nft.fileUrl ||
                        `https://static.thenounproject.com/png/583402-200.png`
                      }
                      alt={`${nft.contractAddress}.${nft.tokenId}`}
                    />
                  </div>
                </a>
              </Link>
            ))
          )}
        </div>
      )}
      <div className="py-4 text-center">
        {isLoading ? (
          "Loading..."
        ) : hasNextPage ? (
          <button onClick={() => setSize((prev) => prev + 1)}>Load More</button>
        ) : nfts?.[0]?.length ? null : (
          "No Items Found"
        )}
      </div>
    </div>
  );
}
