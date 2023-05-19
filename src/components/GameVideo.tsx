import { Spinner } from '@chakra-ui/react';
import useVideos from '../hooks/useVideos';
interface Props {
  gameId: number;
}

const GameVideo = ({ gameId }: Props) => {
  const { data, error, isLoading } = useVideos(gameId);
  if (isLoading) {
    return <Spinner />;
  }
  if (error) throw error;
  const first = data?.results[0];
  if (!first) return null;
  return <video src={first.data[480]} poster={first.preview} controls></video>;
};

export default GameVideo;
