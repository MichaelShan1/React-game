import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorMode from './ColorMode';
const navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorMode />
    </HStack>
  );
};

export default navbar;
