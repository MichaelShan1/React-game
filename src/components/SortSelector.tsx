import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';

const sortOrders = [
  { value: '', label: '全部' },
  { value: '-added', label: '时间' },
  { value: 'name', label: '名字' },
  { value: '-released', label: '发布日期' },
  { value: '-metacritic', label: '热度' },
  { value: '-rating', label: '评价' },
];

interface Props {
  onSort: (sortOrder: string) => void;
  selectedSort: string;
}
const SortSelector = ({ onSort, selectedSort }: Props) => {
  const currentSort = sortOrders.find((order) => order.value === selectedSort);
  return (
    <Menu>
      <MenuButton marginLeft={10} as={Button} rightIcon={<BsChevronDown />}>
        排序: {currentSort?.label && '全部'}
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
