import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [urlOpened, setUrlOpened] = useState('');
  if (!cards) {
    return <></>;
  }

  function handleCloseImage(url: string): void {
    setUrlOpened(url);
    onOpen();
  }

  return (
    <SimpleGrid columns={3} spacing={10}>
      {cards.map(card => (
        <Card key={card.id} data={card} viewImage={handleCloseImage} />
      ))}

      <ModalViewImage imgUrl={urlOpened} isOpen={isOpen} onClose={onClose} />
    </SimpleGrid>
  );
}
