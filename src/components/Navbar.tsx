import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorMode from './ColorMode';
import SearchInput from './SearchInput';

const navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>

      <SearchInput />
      <ColorMode />
    </HStack>
  );
};

export default navbar;
