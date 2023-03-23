import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useGames';
import PlatFormIcon from './PlatFormIcon';

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatFormIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatFormIcon>
      </CardBody>
    </Card>
  );
};

export default GameCard;
