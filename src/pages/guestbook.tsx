import Container from 'src/components/Container';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import GuestBook from 'contracts/abi/GuestBook.json';
import { useCallback, useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { truncatedAddress } from 'src/utils/helpers';

export default function guestbook() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [newMessage, setNewMessage] = useState<string>('');
  const { config } = usePrepareContractWrite({
    addressOrName: GuestBook.address,
    contractInterface: GuestBook.abi,
    functionName: 'message',
    args: [newMessage],
  });

  const { data, isLoading, write } = useContractWrite(config);

  const { data: allMessages, isLoading: isMessageLoading } = useContractRead({
    addressOrName: GuestBook.address,
    contractInterface: GuestBook.abi,
    functionName: 'getAllMessages',
    watch: true,
  });

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      write?.();
    },
    [write],
  );

  return (
    <Container>
      <Typography variant="h5" className="my-4 font-bold">
        Guest Book
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="message"
          fullWidth
          value={newMessage}
          placeholder="Write a message"
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button
          disabled={!write || isLoading}
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white hover:text-gray-100 rounded-lg px-4 py-2 mt-4"
        >
          {isLoading ? 'Loading...' : 'Send'}
        </Button>
      </form>

      {mounted &&
        allMessages?.map((message: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col border rounded-sm border-spacing-1 m-1 p-1 shadow-sm"
            >
              <Typography className="m-1">
                Message: {message?.message}
              </Typography>
              <Typography className="m-1">
                From: {truncatedAddress(message.sender)}
              </Typography>
            </div>
          );
        })}
    </Container>
  );
}
