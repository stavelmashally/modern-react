import { Outlet } from '@tanstack/react-location';

export function AuthLayout() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
    >
      <Outlet />
    </div>
  );
}
