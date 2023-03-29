import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release date' },
  { value: '-metacritic', label: 'Populartity' },
  { value: '-rating', label: 'Average rating' },
];

interface Props {
  onSort: (sortOrder: string) => void;
}
const SortSelector = ({ onSort }: Props) => {
  return (
    <Menu>
      <MenuButton marginLeft={10} as={Button} rightIcon={<BsChevronDown />}>
        Order by:
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem onClick={() => onSort(sort.value)} key={sort.value}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
