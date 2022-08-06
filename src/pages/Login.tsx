import { useAuth } from '@/providers/AuthProvider';

export default function Login() {
  const { login, user, logout } = useAuth();

  const handleClick = user ? logout : login;

  return (
    <div>
      <button onClick={handleClick}>{user ? 'Logout' : 'Login'}</button>
    </div>
  );
}
