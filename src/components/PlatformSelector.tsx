import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameQuery from '../store';

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const selectedPlatformId = useGameQuery((s) => s.gameQuery.platformId);
  const onSelectedPlat = useGameQuery((s) => s.setPlatformId);
  const selectedPlatform = usePlatforms(selectedPlatformId);
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
          <MenuItem
            onClick={() => onSelectedPlat(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
