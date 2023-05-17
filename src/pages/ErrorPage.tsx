import { Box, Heading, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <Box padding={5}>
        <Heading> 糟糕</Heading>
        <Text>{isRouteErrorResponse(error) ? '此页面不存在' : '报错'}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
