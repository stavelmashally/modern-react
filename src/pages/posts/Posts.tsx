import React from 'react';
import { Link } from '@tanstack/react-location';
import { Flex, Grid, Heading, Button, Text, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { usePosts } from '@/api/posts';
import { IPost } from '@/interfaces';

const NewPostModal = React.lazy(() => import('@/components/NewPostModal'));

function Post({ post }: { post: IPost }) {
  return (
    <Link to={post.id}>
      <Flex
        as="article"
        direction="column"
        gap={4}
        p={2}
        border="1px"
        borderRadius="xl"
        borderColor="border"
      >
        <Heading as="h3" size="md">
          {post.title}
        </Heading>
        <Text>{post.body.slice(0, 30)}</Text>
      </Flex>
    </Link>
  );
}
export default function Posts() {
  const { posts } = usePosts();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column" gap={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h3" size="md">
          Posts
        </Heading>
        <Button
          aria-label="create new post"
          variant="ghost"
          size="md"
          rightIcon={<AddIcon />}
          onClick={onOpen}
        >
          Create new post
        </Button>
      </Flex>
      <Grid templateColumns="repeat(3,minmax(0,1fr))" gap={6}>
        {posts?.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
      {isOpen && <NewPostModal onClose={onClose} />}
    </Flex>
  );
}
