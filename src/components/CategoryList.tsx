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
  selectedCateId?: number;
}
const CategoryList = ({ selectedCateId, onSelectCate }: Props) => {
  const { data, isLoading, error } = useCategory();
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
                onClick={() => onSelectCate(category)}
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
