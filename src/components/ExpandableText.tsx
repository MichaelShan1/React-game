import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const limit = 300;
  const [expand, setExpand] = useState(false);
  if (!children) return null;
  const summary = expand ? children : children.substring(0, limit) + '...';

  if (children.length <= limit) return <Text>{children}</Text>;
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpand(!expand)}
      >
        {expand ? '收起' : '展开'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
