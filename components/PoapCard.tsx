import { Tooltip, Typography } from "@mui/material";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PoapCard({ selectAddress }: { selectAddress: string }) {
  const { data, error } = useSWR(
    `https://api.poap.xyz/actions/scan/${selectAddress}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);

  return (
    <div>
      <div>PoapCard</div>
      <div className="grid grid-cols-8 gap-4 my-4 ">
        {data.length !== 0 ? (
          data.map((poap: any) => (
            <div key={poap.tokenId}>
              <Tooltip
                placement="top"
                arrow
                title={
                  <>
                    <Typography className="">{poap.event.name}</Typography>
                    <Typography className="">{poap.event.created}</Typography>
                  </>
                }
              >
                <img
                  className="h-full w-full object-cover rounded-lg relative aspect-square"
                  src={poap.event.image_url}
                />
              </Tooltip>
            </div>
          ))
        ) : (
          <div>No POAPs Found</div>
        )}
      </div>
    </div>
  );
}
