import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { Link } from '../Link';
import { LoginButton } from '../LoginButton';
import { ThemeToggler } from '../ThemeToggler';

export const Header = () => {
  return (
    <Box as="header" px={4} py={2} bg="bg" borderBottom="1px" pos="sticky" top={0} zIndex={3}>
      <Flex justifyContent="space-between" alignItems="center" px={4}>
        <HStack spacing={4}>
          <Link to="/">
            <Heading as="h3" size="md" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
              Modern React template
            </Heading>
          </Link>
          <Link to="posts" preload={Infinity}>
            <Text>Posts</Text>
          </Link>
          <Link to="slower">Slower</Link>
          <Link to="admin">Admin</Link>
        </HStack>
        <HStack spacing={4}>
          <ThemeToggler />
          <LoginButton />
        </HStack>
      </Flex>
    </Box>
  );
};
