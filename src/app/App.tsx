import React from 'react';
import { useAuth } from '../providers/AuthProvider';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

export default function App() {
  const { user } = useAuth();

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}
