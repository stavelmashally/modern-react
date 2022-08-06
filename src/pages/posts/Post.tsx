import { useMatch } from '@tanstack/react-location';
import { Heading, Text } from '@chakra-ui/react';
import { usePost } from '@/api/posts';
import { LocationGenerics } from '@/routes';

export default function Post() {
  const { params } = useMatch<LocationGenerics>();
  const { post } = usePost(params.postId);

  return (
    <div>
      <Heading as="h2" size="lg">
        {post?.title}
      </Heading>
      <Text>{post?.body}</Text>
    </div>
  );
}
