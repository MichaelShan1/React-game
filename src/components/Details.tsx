import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game } from '../entities/Game';
import CriticScore from './CriticScore';
import GameAttribute from './GameAttribute';

interface Props {
  data: Game;
}
const Details = ({ data }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <GameAttribute term="平台">
          {data.parent_platforms?.map((p) => (
            <Text key={p.platform.id}>{p.platform.name}</Text>
          ))}
        </GameAttribute>
        <GameAttribute term="评价">
          <CriticScore score={data.metacritic} />
        </GameAttribute>
        <GameAttribute term="类型">
          {data.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </GameAttribute>
        <GameAttribute term="游戏作者">
          {data.publishers?.map((publisher) => (
            <Text key={publisher.name}>{publisher.name}</Text>
          ))}
        </GameAttribute>
      </SimpleGrid>
    </>
  );
};

export default Details;
