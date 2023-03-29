import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import usePlatform from '../hooks/usePlatform';

interface Props {
  selectedPlatform?: Platform | null;
  onSelectedPlat: (plat: Platform) => void;
}
const PlatformSelector = ({ onSelectedPlat, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton marginLeft={10} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || '平台'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onSelectedPlat(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
