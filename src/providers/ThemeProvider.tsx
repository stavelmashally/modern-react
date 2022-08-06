import { createContext, useContext, useMemo } from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import theme from '@/theme';

const ThemeContext = createContext<{}>(undefined!);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(() => ({}), []);

  return (
    <ThemeContext.Provider value={value}>
      <ChakraProvider theme={theme} resetCSS={false}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
