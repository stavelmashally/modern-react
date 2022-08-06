import { Route } from '@tanstack/react-location';

import { LocationGenerics } from '@/routes';
import { prefetchPosts, prefetchPost } from '@/api/posts';

const postsRoutes: Route<LocationGenerics> = {
  path: 'posts',
  children: [
    {
      path: '/',
      loader: () => prefetchPosts().then(() => ({})),
      element: () => import('./Posts').then(mod => <mod.default />),
      pendingElement: async () => <h2>Loading Posts...</h2>,
    },
    {
      path: ':postId',
      loader: async ({ params: { postId } }) => prefetchPost(postId).then(() => ({})),
      element: () => import('./Post').then(mod => <mod.default />),
      pendingElement: async () => <h2>Loading Post...</h2>,
    },
  ],
};

export default postsRoutes;
