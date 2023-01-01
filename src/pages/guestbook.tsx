import Container from 'src/components/Container';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import GuestBook from 'contracts/abi/GuestBook.json';
import { useCallback, useEffect, useState } from 'react';
import { Button, CircularProgress, TextField, Typography } from '@mui/material';
import { truncatedAddress } from 'src/utils/helpers';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface Message {
  allMessages: string[];
}

export default function guestbook() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [newMessage, setNewMessage] = useState<string>('');
  const { config } = usePrepareContractWrite({
    address: GuestBook.address as any,
    abi: GuestBook.abi,
    functionName: 'message',
    args: [newMessage],
  });

  const { isLoading, write } = useContractWrite(config);

  const { data: allMessages, isLoading: isMessageLoading } = useContractRead({
    address: GuestBook.address as any,
    abi: GuestBook.abi,
    functionName: 'getAllMessages',
    watch: true,
  });

  console.log('allMessages', allMessages);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      write?.();
    },
    [write],
  );

  isMessageLoading && <CircularProgress />;

  return (
    <Container>
      <Typography variant="h5" className="my-4 font-bold">
        Guest Book
      </Typography>
      <Typography variant="body2" className="my-4 font-bold text-gray-500">
        Share a on-chain message for a future visitor of my site.
      </Typography>
      <ConnectButton showBalance={false} />

      <form onSubmit={handleSubmit} className="flex flex-row my-4">
        <input
          required
          value={newMessage}
          placeholder="Write a message"
          onChange={(e) => setNewMessage(e.target.value)}
          className="rounded-lg w-1/2 h-12 border-2 border-gray-300 px-4"
        />
        <Button
          disabled={!write || isLoading}
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white hover:text-gray-100 rounded-lg mx-4 font-bold"
        >
          {isLoading ? 'Loading...' : 'Send'}
        </Button>
      </form>

      {mounted &&
        allMessages instanceof Array &&
        allMessages?.map((message: any, index: number) => {
          return (
            <div key={index} className="flex flex-col  my-2 p-1 ">
              <Typography variant="body1" className="m-1 font-bold">
                {message?.message}
              </Typography>
              <Typography className="m-1 font-semibold text-gray-500 dark:text-gray-400">
                From: {truncatedAddress(message.sender)}
              </Typography>
            </div>
          );
        })}
    </Container>
  );
}
