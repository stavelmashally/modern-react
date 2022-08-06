import { Router, ReactLocation, Route, MakeGenerics } from '@tanstack/react-location';

// import NotFound from '@/pages/404';
import adminRoutes from '@/pages/admin';
import homeRoutes from '@/pages/home';
import postsRoutes from '@/pages/posts';
import slowerRoutes from '@/pages/slower';
import { MainLayout } from '@/components/Layouts';

export type LocationGenerics = MakeGenerics<{
  Params: {
    postId: string;
  };
}>;

const location = new ReactLocation<LocationGenerics>();

const routes: Route<LocationGenerics>[] = [
  { element: <MainLayout />, children: [homeRoutes, postsRoutes, slowerRoutes, adminRoutes] },
];

export function AppRoutes() {
  return (
    <Router location={location} routes={routes} defaultPendingMs={1} defaultPendingMinMs={500} />
  );
}
