import { QueryClientProvider } from './RQProvider';
import { AuthProvider } from './AuthProvider';
import { ThemeProvider } from './ThemeProvider';

type Props = {
  children: React.ReactNode;
};

function AppProviders({ children }: Props) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export { AppProviders };
