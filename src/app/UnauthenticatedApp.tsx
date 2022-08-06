import { Button } from '@chakra-ui/react';
import { useAuth } from '../providers/AuthProvider';

export default function UnauthenticatedApp() {
  const { login } = useAuth();

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
    >
      <Button onClick={login}>Login</Button>
    </div>
  );
}
