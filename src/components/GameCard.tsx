import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useGames';
import optimizeImage from '../services/image-url';
import CriticScore from './CriticScore';
import PlatFormIcon from './PlatFormIcon';

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={optimizeImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatFormIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIcon>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
