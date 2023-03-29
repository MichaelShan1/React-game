import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useGames';
import optimizeImage from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatFormIcon from './PlatFormIcon';

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={optimizeImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatFormIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIcon>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
