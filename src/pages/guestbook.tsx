import Container from 'src/components/Container';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import GuestBook from 'contracts/abi/GuestBook.json';
import { useCallback, useState } from 'react';
export default function guestbook() {
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
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      write?.();
    },
    [write],
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(allMessages);
  return (
    <Container>
      <h1>GuestBook</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            required
            id="message"
            cols={30}
            rows={10}
            value={newMessage}
            placeholder="Write a message"
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>

        {allMessages?.map((message: string, index: number) => {
          return (
            <div key={index}>
              <p>{message.message}</p>
              <p>{message.sender}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
