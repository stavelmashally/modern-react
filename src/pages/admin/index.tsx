import { Route } from '@tanstack/react-location';
import { LocationGenerics } from '@/routes';

const adminRoutes: Route<LocationGenerics> = {
  path: 'admin',
  element: () => import('./Admin').then(mod => <mod.default />),
};

export default adminRoutes;
