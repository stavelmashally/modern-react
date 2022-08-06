import { Route } from '@tanstack/react-location';
import { LocationGenerics } from '@/routes';

const homeRoutes: Route<LocationGenerics> = {
  path: '/',
  element: () => import('./Home').then(mod => <mod.default />),
};

export default homeRoutes;
