import { Route } from '@tanstack/react-location';

import { LocationGenerics } from '@/routes';

const slowerRoutes: Route<LocationGenerics> = {
  path: 'slower',
  element: () => import('../posts/Posts').then(mod => <mod.default />),
  pendingElement: async () => <h2>Loading Slower...</h2>,
};

export default slowerRoutes;
