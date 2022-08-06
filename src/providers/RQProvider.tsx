import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { DefaultOptions, QueryClient, QueryClientProvider as RQProvider } from 'react-query';

const queryConfig: DefaultOptions = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export function QueryClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <RQProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </RQProvider>
  );
}
