import { Outlet } from '@tanstack/react-location';
import { Flex } from '@chakra-ui/react';
import { Header } from '@/components/Header';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Flex as="main" direction="column" px={12} py={6}>
        <Outlet />
      </Flex>
    </>
  );
};
