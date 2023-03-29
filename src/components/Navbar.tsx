import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorMode from './ColorMode';
import SearchInput from './SearchInput';
interface Props {
  onSearch: (searchText: string) => void;
}
const navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorMode />
    </HStack>
  );
};

export default navbar;
