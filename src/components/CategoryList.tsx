import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useCategory, { Genre } from '../hooks/useCategory';
import optimizeImage from '../services/image-url';

interface Props {
  onSelectCate: (cate: Genre) => void;
  selectedCate: Genre | null;
}
const CategoryList = ({ selectedCate, onSelectCate }: Props) => {
  const { data, loading, error } = useCategory();
  if (error) return null;
  if (loading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        类型
      </Heading>
      <List>
        {data.map((category) => (
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
                onClick={() => onSelectCate(category)}
                variant="link"
                fontSize="lg"
                fontWeight={
                  category.id === selectedCate?.id ? 'bold' : 'normal'
                }
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
