import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
          <Link to={'/games/' + game.slug}>{game.name}</Link>

          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
