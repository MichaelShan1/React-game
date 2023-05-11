import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../hooks/usePlatform';
import usePlatform from '../hooks/usePlatform';

interface Props {
  selectedPlatformId?: number;
  onSelectedPlat: (plat: Platform) => void;
}
const PlatformSelector = ({ onSelectedPlat, selectedPlatformId }: Props) => {
  const { data, error } = usePlatform();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );
  if (error) return null;
  return (
    <Menu>
      <MenuButton
        marginLeft={10}
        marginRight={3}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedPlatform?.name || '平台'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => onSelectedPlat(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
