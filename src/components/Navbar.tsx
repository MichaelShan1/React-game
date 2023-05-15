import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorMode from './ColorMode';
import SearchInput from './SearchInput';

const navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorMode />
    </HStack>
  );
};

export default navbar;
