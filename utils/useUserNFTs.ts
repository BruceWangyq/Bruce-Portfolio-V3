import { useCallback, useMemo } from "react";
import useSWRInfinite from "swr/infinite";

import { NFT } from "../schemas/nft";

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_NFTPORT_API_KEY as string,
    },
  }).then((res) => res.json());

export const useUserNFTs = (address: string) => {
  const getUserNFTsKey = useCallback(
    (pageIndex: number, previousPageData?: { continuation?: string }) => {
      if (previousPageData && !previousPageData.continuation) return null;
      return `https://api.nftport.xyz/v0/accounts/${address}?chain=ethereum&include=metadata${
        previousPageData?.continuation
          ? `&continuation=${previousPageData.continuation}`
          : ""
      }`;
    },
    [address]
  );

  const {
    data: raw,
    setSize,
    ...res
  } = useSWRInfinite(getUserNFTsKey, fetcher);

  const data = useMemo(() => {
    if (!raw) return undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nfts: NFT[][] = raw?.map((each: { nfts: any[] }) =>
      each?.nfts?.map(
        (nft) =>
          ({
            contractAddress: nft.contract_address,
            tokenId: nft.token_id,
            owner: address,
            fileUrl: nft.cached_file_url || nft.file_url,
          } as NFT)
      )
    );

    return nfts;
  }, [address, raw]);

  const hasNextPage = useMemo(
    () => (raw ? Boolean(raw[raw.length - 1]?.continuation) : false),
    [raw]
  );

  return { data, hasNextPage, setSize, ...res };
};
