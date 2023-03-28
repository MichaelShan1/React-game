import {
  Button,
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
    <List>
      {data.map((category) => (
        <ListItem paddingY="5px" key={category.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8"
              src={optimizeImage(category.image_background)}
            />
            <Button
              onClick={() => onSelectCate(category)}
              variant="link"
              fontSize="lg"
            >
              {category.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
