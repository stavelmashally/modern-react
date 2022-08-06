import axios from 'axios';
import { useQuery } from 'react-query';

import { IPost } from '@/interfaces';
import { queryClient } from '@/providers/RQProvider';

const postsQueryConfig = {
  staleTime: Infinity,
};

const fetchPosts = (): Promise<IPost[]> => axios.get(`/posts`);

const fetchPost = (id: string): Promise<IPost> => axios.get(`/posts/${id}`);

const getPostsConfig = () => ({
  queryKey: 'posts',
  queryFn: fetchPosts,
  ...postsQueryConfig,
});

export const usePosts = () => {
  const { data: posts, ...rest } = useQuery(getPostsConfig());
  return { posts, ...rest };
};

export const prefetchPosts = async () => {
  await queryClient.prefetchQuery(getPostsConfig());
};

const getPostConfig = (id: string) => ({
  queryKey: ['post', id],
  queryFn: () => fetchPost(id),
  ...postsQueryConfig,
});

export const usePost = (id: string) => {
  const { data: post, ...rest } = useQuery(getPostConfig(id));
  return { post, ...rest };
};

export const prefetchPost = async (id: string) => {
  await queryClient.prefetchQuery(getPostConfig(id));
};
