import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useCategory from '../hooks/useCategory';
import optimizeImage from '../services/image-url';
import useGameQuery from '../store';

const CategoryList = () => {
  const { data, isLoading, error } = useCategory();
  const selectedCateId = useGameQuery((s) => s.gameQuery.genreId);
  const setGenreId = useGameQuery((s) => s.setGenreId);
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        类型
      </Heading>
      <List>
        {data?.results.map((category) => (
          <ListItem paddingY="5px" key={category.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={optimizeImage(category.image_background)}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                onClick={() => setGenreId(category.id)}
                variant="link"
                fontSize="lg"
                fontWeight={category.id === selectedCateId ? 'bold' : 'normal'}
              >
                {category.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CategoryList;
