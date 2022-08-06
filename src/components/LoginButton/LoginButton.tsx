import { Button } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-location';
import { useAuth } from '@/providers/AuthProvider';

export const LoginButton = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  if (user)
    return (
      <Button
        variant="primary"
        size="sm"
        onClick={() => {
          logout();
          navigate({ to: '/', replace: true });
        }}
      >
        Logout
      </Button>
    );

  return (
    <Button variant="primary" onClick={login}>
      Login
    </Button>
  );
};
